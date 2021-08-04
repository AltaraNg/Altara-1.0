<?php


namespace App\Repositories;

use Illuminate\Container\Container as App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

abstract class Repository
{
    /**
     * @var App
     */
    private $app;

    protected $model;

    protected $newModel;

    protected $request;

    /**
     * @param App $app
     * @param Collection $collection
     * @param Request $request
     * @throws RepositoryException
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function __construct(App $app, Collection $collection, Request $request)
    {
        $this->app = $app;
        $this->filter = $collection;
        $this->request = $request;
        $this->criteria = $collection;
        $this->makeModel();

        $this->page = (int)$request->query->get('page', 1);
        $this->limit = (int)$request->query->get('limit', 20);
    }

    public function all() {
        $limit = request('limit', 20);
        return $this->model::latest()->paginate($limit);
    }

    public function getAll($filter)
    {
        return $this->model::latest()->filter($filter)->paginate($this->limit);
    }

    public function query($filter)
    {
        return $this->model::filter($filter)->paginate($this->limit);
    }

    public function store(array $data) {
        return $this->model::create($data);
    }

    public function update($model, $data) {
        $model->update($data);
        return $model;
    }

    public function updateOrCreate($model, $target,$data) {

        $model->updateOrCreate($target, $data);

        return $model;
    }

    public function delete($model) {
        $model->delete();
        return $model;
    }

    /**
     * @return Model
     * @throws RepositoryException
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function makeModel()
    {
        return $this->setModel($this->model());
    }

    /**
     * Set Eloquent Model to instantiate
     *
     * @param $eloquentModel
     * @return Model
     * @throws RepositoryException
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function setModel($eloquentModel)
    {
        $this->newModel = $this->app->make($eloquentModel);

        if (!$this->newModel instanceof Model)
            throw new RepositoryException("Class {$this->newModel} must be an instance of Illuminate\\Database\\Eloquent\\Model");
        return $this->model = $this->newModel;
    }
}

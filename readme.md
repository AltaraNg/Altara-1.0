# Altara PHP Application

Altara PHP is build with Laravel and uses docker.

## Laravel Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Setting Up

1. Ensure you have Docker Installed. If you do not have docker installed got to [Docker Website](https://docs.docker.com/engine/installation/#installation).
2. Clone repo to preferred directory.
3. Change directory to the application directory. `cd altara`.
5. Make sure that the project directory and subfolders are writable
6. Run `docker build -t altara ./docker`. This will download all dependencies needed to run application. 
8. Rename .env.example to .env and edit contents accordingly
9. Import mysql db data
11. Navigate to http://localhost:{port}/(port is 7070 if you didn't modify web:ports in docker-compose.yml) to access the website

```

SSH into container. `docker exec -t -i container_id /bin/bash`.
```
➜  altara git:(master) ✗ docker exec -t -i 7966b099bd20 /bin/bash
root@7966b099bd20:/#
```

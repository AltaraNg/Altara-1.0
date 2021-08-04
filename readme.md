# Altara PHP Application
Altara PHP is build with Laravel and uses docker.

Table of Contents

Installation
Usage
Documentation

# Setup Docker
$ Ensure you have Docker Installed. If you do not have docker installed got to [Docker Website](https://docs.docker.com/engine/installation/#installation).

# clone the repo
$ git clone https://github.com/AltaraNg/Altara-1.0.git my-project

# go into app's directory
$ cd my-project
$ Make sure that the project directory and subfolders are writable

# Build App
$ Run `docker-compose build -t altara`. This will download all dependencies needed to run application.

# SSH into container.
$ Run `docker exec -it container_id bash`.

# install app's dependencies
$ composer install

# install app's dependencies
$ npm install

# Environment
$ Copy file ".env.example", and change its name to ".env". Then in file ".env" and edit content accordingly:

Usage

# Usage
$ Navigate to http://localhost:{port}/(port is 7070 if you didn't modify web:ports in docker-compose.yml) to access the website

Documentation

# Documentation
$ Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

# Crispy Succotash

## Installation

1. Install [Docker](https://docs.docker.com/installation/) and [Docker Compose](https://docs.docker.com/compose/install/)

2. cd into the project directory

        :::shell
        cd crispy-succotash

3. Run it

        :::shell
        docker-compose up

That's it! :) The project will be available on port 8000 of your Docker host. 

## Running the tests

```shell
docker-compose run app bash
./manage.py test
```

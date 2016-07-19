# kue-ui
> Dockerized [kue](https://github.com/Automattic/kue) web interface with basic authentication

## Run
```sh
  docker run -it -p 5000:5000 --link redis -e USERNAME=admin -e PASSWORD=password -e KUE_PREFIX=queue arch3r/kue-ui
```

## Licence
[MIT License (MIT)](http://opensource.org/licenses/MIT)

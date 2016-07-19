# kue-ui
> Dockerized [kue](https://github.com/Automattic/kue) web interface.

## Run
```sh
  docker run -it -p 5000:5000 --link redis -e USERNAME=admin -e PASSWORD=password -e KUE_PREFIX=queue archr/kue-ui
```

## Licence
[MIT License (MIT)](http://opensource.org/licenses/MIT)

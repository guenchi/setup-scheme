# setup-scheme

![](https://github.com/guenchi/setup-scheme/workflows/Master/badge.svg)

Github Actions CI / CD setup for Scheme

### Usage

See [action.yml](https://github.com/guenchi/setup-scheme/blob/master/action.yml)

Exemple: [ci.yml](https://github.com/guenchi/setup-scheme/blob/master/.github/workflows/ci.yml)

```yaml
name: CI

on: 
   push:

jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os:
          - windows-latest
          - ubuntu-latest
          - macos-latest
    steps:
      - uses: actions/checkout@master
      - uses: guenchi/setup-scheme@master
        with:
          implementation: chez
```


### Implementation tag: 
```
                                          MacOS           Linux   Windows
Chez Scheme                chez             X               X       x
Gambit Scheme              gambit           X               X       x
Gerbil Scheme              gerbil           X
MIT Scheme                 mit              X               X
Racket                     racket           X               X       x
Guile Scheme               guile            X               X
Chicken Scheme             chicken          X               x       x
```


### License

The scripts and documentation in this project are released under the MIT License

### Contributions

Contributions are welcome! 
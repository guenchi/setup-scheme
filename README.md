![](https://github.com/guenchi/setup-scheme/workflows/Master/badge.svg)

# setup-scheme
Github Action CI / CD setup for Scheme

### Usage

See [action.yml](https://github.com/guenchi/setup-scheme/blob/master/action.yml)

Exemple: [ci.yml](https://github.com/guenchi/setup-scheme/blob/master/.github/workflows/ci.yml)

```
on: push

jobs:
  jobsName:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@master
    - uses: guenchi/setup-scheme@master
      with:
        implementation: chez
    - run: chez youTestFiles.ss
```

implementation surpport: 
```
Chez Scheme          chez
Gambit Scheme        gambit
MIT Scheme           mit
```

todo:
```
grebil
cyclone
bigloo
rackect
larceny
ypsilon
guile
chicken
```
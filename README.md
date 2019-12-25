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
    - run: chez yourTestFiles.ss
```

for Grebil Scheme:
```
    - run: |
            export PATH=/usr/local/opt/gambit-scheme/current/bin:/usr/local/opt/gerbil-scheme/libexec/bin:$PATH
            export GERBIL_HOME=/usr/local/opt/gerbil-scheme/libexec
            gxi yourTestFiles.ss
```
Grebil Scheme has only MacOS version.

### Implementation tag: 
```
Chez Scheme          chez
Gambit Scheme        gambit
Grebil Scheme        grebil
MIT Scheme           mit
Racket               racket
```



### Todo:
```
cyclone
bigloo
larceny
ypsilon
guile
```
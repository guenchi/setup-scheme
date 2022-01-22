# setup-scheme

![](https://github.com/guenchi/setup-scheme/workflows/Master/badge.svg)

Github Actions CI / CD setup for Scheme

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

for Gerbil Scheme:
```
    - run: |
            export PATH=/usr/local/opt/gambit-scheme/current/bin:/usr/local/opt/gerbil-scheme/libexec/bin:$PATH
            export GERBIL_HOME=/usr/local/opt/gerbil-scheme/libexec
            gxi yourTestFiles.ss
```


### Implementation tag: 
```
                                          MacOS           Linux   Windows
Chez Scheme                chez             X               X
Gambit Scheme              gambit           X               X
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
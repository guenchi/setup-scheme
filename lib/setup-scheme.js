const core = require('@actions/core');
const {exec} = require('@actions/exec');
const {installElixir, installOTP} = require('./installer');
const path = require('path');
const semver = require('semver');
const https = require('https');

main().catch(err =>{
    core.setFailed(err.message);
})


async function main() {
    checkPlatform();

    const implementation = core.getInput('implementation', {required: true});
    const system = core.getInput('system', {required: true});
    const version = core.getInput('version');
    const option = core.getInput('option');
  
    switch (implementation) {
      
    case 'chez' : null; 
        break;
  //  case 'gambit':
  //  case 'grebil':
  //  case 'cyclone':
  //  case 'mit'
  //  case 'bigloo'
  //  case 'rackect'
  //  case 'larceny'
  //  case 'ypsilon'
  //  case 'guile'
  //  case 'chicken'
     
    }
  
    if (!version) {
        version = null;
    }

    if (!option){
        option = null ;
    }
  

  
}

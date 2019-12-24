// const core = require('@actions/core');
const {exec} = require('@actions/exec');
const path = require('path');
const semver = require('semver');

main().catch(err =>{
    core.setFailed(err.message);
})


async function main() {
    checkPlatform();

    const implementation = core.getInput('implementation', {required: true});
    const version = core.getInput('version');
    const option = core.getInput('option');

    await exec(path.join(__dirname, 'a-chez'))
  
    // switch (implementation) {
      
    // case 'chez' : null; 
    //     break;
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
     
    // }
  
    // if (!version) {
    //     version = null;
    // }

    // if (!option){
    //     option = null ;
    // }
  

  
}

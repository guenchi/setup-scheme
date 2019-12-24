const core = require('@actions/core');
const {exec} = require('@actions/exec');


main().catch(err =>{
    core.setFailed(err.message);
})


async function main() {

    const implementation = core.getInput('implementation', {required: true});
    const version = core.getInput('version');
    const option = core.getInput('option');
    
    if (process.platform === 'macos') {
        switch (implementation) {

            case'chez':
                await exec('brew install chezscheme');
                break;
        }

    } else if (process.platform === 'linux') {
        switch (implementation) {

            case'chez':
                await exec('brew install chezscheme');
                break;
        }
        
    }
  
    // 
      
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

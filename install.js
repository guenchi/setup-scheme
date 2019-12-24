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
                await exec('sudo brew install chezscheme');
                break;
        }

    } else if (process.platform === 'linux') {
        switch (implementation) {

            case'chez':
                await exec('sudo apt install chezscheme');
                break;
        }
        
    }
  


  
}

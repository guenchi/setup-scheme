const core = require('@actions/core');
const {exec} = require('@actions/exec');


main().catch(err =>{
    core.setFailed(err.message);
})


async function main() {

    const implementation = core.getInput('implementation', {required: true});
    const version = core.getInput('version');
    const option = core.getInput('option');
    


    if (process.platform === 'darwin') {
        switch (implementation) {

            case'chez':
                await exec('brew install chezscheme | cd /usr/local/bin | cp chez scheme');
                
                break;
        }
        // if(option === 'raven'){
        //     await exec('curl -L http://ravensc.com/install | sudo scheme');
        // }
    } else if (process.platform === 'linux') {
        switch (implementation) {

            case'chez':
                await exec('sudo apt install chezscheme');
                break;
        }
        // if(option === 'raven'){
        //     await exec('curl -L http://ravensc.com/install | sudo scheme');
        // }
    }
  
    

  
}

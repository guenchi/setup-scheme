const core = require('@actions/core');
const {exec} = require('@actions/exec');
const {installElixir, installOTP} = require('./installer');
const path = require('path');
const semver = require('semver');
const https = require('https');

main().catch(err => {
  core.setFailed(err.message);
})


async function main() {
  checkPlatform();

  const implName = core.getInput('impl-name', {required: true});
  const implVersion = core.getInput('impl-version', {required: true});
  const otpSpec = core.getInput('option', {required: false});
  

  
}

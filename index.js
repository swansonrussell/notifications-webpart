#!/usr/bin/env node
'use strict';
const fs = require('fs');

const DeployProcessor = require('./controller');

const currentDir = process.cwd();

if (fs.existsSync(`${process.cwd()}/package.json`)) {
  const packageJsonPath = `${process.cwd()}/package.json`;
  const packageJsonFileData = JSON.parse(fs.readFileSync(this.packageJsonPath, 'utf8'));

  if (packageJsonFileData.hasOwnProperty('env') && packageJsonFileData['env'].hasOwnProperty('targets')) {
    new DeployProcessor(packageJsonPath);
  } else {
    console.log('Notice there is no environment set in package.json.')
  }
} else {
  const srDeployGlobal = require('./libs/global-sr-deploy');
  console.log('Notice there is no package.json in the current path.');
  srDeployGlobal();
}
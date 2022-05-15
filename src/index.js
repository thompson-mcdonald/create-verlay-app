#!/usr/bin/env node
const shell = require('shelljs')
var myArgs = process.argv.slice(2);

if (process.argv.length <= 2) {
  console.log("Please give this folder a name");
  process.exit(-1);
}

shell.exec(`mkdir ${myArgs[0]} && cd ${myArgs[0]}`)
shell.exec(`git clone git@github.com:thompson-mcdonald/verlay-starter-2022.git ${myArgs[0]} && cd ${myArgs[0]} && rm -rf .git && git init`)

#!/usr/bin/env node
const shell = require('shelljs')
var myArgs = process.argv.slice(2);

if (process.argv.length <= 2) {
  console.log("Please give this folder a name");
  process.exit(-1);
}

shell.exec(`mkdir ${myArgs[0]} && cd ${myArgs[0]}`)

if ($n < 2) {
  shell.exec(`git clone git@github.com:thompson-mcdonald/verlay001.git ${myArgs[0]} && cd ${myArgs[0]} && rm -rf .git && git init`)
} else {
  shell.exec(`git clone --single-branch --branch redux git@github.com:thompson-mcdonald/verlay001.git ${myArgs[0]} && cd ${myArgs[0]} && rm -rf .git && git init`)
}


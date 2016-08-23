#!/usr/bin/env node

'use strict';

const program = require('commander'),
    inquirer = require('inquirer'),
    chalk = require('chalk'),
    pkg = require('./package.json');

let createConfig = (options) => {
    console.log('Fueling jetpack...');
};

program
    .version(pkg.version)
    .command('fuel')
    .description('Fueling jetpack...')
    .action(createConfig);
program.parse(process.argv);

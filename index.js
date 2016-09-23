#!/usr/bin/env node
'use strict';

const program = require('commander'),
    pkg = require('./package.json');

program
    .version(pkg.version)
    .command('fuel', 'bootstraps a basic webpack configuration file')
    .command('load', 'same as fuel, but interactive and more verbose', {isDefault: true})
program.parse(process.argv);

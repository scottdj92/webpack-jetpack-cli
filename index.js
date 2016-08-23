#!/usr/bin/env node
'use strict';

const program = require('commander'),
    inquirer = require('inquirer'),
    chalk = require('chalk'),
    pkg = require('./package.json'),
    fs = require('fs');

let createConfig = (options) => {
    console.log('Fueling jetpack...');
    start();
    //openFile();
};

let start = () => {
    fs.open(__dirname + '/export/webpack.config.js', "w+", function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("opened file in:");

        var config = require('./configs/base');
        console.log(config);
        writeFile(config);
    });
};

let writeFile = (data) => {
    console.log("Building configuration");
    fs.writeFile(__dirname + '/export/webpack.config.js', data.config, function(err) {
        if (err) {
            return console.error("error writing file", err);
        }
    });
};

program
    .version(pkg.version)
    .command('fuel')
    .description('bootstraps a basic webpack configuration file')
    .action(createConfig);
program.parse(process.argv);

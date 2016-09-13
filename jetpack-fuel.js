const fs = require('fs'),
    inquirer = require('inquirer'),
    chalk = require('chalk');

let start = () => {
    console.log('Ignition.');
    var config = require('./configs/base');
    writeFile(config);
};

let writeFile = (data) => {
    console.log("Building configuration...");
    let dirname = __dirname + '/webpack.config.js';
    let stringify = JSON.stringify(data, null, 4);
    fs.writeFile(dirname, stringify, function(err) {
        if (err) {
            return console.error("error writing file", err);
        }
        end();
    });
};

let end = () => {
    console.log('Setting down...');
};

console.log('Fueling jetpack...');
start();

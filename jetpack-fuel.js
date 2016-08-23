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
    fs.writeFile(__dirname + '/webpack.config.js', JSON.stringify(data, null, 4), function(err) {
        if (err) {
            return console.error("error writing file", err);
        }
        end(data);
    });
};

let end = (data) => {
    console.log('Setting down...');
};

console.log('Fueling jetpack...');
start();

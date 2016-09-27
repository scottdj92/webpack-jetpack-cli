"use strict";

const inquirer = require('inquirer'),
        questions = require('./questions/jetpack-load'),
        CONFIG = require('./configs/base'),
        fs = require('fs'),
        chalk = require('chalk');

let start = () => {
    console.log('Wrenching');

    inquirer
        .prompt(questions).then(function(answers) {
            onComplete(answers);
        });
}

let onComplete = (data) => {
    // console.log('answer data', data);
    //create placeholder var for config obj
    let config;
    config = handleEntry(data.entry);
    config = handleOutput(data.output);
    //config = handlePlugins();
    config = handleTests(data.tests);

    //write to file
    writeFile(config);
};

let writeFile = (data) => {
    console.log("Building configuration...");
    fs.writeFile(__dirname + '/webpack.config.js', JSON.stringify(data, null, 4), function(err) {
        if (err) {
            return console.error("error writing file", err);
        }
    });
    end(data);
};

let end = (data) => {
    console.log('Touching down.', data);
};

let handleEntry = (entry) => {
    CONFIG.entry.app = entry;
    return CONFIG;
};

let handleOutput = (output) => {
    CONFIG.output.filename = output;
    return CONFIG;
};

let handleLoaders = (module, test) => {
    //for each loader in the array, it'll add it in the module.loaders in the config.
    //console.log(module, test);
};

let handleTests = (tests) => {
    //required for webpack to recognize all file extensions
    //remove the empty first entry
    tests.unshift();
    CONFIG.resolve.extensions = tests;

    if (tests) {
        //create tests
        for(var i = 0; i < tests.length; i++) {
            let model = {
                test: null,
                loader: []
            };
            model.test = new RegExp("\\" + tests[i] + "$");

            //create loaders for specified test
            handleLoaders(model, tests[i]);
            CONFIG.module.loaders.push(model);
        }
    }
    return CONFIG;
}

console.log('Loading jetpack...');
start();

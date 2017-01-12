"use strict";

const inquirer = require('inquirer'),
        questions = require('./questions/jetpack-load'),
        CONFIG = require('./configs/base'),
        fs = require('fs'),
        chalk = require('chalk'),
        LoaderTester = require('./loaders/loaders');

let start = () => {
    console.log('Wrenching');

    inquirer
        .prompt(questions).then(function(answers) {
            onComplete(answers);
        });
}

let onComplete = (data) => {
    console.log('answer data', data);
    //create placeholder var for config obj
    let config;
    config = handleEntry(data.entry);
    config = handleOutput(data.output);
    // config = handlePlugins(data.plugins);
    config = handleRules(data.tests);

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
    console.log('Touching down.');
};

let handleEntry = (entry) => {
    CONFIG.entry.app = entry;
    return CONFIG;
};

let handleOutput = (output) => {
    CONFIG.output.filename = output;
    return CONFIG;
};

let handlePlugins = (plugins) => {
    //CURRENTLY NO SUPPORT FOR THIS UNTIL A BETTER FILE SYSTEM API IS FIGURED OUT
    if (plugins) {
        CONFIG.plugins.push( new HtmlWebpackPlugin({template: 'index.html'}));
    }
}

let handleLoaders = (rule, test) => {
    //for each loader in the array, it'll add it in the loader for the rule in the config.
    console.log('handleLoaders', rule, test);
    let loadedRule = LoaderTester(rule, test);
    console.log('loadedRule', loadedRule);
};

let handleRules = (rules) => {
    //required for webpack to recognize all file extensions
    CONFIG.resolve.extensions = rules;

    if (rules) {
        //create tests
        for(var i = 0; i < rules.length; i++) {
            let rule = {
                test: null,
                use: null
            };
            rule.test = new RegExp('\\' + rules[i] + '$');

            //create loaders for specified test
            handleLoaders(rule, rules[i]);
            CONFIG.module.rules.push(rule);
        }
    }
    return CONFIG;
}

console.log('Loading jetpack...');
start();

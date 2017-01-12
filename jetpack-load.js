"use strict";

const inquirer = require('inquirer'),
        questions = require('./questions/jetpack-load'),
        CONFIG = require('./configs/base'),
        fs = require('fs'),
        chalk = require('chalk'),
        testLoaders = require('./loaders/loaders');

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

let handlePlugins = (plugins) => {
    CONFIG.plugins.push( new HtmlWebpackPlugin({template: 'index.html'}));
}

let handleLoaders = (module, test) => {
    //for each loader in the array, it'll add it in the module.loaders in the config.
    console.log('handleLoaders', module, test);
    testLoader(module, test);
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
            console.log('test', rule.test);

            //create loaders for specified test
            handleLoaders(rule, rules[i]);
            CONFIG.module.rules.push(rule);
        }
    }
    console.log('finishing up rules');
    return CONFIG;
}

let testLoader = (rule, test) => {
    console.log('testLoader', rule, test);
};

console.log('Loading jetpack...');
start();

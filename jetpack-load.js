const inquirer = require('inquirer'),
        questions = require('./questions/jetpack-load'),
        baseConfig = require('./configs/base'),
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
    console.log(data);
    //create placeholder var for config obj
    var config;
    config = handleEntry(data.entry);
    config = handleOutput(data.output);
    //handlePlugins();
    config = handleTests(data.tests);
    config = handleLoaders(data.loaders);

    //write to file
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

let handleEntry = (entry) => {
    baseConfig.entry.app = entry;
};

let handleOutput = (output) => {
    baseConfig.output.filename = output;
    return baseConfig;
};

let handleLoaders = (loaders) => {
    //for each loader in the array, it'll add it in the module.loaders in the config.
};

let handleTests = (tests) => {
    //required for webpack to recognize all file extensions
    let resolve = tests.unshift('');
    baseConfig.resolve.extensions = resolve;

    //create tests and loaders
    for(var i = 0; i < tests.length; i++) {
        let model = {
            test: '',
            loader: ''
        };
        model.test = /\i$/;
        baseConfig.module.loaders.push(model);
    }
    return baseConfig;
}

console.log('Loading jetpack...');
start();

const inquirer = require('inquirer'),
        questions = require('./questions/jetpack-load'),
        baseConfig = require('./configs/base'),
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
    
};


console.log('Loading jetpack...');
start();

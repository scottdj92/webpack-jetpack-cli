const questions = [
    {
        name: 'entry',
        message: "What's the entry point?",
        default: 'index.js'
    },
    {
        name: 'output',
        message: 'Where should webpack output to?',
        default: 'bundle.js'
    },
    {
        name: 'plugins',
        message: 'What plugins will you have?',
        type: 'checkbox',
        choices: [
            'ExtractTextPlugin'
        ]
    },
    {
        name: 'loaders',
        message: 'What loaders will you have?',
        type: 'checkbox',
        choices: [
            'babel',
            'react-hot',
            'style-loader',
            'css-loader',
            'sass-loader',
            'file-loader',
            'json-loader'
        ]
    },
    {
        name: 'tests',
        message: 'What files will you be testing for?',
        type: 'checkbox',
        choices: [
            '.js',
            '.jsx',
            '.css',
            '.scss',
            '.sass',
            '.less',
            '.jpg',
            '.png',
            '.svg',
            '.json'
        ]
    }
];

module.exports = questions;

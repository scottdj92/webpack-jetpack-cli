const questions = [
    {
        name: 'entry',
        message: "What's the entry point?",
        default: 'index.js'
    },
    {
        name: 'output',
        message: 'Where should webpack output to?',
        default: './dist/bundle.js'
    },
    {
        name: 'loaders',
        message: 'What loaders will you have?',
        type: 'checkbox',
        choices: [
            'ExtractTextPlugin',
            'babel',
            'react-hot'
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

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
    //LIMITING PLUGIN QUESTIONS UNTIL A FILESYSTEM API IS FIXED
    // {
    //     name: 'plugins',
    //     message: 'What plugins will you have?',
    //     type: 'checkbox',
    //     choices: [
    //         'ExtractTextPlugin',
    //         'HtmlWebpackPlugin'
    //     ]
    // },
    {
        name: 'loaders',
        message: 'What loaders will you have?',
        type: 'checkbox',
        choices: [
            'babel-latest',
            'react-hot',
            'style-loader',
            'css-loader',
            'sass-loader',
            'file-loader'
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
            '.svg'
        ]
    }
];

module.exports = questions;

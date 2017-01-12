"use strict";

//currently we'll need to hard code the most commonly used loaders here

const testLoader = (rule, ext) => {
    let loaderList = '';
    switch (ext) {
        case '.js':
            loaderList = ['babel-loader'];
        case '.jsx':
            loaderList = ['babel-loader'];
            break;
        case '.css':
            loaderList = ['style-loader', 'css-loader'];
            break;
        case '.scss' | '.sass':
            loaderList = ['css-loader', 'sass-loader'];
            break;
        case '.less':
            loaderList = ['css-loader', 'less-loader'];
        default:
            loaderList = 'file-loader?name=assets/[name].[ext]';
            break;
    }
    rule.use = loaderList;
    return rule;
};

module.exports = testLoader;

"use strict";

//currently we'll need to hard code the most commonly used loaders here

let testLoader = (module, ext) => {
    let loaderList = '';
    switch (ext) {
        case '.js':
            console.log('javascript');
            break;
        case '.css':
            loader = 'style-loader!css';
            break;
        case '.scss':
            loader = 'css!sass';
            break;
        default:
            loader = 'file-loader?name=assets/[name].[ext]';
            break;
    }
    module.loader = loaderList;
    return module;
}

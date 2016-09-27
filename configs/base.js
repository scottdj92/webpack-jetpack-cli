var config = {
    entry: {
        app: './index.js'
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    plugins: [],
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: []
    }
};

module.exports = config;

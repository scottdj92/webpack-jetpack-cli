var config = {
    entry: {
        app: './index.js'
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [],
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        rules: []
    }
};

module.exports = config;

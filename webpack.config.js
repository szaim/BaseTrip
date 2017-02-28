var path = require('path');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            //added to webpack to be able to import css file to index.js (render)
            // installed:   npm install style-loader css-loader --save-dev
             { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

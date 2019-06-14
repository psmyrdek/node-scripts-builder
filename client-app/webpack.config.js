const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'demo-app': path.join(__dirname, './src/demo-app.js')
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './dist'),
        libraryTarget: 'umd'
    }
}
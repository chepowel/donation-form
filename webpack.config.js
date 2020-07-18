var path = require('path');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, './index.js'),
	output: {
		path: __dirname + '/build/',
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
};
const path = require('path');
const webpack = require('webpack');

const config = {
	entry: [
		'babel-polyfill',
		path.resolve(__dirname, 'Scripts/app.js')
	],
	output: {
		path: path.resolve(__dirname, 'wwwroot/js'),
		filename: 'app.bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', },
			// { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
		],
	},
};

module.exports = config;
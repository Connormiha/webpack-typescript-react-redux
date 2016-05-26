'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const PARAMS = {};
const nodePath = path.join(__dirname, '../node_modules');
const sourcePath = path.join(__dirname, '../src/ts');

function extractStyle(loaders) {
	return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

let cssLoaders = 'style!css?localIdentName=[hash:base64]';
let stylusLoaders = `${cssLoaders}!stylus`;

cssLoaders = extractStyle(cssLoaders);
stylusLoaders = extractStyle(stylusLoaders);

const POST_LOADERS = [];

if (NODE_ENV === 'unittest') {
		// add Isparta loader for code coverage if unit tests are runnig
		POST_LOADERS.push({
			test: /\.tsx?$/,
			loader: 'isparta',
			exclude: /node_modules|\.test\.tsx?$/
		});
}

if (NODE_ENV === 'production') {
	PARAMS.watch = false;
	PARAMS.FOLDER = `${__dirname}/../build`;
} else {
	PARAMS.sourceMap = 'inline-source-map';
	PARAMS.watch = true;
	PARAMS.FOLDER = `${__dirname}/../deploy`;
}

module.exports = {
	entry: './src/ts/app.tsx',
	//context: sourcePath,
	output: {
		path: PARAMS.FOLDER,
		filename: 'app.js'
	},
	resolve: {
		root: [sourcePath],
		//modulesDirectories: [nodePath],
		extensions:         ['', '.js', '.ts', '.tsx', '.json']
	},
	resolveLoader: {
        root: [nodePath]
    },
	watch: PARAMS.watch,
	module: {
		noParse: [/\.min\.js$/],
		postLoaders: [POST_LOADERS],
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts',
				exclude: [nodePath]
			},
			{
				test: /\.css$/,
				loader: cssLoaders
			},
			{
				test: /\.styl$/,
				loader: stylusLoaders
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file"
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		],
	},
	devtool: PARAMS.sourceMap,
	plugins: [
		new HtmlWebpackPlugin({
	        template: './src/index.html',
			minify: {
				//removeComments: true
			}
		}),
		new ExtractTextPlugin("app.[hash].css"),
		new webpack.DefinePlugin({
			'process.env': {
					'NODE_ENV': JSON.stringify(NODE_ENV)
			}
		})
  	],
	devServer: {
		host: 'localhost',
		post: 8080,
		historyApiFallback: true,
		// It suppress error shown in console, so it has to be set to false.
		quiet: false,
		// It suppress everything except error, so it has to be set to false as well
		// to see success build.
		noInfo: false,
		stats: {
			// Config for minimal console.log mess.
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}
};


if (NODE_ENV === 'production') {
  module.exports.plugins.push(
	  new webpack.optimize.UglifyJsPlugin({
		compress: {
			// don't show unreachable variables etc
			warnings:     false,
			drop_console: true,
			unsafe:       true
		}
	  })
  );
}

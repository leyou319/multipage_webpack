var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

var config = {
	entry: {
		'index': './src/js/index.js',
		'list': './src/js/list.js',
		'about': './src/js/about.js'
	},
	output: {
		path: __dirname + '/dist/',
		publicPath: 'dev' === WEBPACK_ENV ? '/dist/' : '//leyou319.github.io/multipage_webpack/dist/',
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader?sourceMap=true', 'sass-loader?sourceMap=true']
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: 'url-loader?limit=8192&name=images/[name].[ext]?[hash:6]'
			},
			{
				test: /\.pug$/,
    			use: ['html-loader','pug-html-loader?pretty=true']
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/common.js'
        }),
	],
    externals : {
        'jquery' : 'window.jQuery'
    },
    devServer: {
    	inline: true,
    	proxy: {
    		'/ajaxload': {
    			target: 'http://www.gitchic.com',
    			secure: false,
            	changeOrigin: true
    		}
    	}
    }
}

Object.keys(config.entry).forEach(function(page){
    config.plugins.push( new HtmlWebpackPlugin({
    	template: './src/'+ page +'.pug',
        filename: page+'.html',
        inject: true,
        hash: true,
        chunks: ['common', page]
    }) );
});

if('dev' === WEBPACK_ENV){
    config.devtool = 'inline-source-map';
}

module.exports = config;
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
	// context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: `[name].[hash].js`,
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		// publicPath: './',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, './assets'),
			publicPath: '/assets'
		},
		port: 2345,
		hot: true,
		historyApiFallback: true,
		compress: true,
		client: {
			overlay: false,
			progress: true,
		},
	},
	optimization: {
		minimize: isProd,
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					}
				}],
			},
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: "assets/[name][ext][query]",
				},
			},
		],
	},
	resolve: {
		alias: {
			components: path.join('src', 'components'),
			pages: path.join('src', 'pages'),
			assets: path.join('src', 'assets'),
		},
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['.tsx', '.ts', '.js'],
	}
};

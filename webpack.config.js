module.exports = {
	mode: "development",
	devServer: {
		contentBase: "public",
		open: true
	},
	entry: "./src/main.ts",
	output: {
		path: `${__dirname}/public/js/`,
		filename: "bundle.js"
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	target: ["web", "es5"],
};

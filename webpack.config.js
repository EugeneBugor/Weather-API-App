const webpack = require('webpack');

const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
});
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    entry: isProduction ? ["./src/index.js"] : [
        'webpack-hot-middleware/client',
        "./src/index.js"
    ],
    output: {
        path: "/",
        filename: "bundle.js"
    },
    plugins: isProduction ?
        [
            new webpack.NoErrorsPlugin(),
            definePlugin,
            new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false},
                output: {comments: false}
            })
        ] : [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            }
        ]
    }
};

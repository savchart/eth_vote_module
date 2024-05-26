const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    plugins: [
        new ESLintWebpackPlugin({
            // Removed 'extensions' and 'resolvePluginsRelativeTo' options
            overrideConfigFile: path.resolve(__dirname, '.eslintrc')
        })
    ]
};

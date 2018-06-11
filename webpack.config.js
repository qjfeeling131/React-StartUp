const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path')
var config = {
    entry: path.join(__dirname,'src/index.js'), 
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        inline: true,
        port: 8080
    },
    plugins:[new HtmlWebpackPlugin({
        title:'React Demo',
        template:path.join(__dirname,'public/index.html')
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  },
                ],
            }
        ]
    }
}

module.exports=config
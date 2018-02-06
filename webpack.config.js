var path = require('path')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let Webpack = require('webpack');


module.exports = {
    // входная точка нашего приложения
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './public'),    // устанавливаем путь к сборке
        publicPath: '/public/',                       // устанавливаем публичный путь, по которому файл будет доступен
        filename: 'js/build.js'                // устанавливаем имя файла сборки
        // результат работы Webpack будет в 
        // файле с таким именем build.js
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            //настройка загрузчика vue файлов
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            //настройка загрузчика js файлов
            {
                //регулярка на выбор только js файлов
                test: /\.js$/,
                // запрещает просматривать эту деррикторию
                exclude: /node_modules/,
                // обработчик файлов 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            //настройка загрузчика css файлов
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader'])
            },

            {
                test: /\.(png|jpg|svg|ttf|eof|woof|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new Webpack.IgnorePlugin(/public\/fonts/),
        new ExtractTextPlugin('css/[name].css'),
        new UglifyJSPlugin()
    ]

};
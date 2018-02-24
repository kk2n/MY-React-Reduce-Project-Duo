//多入口，文件路径的\\和/跟操作系统也有关系，需要注意
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getEntry = require('./entry.config');
const _ = require('underscore');
let entrys = getEntry('src/page/entry.*.js', 'src', 'entry');
const paths = require('./paths');
//默认目录
entrys = { ...{ index: '\\index.js' }, ...entrys };

//多入口，入口文件
module.exports = _.map(entrys, (val, key) => {
    if (key === 'index') {
        return new HtmlWebpackPlugin({
            filename: key + '.html',
            inject: true,
            chunks: [],
            templateContent: () =>
                '<html lang="en"><head><meta charset="utf-8"></head><meta name="viewport" content="width=device-width,initial-scale=1, user-scalable=yes, minimum-scale=1, maximum-scale=1" />' +
                '<style>body{padding: 20px;margin: 40px auto;max-width:1000px;text-align: center;background-color: #f5f5f5}a{padding: 8px 20px}a:hover{background-color: #ffffff;border-radius: 6px}</style>' +
                '<body><div><h2>基于Create React App 的 多页面项目</h2><div>' + _.map(_.omit(entrys,'index'), (val, key) => '<a href="' + key + '.html">' + key + '.html</a>').join('') +'</div></div></body></html>'
        });
    }
    return new HtmlWebpackPlugin({
        filename: key + '.html',
        inject: true,
        chunks: [key],
        template: paths.appHtml,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
    });
});

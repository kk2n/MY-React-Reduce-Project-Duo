//多入口，文件路径的\\和/跟操作系统也有关系，需要注意
const getEntry = require('./entry.config');
const _ = require('underscore');
let entrys = getEntry('src/page/entry.*.js', 'src', 'entry');
const paths = require('./paths');
//默认目录
entrys = { ...{ index: '\\index.js' }, ...entrys };

//多入口，入口文件
module.exports = _.mapObject(entrys, val => [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    require.resolve('react-error-overlay'),
    paths.appSrc + val
]);

/* 
  * @file config-overrides.js
  * @author Wang Dai (1403693160@qq.com)
  * 给基于customzie和react-app-rewired的定制化配置方案
*/


// 引入一些相关的方法
// addDecoratorsLegacy是装饰器模式
const { override, fixBabelImports, addLessLoader,addDecoratorsLegacy } = require('customize-cra');
// 引入主题文件
const theme = require('./theme')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
  }),
  addDecoratorsLegacy()
);
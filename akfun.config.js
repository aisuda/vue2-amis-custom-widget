'use strict';
const path = require('path');
// 统一路径解析
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// 包括生产和开发的环境配置信息
module.exports = {
  settings: {
    enableESLint: false, // 调试模式是否开启ESLint，默认开启ESLint检测代码格式
    enableESLintFix: false, // 是否自动修正代码格式，默认不自动修正
    enableStyleLint: true, // 是否开启StyleLint，默认开启ESLint检测代码格式
    enableStyleLintFix: false // 是否需要StyleLint自动修正代码格式
  },
  webpack: {
    resolve: {
      // webpack的resolve配置
      extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx', 'json'], // 用于配置webpack在尝试过程中用到的后缀列表
      alias: {
        '@': resolve('src'),
        $components: resolve('src/components'),
        $assets: resolve('src/assets'),
        $public: resolve('public'),
      },
    },
    // sassResources中的sass文件会自动注入每一个sass文件中
    sassResources: [
      resolve('./src/assets/css/common.scss'),
      resolve('./src/assets/css/mixin.scss')
    ],
    // createDeclaration: true, // 打包时是否创建ts声明文件
    ignoreNodeModules: true, // 打包时是否忽略 node_modules
    projectDir: ['src', 'editor'],
    template: resolve('./editor/index.html'), // dev本地调试时需要html模板
  },
  // envParams：项目系统环境变量(根据执行命令中的环境变量批量替换项目源码中的相关参数)
  envParams: {
    common: { // 通用参数
      '#version#': '20200810.1',
    },
    local: { // 本地开发环境
      '#assetsPublicPath#': '', // 静态资源根地址
    },
    online: { // 线上正式环境配置参数
      '#assetsPublicPath#': '', // 静态资源根地址
    },
  },
  dev: {
    entry: { // 调试入口（本地编辑器中预览自定义组件入口）
      index: [
        './src/index.js',
        './src/widget/plugin/info-card-plugin.jsx',
        './editor/EditorDemo.jsx'
      ],
      // preview: './src/preview.js', // 仅用于预览组件内容
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development',
    port: 80,
    autoOpenBrowser: true,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    proxyTable: {
      '/apiTest': {
        target: 'http://api-test.com.cn', // 不支持跨域的接口根地址
        ws: true,
        changeOrigin: true
      }
    },
    cssSourceMap: true,
  },
  build2lib: {
    entry: {
      // 自定义组件入口文件
      infoCard: './src/index.js',
      infoCardPlugin: './src/widget/plugin/info-card-plugin.jsx',
    },
    // 用于构建生产环境代码的相关配置信息
    NODE_ENV: 'production',
    libraryName: 'amisWidget', // 构建第三方功能包时最后导出的引用变量名
    assetsRoot: resolve('./dist'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  }
};

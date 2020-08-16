import { defineConfig } from 'umi';
import { routes } from './src/router';

// 所有的配置都在这 https://umijs.org/zh-CN/config
export default defineConfig({
  // 配置路由的模式, type，可选 browser、hash 和 memory
  history: { type: 'browser' },

  // 生成的文件是否包含hash, 默认false
  hash: true,

  // 开启 TypeScript 编译时类型检查，默认关闭。
  forkTSChecker: false,

  // 动态引入,默认false,是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。
  dynamicImport: false,

  // 自定义变量, a 可以全局使用
  define: {
    a: '自定义变量测试',
  },

  // copy , 编译后copy一份到dist下, 可以是单个文件也可以是文件夹
  copy: ['copytest'],

  // 将css类名变成驼峰式, css 文件中 .demo-test 可以直接使用 demoTest
  cssLoader: {
    localsConvention: 'camelCase',
  },

  // 依赖加载顺序,默认是 ['umi'] , 在加载umi前加载vendors
  // chunks: ['vendors', 'umi'],

  // 路由配置
  routes,

  // 路由前缀, 会在每个路由前加上 '/abc'
  base: '/abc',

  // 使用dva数据流
  dva: {},

  // 使用antd
  antd: {},

  // 代理
  proxy: {
    '/api/': {
      target: 'https://pvp.qq.com/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '' },
    },
  },
});

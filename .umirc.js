import { defineConfig } from 'umi';

const { getEntry } = require('./mpa.utils');
const { CONFIG } = require('./mpa.config');

const mpaEntries = getEntry(CONFIG.entry);

const routes = [
  {
    path: '/',
    component: mpaEntries.indexInfo.hasIndex
      ? mpaEntries.indexInfo.indexComponent
      : mpaEntries.entries[0].component,
  },
  ...mpaEntries.entries,
];
console.log(routes);

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   {
  //     path: '/',
  //     component: '../../__demo/page1.tsx'
  //   },
  //   {
  //     path: '/page2',
  //     component: '../../__demo/page2.jsx'
  //   },
  // ],
  routes,
  publicPath: './',
  // publicPath:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://ui-javascript.github.io/tpl-mpa-umi3-react17/'
  //     : '/',
  outputPath: 'docs',
  // esbuild: {},
  hash: true,
  // history: { type: 'hash' },
  mfsu: {
    //   // production: { output: '.mfsu-production' }
  },
  // fastRefresh: {},

  // @todo 多页面配置总有问题
  mpa: {},
  // exportStatic: {},

  // dynamicImport: {},
  // chainWebpack(config, { env, webpack, createCSSRule }) {
  //   // 设置 alias
  //   // config.resolve.alias.set('@', 'src');
  //   // 入口配置 @todo
  //   // config
  //   // .entry('index')
  //   //   .add('./__demo/page1');
  //   // config.entry('page2')
  //   //     .add('./__demo/page2.jsx')
  //   //     .end();
  //   // 删除 umi 内置插件
  //   // config.plugins.delete('progress');
  //   // config.plugins.delete('friendly-error');
  //   // config.plugins.delete('copy');
  // },
});

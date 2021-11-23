/**
 * vue.config.js配置文件
 */
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin'); // 引入gzip压缩插件
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, dir);
}
// 判断打包环境
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);


module.exports = {
  publicPath: './',
  // 将构建好的文件输出到哪里
  outputDir: 'dist',
  // 放置生成的静态资源(js、css、img、fonts)的目录。
  assetsDir: 'static',
  // 指定生成的 index.html 的输出路径
  indexPath: 'index.html',
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],
  // 生产环境关闭 source map
  productionSourceMap: !IS_PROD,      // 'production' !== process.env.NODE_ENV,
  // lintOnSave: true,
  // 配置css
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    sourceMap: !IS_PROD,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100,
          }),
        ],
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },

  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'));

    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
    if (IS_PROD) {
      config.optimization.delete('splitChunks');
    }
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.exclude.add(/node_modules/);
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });

    const cdn = {
      // 访问https://unpkg.com/element-ui/lib/theme-chalk/index.css获取最新版本
      css: [],
      js: [
        '//unpkg.zhimg.com/vue@2.6.10/dist/vue.min.js', // 访问https://unpkg.com/vue/dist/vue.min.js获取最新版本
        '//unpkg.zhimg.com/vue-router@3.0.6/dist/vue-router.min.js',
        '//unpkg.zhimg.com/vuex@3.1.1/dist/vuex.min.js',
        '//unpkg.zhimg.com/axios@0.19.0/dist/axios.min.js',
      ],
    };
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap((args) => {
      // html中添加cdn
      args[0].cdn = cdn;
      return args;
    });
    const imagesRule = config.module.rule('images');
    imagesRule.exclude.add(resolve('src/components/icon/svg'));
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  },
  configureWebpack: (config) => {
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
    };
    config.plugins.push(
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/common/entry-skeleton.js'),
          },
        },
        minimize: true,
        quiet: true,
        router: {
          mode: 'hash',
          routes: [
            { path: '/', skeletonId: 'skeleton1' },
            { path: '/v1.0/about', skeletonId: 'skeleton2' },
          ],
        },
      }),
    );
    // 线上环境开启压缩
    if (IS_PROD) {
      // config.plugins.push(new BundleAnalyzerPlugin());

      config.plugins.push(
        new CompressionPlugin({
          // gzip压缩配置
          test: /\.js$|\.html$|\.css/, // 匹配文件名
          threshold: 10240, // 对超过10kb的数据进行压缩
          deleteOriginalAssets: false, // 是否删除原文件
        }),
      );
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            common: {
              name: 'chunk-common',
              chunks: 'initial',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 1,
              reuseExistingChunk: true,
              enforce: true,
            },
            vendors: {
              name: 'chunk-vendors',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'initial',
              priority: 2,
              reuseExistingChunk: true,
              enforce: true,
            },
            elementUI: {
              name: 'chunk-elementui',
              test: /[\\/]node_modules[\\/]element-ui[\\/]/,
              chunks: 'all',
              priority: 3,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    };
    if(!IS_PROD){
      config.devtool = "source-map"
    }
  },

  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,
  // 向 PWA 插件传递选项。
  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  devServer: {
    host: '0.0.0.0',
    port: 8088, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌
    disableHostCheck: true, //解决内外穿透问题
    // 配置多个代理
    proxy: {
      '/api': {
        target: 'https://www.mock.com',
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};

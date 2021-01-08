const path = require('path')
function resolve (dir) { return path.join(__dirname, dir) }
module.exports = {
  mode: 'universal',
  telemetry: false,
  // 端口配置
  server: {
    port: 9999, // default: 3000
    host: '0.0.0.0', // default: localhost,
    // https配置
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // },
    // sockets 配置
    socket: '/tmp/nuxt.socket',
    // timing配置
    // 启用server.timing选项会添加一个中间件来测量服务器端渲染过程中经过的时间，并将其作为'Server-Timing'添加到标头中
    timing: {
      total: true
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{ src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js', type: 'text/javascript', charset: 'utf-8' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['./assets/css/transition.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/api-inject',
    '@/plugins/interceptor',
    '@/plugins/svgIcon',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 导入axios请求模块
    '@nuxtjs/axios',
    // 导入公共scss变量插件
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],
  // 导入公共scss变量和mixins
  styleResources: {
    scss: ['./assets/scss/public.scss']
  },
  // 开启代理
  axios: {
    proxy: true
  },
  proxy: { "/api": "http://localhost:8080" },
  // 路由配置
  // 路由的增删改查
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/foo',
        component: resolve(__dirname, 'pages/other.vue')
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve('assets/icons/svg')]
      //添加loader规则
      config.module.rules.push({
        test: /\.svg$/, //匹配.svg
        include: [resolve('assets/icons/svg')], //将存放svg的目录加入到loader处理目录
        use: [{ loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } }]
      })
    },
    postcss: [require('postcss-px2rem')({
      remUnit: 75
    })]
  }
}

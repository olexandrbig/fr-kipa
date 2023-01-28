import bodyParser from 'body-parser'

import dotenv from 'dotenv'
dotenv.config()

const locale = process.env.NUXT_LOCALE
const locales = ['en']
const base = process.env.NUXT_APP_URL

export default {
  router: {
    base: '/fr-kipa/',
    mode: 'history'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    dir: 'docs'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'admin-area',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Georama:wght@200;300;400;600;700&display=swap' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: '~/components/Loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-underscore', mode: 'client' },
    { src: '~/plugins/vue-i18n' },
    { src: '~/plugins/vue-chart', mode: 'client' },
    { src: '~/plugins/vuedraggable.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    ['nuxt-fontawesome', {
      component: 'fa', // customize component name
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faLightbulb', 'faXmark', 'faChevronDown', 'faChevronUp', 'faChevronRight', 'faMagnifyingGlass', 'faPencil',
          'faBookOpen', 'faCrown', 'faUniversity', 'faUsers', 'faHeartPulse', 'faRightFromBracket', 'faList', 'faPlus',
          'faTasks', 'faBalanceScale', 'faBoxesStacked', 'faThLarge', 'faPencilRuler', 'faFlag', 'faWind', 'faDirections',
          'faFolderTree', 'faSliders', 'faAtom', 'faRotateLeft', 'faCircleInfo', 'faTag', 'faTags', 'faEllipsisVertical',
          'faArrowDownLong', 'faSitemap', 'faPenNib', 'faRepeat', 'faKey', 'faServer', 'faGlobe', 'faTriangleExclamation']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faGithub']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['faLightbulb']
      }
      ]
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/dotenv', { systemvars: true }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast'
  ],

  toast: {
    position: 'top-center',
    fullWidth: false,
    theme: 'bubble',
    duration: 2000,
    singleton: false
  },
  manifest: {
    lang: locale
  },
  robots: {
    UserAgent: '*',
    Sitemap: base + '/sitemap.xml'
  },
  sitemap: {
    hostname: base,
    i18n: {
      defaultLocale: locale,
      locales
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: base
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: locale
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssSourceMap: false,
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true,
        cacheGroups: {},
        minSize: 100000,
        maxSize: 100000
      }
    },
    maxChunkSize: 100000,
    extend (config) {
      config.devtool = false
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
    publicPath: base
  },
  serverMiddleware: [
    bodyParser.json(),
    // Api middleware
    '~/health'
  ],

  messages: {
    loading: 'Loading...',
    error_404: 'This page could not be found',
    server_error: 'Server error',
    nuxtjs: ' ',
    back_to_home: 'Back to the home page',
    server_error_details:
      'An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.',
    client_error: 'Error',
    client_error_details:
      'An error occurred while rendering the page. Check developer tools console for details.'
  }
}

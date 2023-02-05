require('dotenv').config()

export default {
  // environment variables, access with like this.$config.NODE_ENV
  publicRuntimeConfig: {
    message: process.env.hey || 'hello world!'
  },
  privateRuntimeConfig: {
    message: process.env.hey || 'hello world!'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wings-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/cdn/fonts/sf-pro/stylesheet.css' },
      { rel: 'stylesheet', href: '/cdn/css/custom-bootstrap.min.css' },
      { rel: 'stylesheet', href: '/cdn/css/jquery/bootstrap-select.min.css' },
      { rel: 'stylesheet', href: '/cdn/css/jquery/swiper.css' },
      { rel: 'stylesheet', href: '/cdn/css/jquery/jquery-ui.min.css' },
      { rel: 'stylesheet', href: '/cdn/css/jquery/caleran.min.css' },
      { rel: 'stylesheet', href: '/cdn/css/main.min.css' },
      { rel: 'stylesheet', href: '/cdn/css/theme.min.css' },
      { rel: 'stylesheet', href: '/cdn/css/jquery/ion.rangeSlider.min.css' },
      { rel: 'stylesheet', href: '/cdn/css/jquery/intlTelInput.min.css' },
      { rel: 'stylesheet', href: '/cdn/css/listeleme.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-awesome-swiper.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
  },

  proxy: {
    '/api/': 'http://wings.rentals/'
  }
}

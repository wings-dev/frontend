require("dotenv").config();

export default {
  // environment variables, access with like this.$config.NODE_ENV
  publicRuntimeConfig: {
    message: process.env.hey || "hello world!",
  },
  privateRuntimeConfig: {
    message: process.env.hey || "hello world!",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "wings-frontend",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/fonts/sf-pro/stylesheet.css" },
      { rel: "stylesheet", href: "/css/custom-bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/main.min.css" },

    ],
    script: [
      {
        src: "/js/bootstrap/bootstrap.bundle.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: "@fancyapps/ui/dist/fancybox.css",
      lang: "css",
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/vue-awesome-swiper.js",
    "~/plugins/fancyapps-ui.js",
    "~/plugins/vue-tel-input",
    { src: '~plugins/vcalendar.js', ssr: false },
    '~/plugins/redisHelper.js',
    { src: '~/plugins/jquery.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  target: "static",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [["@nuxtjs/dotenv", { systemvars: true }], "@nuxt/image"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/auth-next',
  ],

  auth: {
    strategies: {
      laravelJWT: {
        provider: 'laravel/jwt',
        url: '/',
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: false,
          user: false // disables the default /api/auth/user endpoint
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
        redirect: false
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // standalone: true,
    transpile: ["swiper"]
  },

  proxy: {
    "/api/": {
      target: "https://wings.rentals/",
      onProxyReq: (proxyReq, req, res) => {
        /*
        if (req._parsedUrl.query) {
          req.url += "&api_key=123456";
        } else {
          req.url += "?api_key=123456";
        }
        console.log( req.url);
         */
      },
      onError: (err, req, res) => {
        // console.error(`Proxy error: ${err.message}`);
      },
    },
  },

  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/data': '~/redis'
  },

  // 301 yapılacak linkler için alan
  router: {
    extendRoutes(routes, resolve) {
      require("./301").apply(routes, resolve);
    }
  },

  /*server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }*/
}

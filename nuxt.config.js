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
  googleFonts: {
    families: {
      Montserrat: [200, 300,400,500,700],
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/vue-awesome-swiper.js",
    "~/plugins/fancyapps-ui.js",
    "~/plugins/vue-tel-input",
    { src: '~plugins/vcalendar.js', ssr: false },
    '~/plugins/redisHelper.js',
    { src: '~/plugins/jquery.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  target: "server",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [["@nuxtjs/dotenv", { systemvars: true }], "@nuxt/image"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/auth-next',
    '@nuxtjs/google-fonts',
    'nuxt-leaflet',
    [
      "nuxt-cookie-control",
      {
        barPosition: "bottom-left",
        blockIframe: true,
        colors: {
          barTextColor: "#000",
          barBackground: "#fff",
          barButtonColor: "#fff",
          barButtonBackground: "#102754",
          barButtonHoverColor: "#fff",
          barButtonHoverBackground: "#2e495e",
          modalButtonBackground: "#102754",
          modalButtonHoverColor: "#fff",
          controlButtonBackground: "#12957b",
          controlButtonHoverBackground: "#2e495e",
          controlButtonIconHoverColor: "#fff",
          controlButtonIconColor: "#fff",
          modalButtonHoverBackground: "#2e495e",
          checkboxActiveBackground: "#2e495e",
          checkboxInactiveBackground: "#ede1e1",
          checkboxActiveCircleBackground: "#00c58e",
          checkboxInactiveCircleBackground: "#f44336",
          checkboxDisabledBackground: "#ddd",
          checkboxDisabledCircleBackground: "#fff"
        },
        text: {
          locale: {
            en: {
              barTitle:  'Çerezler',
              barDescription:  'We use our own cookies and third-party...',
            }
          },
        }
      }
    ]
  ],

  cookies: {
    necessary: [
      {
        name: {
          en: "Default cookies",
        },

        description: {
          en: "Used for cookie control."
        },
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      }
    ],
    optional: [
      {
        name: {
          en: "Google Analytics",
          de: "Google Analytics",
          es: "Google Analytics",
          fr: "Google Analytics",
          hr: "Google Analitika",
          it: "Google Analytics"
        },
        description: {
          en:
            "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic."
        },
        src: "https://www.googletagmanager.com/gtag/js?id=UA-138616567-1",
        async: true,
        cookies: ["_ga", "_gat_gtag_UA_138616567_1", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "UA-138616567-1");
        }
      }
    ]
  },

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
      target: process.env.PROXY_API
    },
    "/data": {
      target: process.env.PROXY_DATA
    },
    "/visitor": {
      target: process.env.PROXY_VISITOR
    }
  },

  /*
  ** Server Middleware

  serverMiddleware: {
    // '/data': '~/redis'
  },*/

  // 301 yapılacak linkler için alan
  router: {
    trailingSlash:false,
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

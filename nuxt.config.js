require("dotenv").config();

export default {
  // environment variables, access with like this.$config.NODE_ENV
  publicRuntimeConfig: {
    message: process.env.hey || "hello world!",
    gtm: {
      id: process.env.GTM_ID,
    },
  },
  privateRuntimeConfig: {
    message: process.env.hey || "hello world!",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "",
    titleTemplate: "%s | " + process.env.SITE_NAME,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "format-detection", content: "telephone=no" },
      { "http-equiv": "Cache-Control", content: "max-age=3600" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          (process.env.NODE_ENV === "production" ? process.env.CDN_URL : "") +
          "/favicon.ico",
      },
      // {rel: "stylesheet", href:  (process.env.NODE_ENV === "production" ? process.env.CDN_URL : '')  + "/css/custom-bootstrap.min.css"},
      // {rel: "stylesheet", href: (process.env.NODE_ENV === "production" ? process.env.CDN_URL : '')  + "/css/main.min.css"}
      { rel: "stylesheet", href: "/css/custom-bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/main.min.css" },
    ],
    script: [
      {
        src:
          (process.env.NODE_ENV === "production" ? process.env.CDN_URL : "") +
          "/js/bootstrap/bootstrap.bundle.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: "@fancyapps/ui/dist/fancybox.css",
      lang: "css",
    },
    "vue-tour/dist/vue-tour.css",
    "vue-select/dist/vue-select.css",
  ],
  googleFonts: {
    families: {
      Montserrat: [200, 300, 400, 500, 700],
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/vue-awesome-swiper.js",
    "~/plugins/fancyapps-ui.js",
    "~/plugins/vue-tel-input",
    { src: "~plugins/vcalendar.js", ssr: false },
    "~/plugins/redisHelper.js",
    { src: "~/plugins/jquery.js", mode: "client" },
    { src: "~/plugins/ymaps.js", mode: "client" },
    { src: "~/plugins/vue-tour.js", ssr: false },
    { src: "~/plugins/filters.js" },
    { src: "~/plugins/vue-select.js", ssr: false },
    { src: "~/plugins/dataService.js" },
    { src: "~/plugins/moment.js" },
    { src: "~/plugins/gtm.js", mode: "client" },
    // '~/plugins/reset-hover.js'
    // '~/plugins/bugsnag.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  target: "server",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ["@nuxtjs/dotenv", { systemvars: true }],
    "@nuxt/image",
    "@nuxtclub/slugify",
  ],
  slugify: {
    globals: {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: false, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "en", // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxt/image",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/google-fonts",
    "nuxt-leaflet",
    "bootstrap-vue/nuxt",
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
          checkboxDisabledCircleBackground: "#fff",
        },
        text: {
          locale: {
            en: {
              barTitle: "Çerezler",
              barDescription: "We use our own cookies and third-party...",
            },
          },
        },
      },
    ],
    "@nuxtjs/toast",
    "nuxt-vue-multiselect",
    "@nuxtjs/gtm",
  ],
  gtm: {
    id: process.env.GTM_ID,
    enabled: process.env.NODE_ENV === "production", // Sadece prod ortamında çalışacak
    debug: false, // true olduğunda console da eventleri gösteriyor
    pageTracking: true, // true veya false, GTM'in sayfa izlemesini etkinleştirip etkinleştirilmeyeceğini belirler
    autoInit: true, // true veya false, GTM'in otomatik olarak başlatılıp başlatılmayacağını belirler
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  toast: {
    position: "top-right",
    duration: 2000,
    iconPack: "custom-class",
  },

  image: {
    provider: "ipx",
    ipx: {
      baseURL:
        process.env.NODE_ENV === "production"
          ? process.env.CDN_URL + "/_ipx/"
          : "/_ipx/",
    },
  },

  cookies: {
    necessary: [
      {
        name: {
          en: "Default cookies",
        },

        description: {
          en: "Used for cookie control.",
        },
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"],
      },
    ],
    optional: [
      {
        name: {
          en: "Google Analytics",
          de: "Google Analytics",
          es: "Google Analytics",
          fr: "Google Analytics",
          hr: "Google Analitika",
          it: "Google Analytics",
        },
        description: {
          en: "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.",
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
        },
      },
    ],
  },

  auth: {
    redirect: {
      login: "/",
      logout: "/",
      callback: "/",
      home: "/",
    },
    strategies: {
      laravelJWT: {
        provider: "laravel/jwt",
        url: "/",
        endpoints: {
          login: {
            url: "/website/login",
            method: "post",
            propertyName: "access_token",
          },
          logout: false,
          user: false, // disables the default /api/auth/user endpoint
        },
        token: {
          property: "access_token",
          maxAge: 60 * 60,
        },
        refreshToken: {
          maxAge: 20160 * 60,
        },
      },
    },
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
    transpile: ["swiper"],
    publicPath:
      process.env.NODE_ENV === "production"
        ? process.env.CDN_URL + "/_nuxt/"
        : "/_nuxt/",
  },

  proxy: {
    "/website": {
      target: process.env.PROXY_API,
    },
    "/data": {
      target: process.env.PROXY_DATA,
    },
    "/visitor": {
      target: process.env.PROXY_VISITOR,
    },
  },

  router: {
    trailingSlash: false,
    middleware: ["301", "remove-over-class"],
  },

  server: {
    port: process.env.NODE_PORT, // default: 3000
    host: "0.0.0.0", // default: localhost,
    timing: false,
  },
};

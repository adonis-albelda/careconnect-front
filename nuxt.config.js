export default {
  head: {
    title: 'careconnect-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' }
    ],
  },
  target: "server",
  server: {
    port: 9797,
    host: "0.0.0.0", // default: 3000,
  },
  css: [
    "~assets/scss/global.scss",
  ],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },
  plugins: [
    "~global/components/VueSelect.js",
    "~global/components/VueDatepicker.js",
    {src:"~global/components/VueDialog.js", ssr:false},
    "~global/utils/index.js",
    {src:"~global/plugins/VeeValidate.js", ssr:false}
    
  ],
  components: false,
  // buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/auth-next', '@nuxtjs/axios'],
  axios: {
    baseURL: process.env.BASE_URL
  },
  router: {
    // middleware: ['auth'],
  },
  build: {},
}

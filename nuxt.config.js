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
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
      },
    ],
  },
  target: 'server',
  server: {
    port: 9797,
    host: '0.0.0.0', // default: 3000,
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
        },
        user: {
          property: '',
        },
        tokenType: '',
        endpoints: {
          login: { url: 'login', method: 'post' },
          logout: { url: 'logout', method: 'get' },
          user: { url: 'user/details', method: 'get' },
        },
      },
    },
  },
  css: ['~assets/scss/global.scss'],
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
  plugins: [
    '~global/components/VueSelect.js',
    '~global/components/VueDatepicker.js',
    { src: '~global/components/VueDialog.js', ssr: false, mode: 'client' },
    {
      src: '~global/components/VueNotification.js',
      ssr: false,
      mode: 'client',
    },
    '~global/utils/index.js',
    { src: '~global/plugins/VeeValidate.js', ssr: false },
    { src: "~global/plugins/VueCarousel.js", ssr: false },
  ],
  components: false,
  // buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/auth-next', '@nuxtjs/axios', '@nuxtjs/firebase'],
  axios: {
    baseURL: process.env.BASE_URL,
  },
  router: {
    middleware: ['auth'],
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyAVLCKeCrFQzGWxstZIIY3aVprd1E82Y6Y',
      authDomain: 'care-connect-e6828.firebaseapp.com',
      projectId: 'care-connect-e6828',
      storageBucket: 'care-connect-e6828.appspot.com',
      messagingSenderId: '252064637090',
      appId: '1:252064637090:web:c9d2fad08d03b6ec2b77fb',
      // measurementId: 'G-YLKD04C876',
    },
    services: {
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: 'randomName',
            url: 'randomUrl',
          },
        ],
        fcmPublicVapidKey:
          'BFzKvuGgjsX-u1QSlhMSmco6-21hf2E0zfn3fP6uTqu2tTgLi_OO92OaH2iWgDkgJ01uNQOy-2XbrydCb_ZlO1s',
      },
      auth: {
        // initialize: {
        //   onAuthStateChangedAction: 'onAuthStateChanged',
        // },
        ssr: true,
        emulatorPort: undefined,
        disableEmulatorWarnings: false,
      },
    },
  },
  build: {
    transpile: ["vee-validate", "vee-validate/dist/rules"],
    splitChunks: {
      layouts: true,
    },
  },
}

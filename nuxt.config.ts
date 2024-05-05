// https://nuxt.com/docs/api/configuration/nuxt-config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  imports: {
    dirs: ['stores', 'types'],
  },
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/robots',
    'nuxt-jsoneditor'
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  jsoneditor: {
    componentName: 'JsonEditor',
    includeCss: true,
    options: {
      darkTheme: true
    }
  },
  css: ['~/assets/scss/colors.scss'],
  runtimeConfig: {
    public: {
      apiUrl: 'http://localhost:8000/api', // fallback empty string, must be present tho
      frontUrl: 'http://localhost:3000'
    },
    cookieName: process.env.COOKIE_NAME || "__session",
    cookieSecret: process.env.COOKIE_SECRET || "secret",
    cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
    cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(), 10), // 7 days
  }
})

export default defineNuxtConfig({
  extends: 'content-wind',
  modules: ["nuxt-gtag", "@nuxtjs/google-fonts"],
  gtag: {
    id: 'G-Y1VX13XEW7'
  },
  googleFonts: {
    families: {
      'Ma Shan Zheng': true,
      'DotGothic16': true
    }
  }
})
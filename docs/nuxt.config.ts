export default defineNuxtConfig({
  extends: 'content-wind',
  modules: ["nuxt-gtag", "@nuxtjs/google-fonts"],
  gtag: {
    id: 'G-Y1VX13XEW7'
  },
  googleFonts: {
    download: true,
    families: {
      'Ma Shan Zheng': true,
      'DotGothic16': true,
      'Noto Serif SC': [400, 700],
      'Courier Prime': [400, 700],
      'Zen Kurenaido': [400]
    }
  }
})
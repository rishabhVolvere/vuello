import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#E2EDF8',
        secondary: '#E4F0EE',
        accent: '#F7F7F7',

        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: '#363636',
        secondary: '#3B3B3B',
        accent: '#505050'
      }
    }
  }
})

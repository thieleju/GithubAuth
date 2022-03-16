// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

// Vuetify
import { createVuetify } from 'vuetify'

// https://colorhunt.co/palette/222831393e4600adb5eeeeee
const teal = {
  dark: false,
  colors: {
    primary: '#00ADB5',
    secondary: "#EEEEEE",
    background: '#393E46',
    background2: '#222831',
  }
}

export default createVuetify(
  {
    theme: {
      defaultTheme: "teal",
      themes: {
        teal
      }
    }
  }
)

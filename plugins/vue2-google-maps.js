import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

console.log(process.env.GOOGLE_API_KEY)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.googleApiKey,
    libraries: 'places'
  }
})

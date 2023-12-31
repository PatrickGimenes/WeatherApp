import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMagnifyingGlass, faWater, faWind, faLocationDot } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faMagnifyingGlass, faWater, faWind, faLocationDot)




createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

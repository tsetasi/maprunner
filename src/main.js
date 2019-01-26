import Vue from 'vue'
import VueMaterial from 'vue-material'
import Clipboard from 'v-clipboard'
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'
import moment from 'moment';

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(Clipboard)
Vue.prototype.moment = moment;

new Vue({
  render: h => h(App),
}).$mount('#app')

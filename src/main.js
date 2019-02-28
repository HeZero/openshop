import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/'
import { Field, Toast, Icon, Popup, Dialog, Actionsheet, Switch } from 'vant'
import { Decimal } from 'decimal.js'
import { formDate } from '@/utils/tools'
import i18n from './utils/lang'
import 'amfe-flexible'
import '@/theme/public.less'
import '@/assets/iconfont/iconfont.css'

Vue.use(Toast)
Vue.use(Field)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Dialog)
Vue.use(Actionsheet)
Vue.use(Switch)
Vue.config.productionTip = false
Vue.filter('toFixed', (num, fixed) => {
  return new Decimal(num).toFixed(fixed)
})
Vue.filter('formDate', formDate)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

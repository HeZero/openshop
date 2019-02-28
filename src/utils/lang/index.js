import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '../../store'
import zh from './zh-CN'

Vue.use(VueI18n)

const messages = {
  'zh-CN': { // 中文简体包
    ...zh
  }
}
const i18n = new VueI18n({
  locale: store.state.lang, // set locale
  messages // locale messages
})

export default i18n

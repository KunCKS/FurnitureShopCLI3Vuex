import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CurrencyFilter from './filters/currency'
import CashSignFilter from './filters/cash-sign'
import FormatTime from './filters/format-time'
import store from './store'

// 外部插件
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// 此插件還有css檔要匯入！要記得看清楚API！
import 'bootstrap'
import zhTW from 'vee-validate/dist/locale/zh_TW'

Vue.config.productionTip = false
axios.defaults.withCredentials = true // 跨域API cookie儲存問題修正
Vue.use(VueI18n)
Vue.use(VueAxios, axios)
Vue.component('loading', Loading)

// filter
Vue.filter('currency', CurrencyFilter)
Vue.filter('cash-sign', CashSignFilter)
Vue.filter('format-time', FormatTime)

// vee - validate;
const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW
  }
})

// 導航守衛
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then(response => {
      console.log('檢查用戶是否仍持續登入：', response)
      if (response.data.success) {
        next()
      } else {
        alert('請重新登入')
        next({
          path: '/login'
        })
      }
    })
    // 這邊設定若path的meta帶的requiresAuth變數為true時，則執行api做驗證，若response是true，則調用next()讓其通過到 to，否則就回傳login的path到next()中將route轉到登入頁面。
  } else {
    next()
    // 記得這邊要再調用一次next()，否則會守衛會卡住頁面等待你下指令ＱＱ
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

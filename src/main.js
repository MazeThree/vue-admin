import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/assets/css/index.scss' // glob scss
// import './plugins/element.js'
import '@/assets/js/rem'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
import '@/assets/iconfont/iconfont.css'
import VueParticles from 'vue-particles'  // 登录页粒子动效插件，有点影响加载速度
import marked from 'marked'

Vue.use(animated)
Vue.use(VueParticles)
Vue.use(ElementUI, {
  size: 'mini'
})
// import SlideVerify from 'vue-monoplasty-slide-verify'

// Vue.use(SlideVerify)
Vue.config.productionTip = false
Vue.prototype.$marked = marked

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

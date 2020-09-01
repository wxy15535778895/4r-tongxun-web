import Vue from 'vue'
import VueBus from 'vue-bus'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import api from './api/api.js'
import global from './components/Global.vue'
import iconPicker from 'vue-fontawesome-elementui-icon-picker'
import 'font-awesome/scss/font-awesome.scss'
import VueAMap from 'vue-amap'
import echarts from 'echarts/dist/echarts.min.js'
import downloadExcel from 'vue-json-excel'

Vue.component('downloadExcel', downloadExcel)
Vue.prototype.$echarts = echarts
Vue.use(VueBus)
Vue.use(VueAMap)
Vue.use(global)
Vue.use(echarts)
Vue.use(iconPicker)
Vue.prototype.$api = api
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        next()
    } else {
        const token = sessionStorage.getItem('TokenId')
        if (token) {
            next()
        } else {
            router.push({
                path: '/',
            })
        }
    }
})

let that = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德key
    key: 'dc60f7077b6e538fb4470f6c9f7c93c2',
    // 插件集合 （插件按需引入）
    plugin: [
        'AMap.Scale',
        'AMap.OverView',
        'AMap.AMapUI',
        'AMap.Geolocation',
        'AMap.DistrictSearch',
    ],
    v: '1.4.4',
    uiVersion: '1.0.11', // 版本号
})

export default that
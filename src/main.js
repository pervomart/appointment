import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import YmapPlugin from 'vue-yandex-maps'
import DynamicSelect from 'vue-dynamic-select'

const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}
Vue.config.productionTip = false

Vue.use(YmapPlugin, settings)
Vue.use(DynamicSelect)
Vue.use(Antd);

new Vue({
  render: h => h(App),
  data: {
    coords: [
      54.82896654088406,
      39.831893822753904
    ]
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    }
  }
}).$mount('#app')

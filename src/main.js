import Vue from "vue";
import vSelect from "vue-select";
import App from "./App.vue";
import "vue-select/dist/vue-select.css";
import YmapPlugin from "vue-yandex-maps";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import store from "./store";

const settings = {
  apiKey: "",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
};
Vue.config.productionTip = false;

Vue.use(YmapPlugin, settings);
Vue.use(Vuesax);
Vue.component("v-select", vSelect);

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");

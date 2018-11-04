import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./libs/axios";
import * as filters from "./libs/filters";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

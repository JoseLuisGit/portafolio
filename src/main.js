import Vue from "vue";
import App from "./App.vue";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/theme/green-light.css";
import "./assets/css/all.min.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

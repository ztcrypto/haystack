import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import Portfolio from "./components/Portfolio.vue";
import Conference from "./components/Conference.vue";

var VueScrollTo = require("vue-scrollto");

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Portfolio
    },
    {
      path: "/conference",
      component: Conference
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueSocketIO from "vue-socket.io";
import "./styles/main.scss";

Vue.config.productionTip = false;

// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: "https://twitter-chatroom-challenge.herokuapp.com/api/chatroom",
//     vuex: {},
//   })
// );

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

/*
 =========================================================
 * Vue Black Dashboard - v1.1.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2023 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
// PRECV: ./router/index
import router from "./router/starterRouter";

//firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain:""
  // ... (other config properties)
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");

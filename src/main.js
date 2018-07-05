import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(bootstrap);
Vue.use(VueRouter);

import Home from './components/Home/Home'
import SuperAdmin from './components/SuperAdmin/SuperAdmin'
import Admin from './components/Admin/Admin'

const routes = [
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Admin',
    component: Admin
  },
  {
    path: '/SuperAdmin',
    component: SuperAdmin,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

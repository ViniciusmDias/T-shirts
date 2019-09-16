import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes } from './routes';



Vue.use(VueRouter); //IMPORTANT

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => {
    return h(App)
  }
});
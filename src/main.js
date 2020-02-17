import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from 'vue-router'
import Bucket from './components/bucket/Bucket.vue';
import BucketCard from './components/bucket/BucketCard.vue';
import {routes} from './routes';


Vue.component('Bucket', Bucket);
Vue.component('BucketCard', BucketCard);


Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

//event bus
export const bus = new Vue();

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

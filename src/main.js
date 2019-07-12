import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader.vue';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';


import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: 'AIzaSyA_BkpnzSfjwt3voIy2G-x1iOdsc4B8L-w',
  authDomain: 'crm-vue-f30c3.firebaseapp.com',
  databaseURL: 'https://crm-vue-f30c3.firebaseio.com',
  projectId: 'crm-vue-f30c3',
  storageBucket: '',
  messagingSenderId: '393240116632',
  appId: '1:393240116632:web:7f39cf63caedd2d3',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});

import Vue from 'vue';
import IdealUI from '../src/index.js';
import '../lib/theme-ideal/index.css';
import './assets/scss/index.scss';

import App from './App';
Vue.use(IdealUI);
new Vue({
  el: '#app',
  render: h => h(App)
});

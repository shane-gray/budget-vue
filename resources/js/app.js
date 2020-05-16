/*
|----------------------------------------------------------
| Dependancies
|----------------------------------------------------------
*/
require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

/*
|----------------------------------------------------------
| Vue Components
|----------------------------------------------------------
*/
import App from './app.vue';

/*
|----------------------------------------------------------
| Vue Initialization
|----------------------------------------------------------
*/
const app = new Vue({
    el: '#app',
	router,
	render: h => h(App)
});
import Login from '../views/login.vue';

const routes = [

	// Home
	{
		path: '/',
		name: 'home'
	},

	// Login
	{
		path: '/login',
		name: 'login',
		component: Login
	}

];

export default routes;
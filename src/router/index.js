import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login.vue'
import Join from '../components/Join.vue'
import NewsSearch from '../components/NewsSearch.vue'
import Memo from '../components/Memo.vue'

import store from '../store'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
	if (store.getters.isAuthenticated) {
		return next();
	}
	next('/login?returnPath=me');
}

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'NewsSearch',
			component: NewsSearch,
		},
		{
			path: '/memo',
			name: 'Memo',
			component: Memo,
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
		{
			path: '/join',
			name: 'Join',
			component: Join
		},
		/*
		{ 
			path: '/editor',
			name: 'Editor',
			component: Editor,
			beforeEnter: requireAuth()
		}
		*/
	]
});

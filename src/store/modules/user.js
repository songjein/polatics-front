import axios from 'axios';

import GLOBAL from '../global'

/* route */
const authRoute = '/auth';

/* for the page refreshing */
(() => {
	const { accessToken } = localStorage;
	if (!accessToken) return;
	axios.defaults.headers.common['Authorization'] = accessToken;
	console.log('axios default header set');
})();

/* state, getters, mutations, actions */
const state = {
	accessToken: null,
	user: null,
};

const getters = {
	isAuthenticated (state) {
		state.accessToken = state.accessToken || localStorage.accessToken;
		return state.accessToken;
	},
	getUser (state) {
		const user = localStorage.user ? JSON.parse(localStorage.user) : undefined;
		state.user = state.user || user;
		return state.user;
	}
};

const mutations = {
	LOGIN (state, { message, accessToken, user }) {
		const token = `Bearer ${accessToken}`;
		state.accessToken = token; 
		localStorage.accessToken = token; 
		axios.defaults.headers.common['Authorization'] = token;

		state.user = user;
		localStorage.user = JSON.stringify(user);
	},
	LOGOUT (state) {
		state.accessToken = null;
		state.user = null;
		delete localStorage.accessToken;
		delete localStorage.user;
		axios.defaults.headers.common['Authorization'] = undefined;
	},
};

const actions = {
	CHECK_TOKEN({ commit }) {
		const TKN_CHECK_API= `${ GLOBAL.API_ROOT }${ authRoute }/token_check`;
		// 여기서 에러를 처리하지 않고, 그대로 return 하면
		// component 단으로 에러를 전파할 수 있다!
		return axios.get(TKN_CHECK_API)
			.then(({ data }) => {
				return data;
			});
	},
	JOIN ({ commit }, { email, nick, password }) {
		const JOIN_API = `${ GLOBAL.API_ROOT }${ authRoute }/join`;
		return axios.post(JOIN_API, { 
				email, nick, password 
			})	
			.then(({ data }) => data);
	},
	LOGIN ({ commit }, { email, password }) {
		const LOGIN_API = `${ GLOBAL.API_ROOT }${ authRoute }/login`;
		return axios.post(LOGIN_API, {
				email, password,
			})	
			.then(({ data }) => { 
				commit('LOGIN', data);
				return data;
			});
	},
}

export default {
	state, getters, mutations, actions,
}

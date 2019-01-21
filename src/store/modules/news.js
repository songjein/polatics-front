import axios from 'axios';

import GLOBAL from '../global';

/* route */
const newsRoute = '/news';

/* state, getters, mutations, actions */
const state = {
	news: null,
};

const getters = {
};

const mutations = {
	GET_MY_POSTS (state, { posts }) {
		state.posts = posts; 
	},
};

const actions = {
	GET_NEWS ({ commit }) {
		// 이런식으로 API 서버 주소를 만들고 요청을 보내어 데이터를 얻는다.
		//const MY_POST_API = `${ GLOBAL.API_ROOT }${ postRoute }/my`;
		/*
		return axios.get(MY_POST_API)
			.then(({ data }) => {
				commit('GET_MY_POSTS', data);
			});
		*/
	},
};

export default {
 state, getters, mutations, actions
}

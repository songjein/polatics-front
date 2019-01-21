import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import user from './modules/user'
import news from './modules/news'

export default new Vuex.Store({
	modules: {
		user,	news,
	},
});

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// will be deleted
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

Vue.prototype.$check_status_logout = (_store, _router, error) => {
	// ref. https://github.com/axios/axios#handling-errors
	const { status } = error.response;
	if (status === 401) {
		alert('인증 토큰이 만료되었습니다.  다시 로그인 부탁드립니다!');
		_store.commit('LOGOUT');
		_router.push("/login");		
	}
};

new Vue({
  render: h => h(App),
	store,
	router,
}).$mount('#app')

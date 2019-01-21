<template>
  <div id="app">
		<Nav></Nav>
		<div id="content-wrapper">
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
// import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'app',
	created() {
		/* 로컬 스토리지에 저장되어 있는 Token이 유효한가? */
		if (localStorage.accessToken) {
			this.$store.dispatch('CHECK_TOKEN')
				.then(({ status, message }) => {
					alert(message);
				})
				.catch((error) => {
					this.$check_status_logout(this.$store, this.$router, error);
				});
		}
	},
	components: {
		Nav,
	},
}
</script>

<style>
* { font-family: 'Nanum Barun Gothic', sans-serif; }
body {
	margin: 0;
	margin-top: 50px;
}
a {
	text-decoration: none;
	color: rgb(150,150,150);
}
#app {
}
/* service color, 숫자가 높을수록 밝음*/
.gray1 {
	color: rgb(165,157,154);
}
.gray2 {
	color: rgb(187,177,175);
}
.gray3 {
	color: rgb(219,215,213);
}
.leaf1 {
	color: rgb(89,99,74);
}
.leaf2 {
	color: rgb(102,107,85);
}
.brown1 {
	color: rgb(73,45,33);
}
.brown2 {
	color: rgb(82,59,45);
}
/***************************************/
#content-wrapper {
	width: 100%;
}
.flash {
	color: red;
}
.clear {
	clear: both;
}
.pc {
	display: none;
}
@media screen and (min-width: 1080px) {
	#content-wrapper {
		width: 70%;		
		max-width: 1200px;
		margin: auto;
	}
	.mobile {
		display: none;
	}
	.pc {
		display: block;
	}
}
</style>

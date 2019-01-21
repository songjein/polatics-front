<template>
	<div id="nav-container">
		<div id="nav">
			<router-link to="/">
				<img id="logo" src="https://via.placeholder.com/30" @click="expanded=false">
			</router-link>
			<i id="menu-btn" class="fas fa-bars" @click="clickMenu"></i>
		</div>
		<div v-if="expanded" id="expand">
			<!--
			<div v-if="this.isAuthenticated">
				<div class="menu-item" @click="expanded=false">
					<router-link to="/MyFeeld">My feeel;d</router-link>
				</div>
			</div>
			-->

			<div class="menu-item" v-if="this.isAuthenticated" @click="expanded=false">
				<span class="logout" @click="logout">Logout</span>
			</div>

			<div class="menu-item" @click="expanded=false">
				<router-link to="/">
					<div class="">home</div>
				</router-link>
			</div>
			<div class="menu-item" @click="expanded=false">
				<router-link to="/memo">
					<div class="">memo</div>
				</router-link>
			</div>
			<div v-if="!this.isAuthenticated"class="menu-item intro" @click="expanded=false">
				<b><span style="font-size:1.2em">Polcatics</span></b>,<br>
				<div>Polatics</div>
				<div>균형잡힌~~ </div>
				<router-link to="/join">
					<div class="">Join</div>
				</router-link>
				<router-link to="/login">
					<div class="">Login</div>
				</router-link>
			</div>
			<div style="clear:both"></div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	data() {
		return {
			expanded: false,	
		}	
	},
	computed: {
		...mapGetters(['isAuthenticated']),
	},
	methods: {
		clickMenu () {
			this.expanded = !this.expanded;	
		},
		logout() {
			this.$store.commit('LOGOUT');
			this.$router.push("/login");		
		}
	},
	components: {
	
	}
}
</script>
<style scoped>
#nav-container {
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999; /* nav 에 있을 때, editor에 의해 덮혔는데 이제 안그러네 */
}
#nav {
	width: 98%;
	height: 26px;
	padding: 12px 1%;
	background: white;
}
#logo {
	width: 26px;
	height: 26px;
	margin-left: 10px;
}
#menu-btn {
	font-size: 26px;	
	float: right;
	margin-right: 10px;
	cursor: pointer;
}
#expand {
	position: fixed;
	top: 50px;
	width: 100%;
	background: white;
	border-bottom: 1px solid rgb(150,150,150);
}
.menu-item {
	border-top: 1px solid rgb(150,150,150);
	min-height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 1.2rem;
	color: rgb(150,150,150);
}
.intro {
	font-size: 0.9rem !important;
	color: black;
	line-height: 30px;
	padding: 1rem 0;
}
.join {
	display: inline-block;
	width: 80px;
	font-size: 1.1rem !important;
	border: 3px solid #37f4d6;
	background: #37f4d6;
	color: white;
	margin-right: 10px;
}
.login {
	display: inline-block;
	width: 80px;
	font-size: 1.1rem !important;
	border: 3px solid #37f4d6;
	background: white;
	color: #37f4d6;
	margin-right: 10px;
}
.logout {
	cursor: pointer;
	color: black;
}
@media screen and (min-width: 1080px) {
	#nav {
		width: 70%;
		max-width: 1176px; /* 12 x 2 px*/
		margin: auto;
	}
}
</style> 

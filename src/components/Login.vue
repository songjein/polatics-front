<template>
	<div id="login">
		<center>
			<img id="logo" src="../assets/loginlogo.png">
		</center>
		<form v-on:keyup.enter="onSubmit()">
			<input type="text" v-model="email" placeholder="Email Address">
			<input type="password" v-model="password" placeholder="Password">
		</form>
		<div class="do-login" @click="onSubmit()">Login</div>
		<div class="do-login" @click="kakaoLogin()">Kakao Login</div>
		<div class="do-login" @click="facebookLogin()">Facebook Login</div>
		<div class="do-login" @click="googleLogin()">Google Login</div>
		<router-link to="/join">
			<div class="do-join">Join</div>
		</router-link>
	</div>
</template>
<script>
export default {
	data() {
		return {
			email: '',	
			password: '',
			errMsg: '',
		}	
	},
	methods: {
		onSubmit () {
			const email = this.email;
			const password = this.password;
			if (email === '' || password === '') {
				alert('이메일 혹은 비밀번호를 입력해주세요');
				return;
			}
			this.$store.dispatch('LOGIN', { email, password })	
				.then(({ status, message }) => {
					if (status == "success") {
						this.$router.push("/myfeeld");		
					} else {
						alert(message);		
					}
				})
				.catch(({ message }) => this.errMsg = message)
		},
		kakaoLogin () { alert('kakaoLogin'); },
		googleLogin() { alert('googleLogin'); },
		facebookLogin() { alert('facebookLogin'); },
		redirect() {
			const { search } = window.location	
			const tokens = search.replace(/^\?/, '').split('&')
			const { returnPath } = tokens.reduce((qs, tkn) => {
				const pair = tkn.split('=')
				qs[pair[0]] = decodeURLComponent(pair[1])
				return qs
			}, {})

			this.$router.push(returnPath)
		}
	},
	components: {
	
	}
}
</script>
<style scoped>
#login {

}
img#logo {
	width: 70%; 
	max-width: 300px;
	margin-bottom: 20px;
}
input {
	display: block;
	width: 70%;
	max-width: 400px;
	border: 1px solid rgb(150,150,150);
	border-radius: 5px;
	height: 2rem;
	margin: auto;
	margin-bottom: 10px;
	text-align: center;
}
.do-login {
	width: 70%;
	max-width: 400px;
	height: 2rem;
	border: 1px solid rgb(150,150,150);
	border-radius: 5px;
	margin: auto;
	margin-bottom: 10px;
	text-align: center;
	line-height: 2rem;
	cursor: pointer;
}
.do-join {
	width: 70%;
	max-width: 400px;
	height: 2rem;
	border: 1px solid rgb(150,150,150);
	border-radius: 5px;
	margin: auto;
	margin-bottom: 10px;
	text-align: center;
	background: rgb(20,20,20);
	color: white;
	line-height: 2rem;
	cursor: pointer;
}
</style>

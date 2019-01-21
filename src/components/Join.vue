<template>
	<div id="join">
		<center>
			<router-link to="/login">
				<img id="logo" src="../assets/loginlogo.png">
			</router-link>
		</center>
		<form v-on:keyup.enter="onSubmit()">
			<input type="text" v-model="email" placeholder="Email Address">
			<input type="text" v-model="nick" placeholder="Nickname">
			<input type="password" v-model="password" placeholder="Password">
			<input type="password" v-model="passwordConfirm" placeholder="Password confirm">
		</form>
		<div class="do-join" @click="onSubmit()">Join</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			email: '',
			nick: '',
			password: '',
			passwordConfirm: '',
		}	
	},
	methods: {
		onSubmit() {
			const email = this.email;
			const nick = this.nick;
			const password = this.password;
			const passwordConfirm = this.passwordConfirm;
			if (email === '' || nick === '') {
				alert('이메일 혹은 닉네임을 작성해주세요');
				return;
			}
			if (password !== passwordConfirm) {
				alert('비밀번호 불일치');
				return;
			}
			this.$store.dispatch('JOIN', { email, nick, password })
				.then(({status, message}) => {
					if (status == 'success') {
						alert(message);	
						this.$router.push("/login");		
					} else {
						alert(message);	
					}
				});
		}	
	},
	components: {
	
	}
}
</script>
<style scoped>
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

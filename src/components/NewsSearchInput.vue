<template>
	<div id="news-search-input">
		<input type="text" v-model="searchTerm" placeholder="검색어 혹은 URL을 입력해주세요">
		<div id="search-btn"><i class="fas fa-search"></i></div>

		<div class="clear"> + 추천 검색어, 통계</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			searchTerm: ''	
		}	
	},
	components: {
	
	}
}
</script>
<style scoped>
/* 기본 스타일은 모바일을 가정 */ 
#news-search-input {
	width: 20rem;
	margin: auto;
}
input[type=text] {
	float: left;
	width: 75%;
	height: 3rem;
	padding: 0 4%;
	border: none;
	border-radius: 0.5rem;
	outline: none;
}
input[type=text]:hover {
	background: rgba(250,250,250);
}
#search-btn {
	float: left;
	width: 15%;
	margin-left: 1%;
	height: 3rem;
	background: rgba(89,99,74,0.5);
	line-height: 3rem;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
	color: rgb(82,59,45);
}
#search-btn:hover {
	background: rgba(112,117,95,0.5);
	color: white;
}
/* 1080px 이상의 화면에선 아래 스타일로 덮어쓰기*/
@media screen and (min-width: 1080px) {
	#news-search-input {
		width: 28rem;
		margin: auto;
	}

	input[type=text] {
		float: left;
		width: 80%;
	}

	#search-btn {
		float: left;
		width: 10%;
	}
}
</style>

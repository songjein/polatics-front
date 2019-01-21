<template>
	<div id="news-search">
		<div id="logo-text">
			Polatics	
		</div>
		<NewsSearchInput></NewsSearchInput>
		<NewsSearchResult></NewsSearchResult>
	</div>
</template>
<script>
import NewsSearchInput from './NewsSearchInput.vue';
import NewsSearchResult from './NewsSearchResult.vue';
export default {
	data() {
		return {
		
		}	
	},
	components: {
		NewsSearchInput,	
		NewsSearchResult,
	}
}
</script>
<style scoped>
/* 기본 스타일은 모바일을 가정 */ 
#news-search {
	padding-top: 2rem;
	height: 13rem;
	background: rgb(219,215,213);
}
#logo-text {
	margin: 1rem 0;
	font-size: 3rem;	
	font-weight: bold;
	text-align: center;
}

/* 1080px 이상의 화면에선 아래 스타일로 덮어쓰기*/
@media screen and (min-width: 1080px) {
	#news-search {
		padding-top: 1rem;
		height: 15rem;
	}

	#logo-text {
		margin: 2rem 0;	
	}
}
</style>

<template>
	<div id="memo">
		<h3>색상 모음</h3>
		<div class="color-item" style="background: rgb(165,157,154)">회색1</div>
		<div class="color-item" style="background: rgb(187,177,175)">회색2</div>
		<div class="color-item" style="background: rgb(219,215,213)">회색3</div>
		<div class="color-item" style="background: rgb(89,99,74)">나뭇잎색1</div>
		<div class="color-item" style="background: rgb(102,107,85)">나뭇잎색2</div>
		<div class="color-item" style="background: rgb(73,45,33)">진한 갈색1</div>
		<div class="color-item" style="background: rgb(82,59,45)">진한 갈색2</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
		
		}	
	},
	components: {
	
	}
}
</script>
<style scoped>
#memo {
	width: 80%;
	margin: auto;
}
.color-item {
	width: 80px;
	height: 50px;
	display: inline-block;
	line-height: 50px;
	border: 1px solid black;
}
</style>

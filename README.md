# polatics front 
폴라틱스 프론트 애플리케이션

## TODO
- 프로젝트 셋업 방법은 아래 [참고](#project-setup)
- NewsSearchResult 부분에 비교 유아이를 자유롭게 작성해보기
- 필요하다면 구조 변경
- Fork 후 변경사항은 pull request 혹은 회의 때 

## 구조
- src/
	- App.vue ; NewsSearch.vue 를 포함
	- components/
		- NewsSearch.vue ; 아래 둘 컴포넌트를 포함함
			- NewsSearchInput.vue
			- NewsSearchResult.vue
		- Join.vue ; 일단 가입 및 로그인은 무시
		- Login.vue
		- common
			- Modal.vue
	- store/ ; 추후에 스토어로 활용
		- modules/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

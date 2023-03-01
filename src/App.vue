
<template>
	<FullPage
		ref="fullpage"
		:options="options"
		id="full-page"
	>
		<FirstPage
			:class="sectionClass"
			:bg-image="bgImageMap.first"
			@goToProject="goToProject"
		/>
		<div class="section h-screen">
			Second section ...
		</div>
	</FullPage>
</template>

<script setup>
	import FirstPage from './components/FirstPage.vue';
	import { reactive } from 'vue';

	const options = reactive({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3'],
	});

	const sectionClass = ['section', 'h-screen'];

	const bgImageMap = {
		first: '@src/assets/mountain-fuji-1.jpg',
		second: '',
	};

	const goToProject = () => {
		console.log('go to project')
	};
</script>

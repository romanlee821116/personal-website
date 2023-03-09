
<template>
	<FullPage
		ref="fullpage"
		:options="options"
		id="full-page"
	>
		<template
			v-for="(item, index) in pageComponentMap"
			:key="`page-${index}`"
		>
			<component
				:is="item.component"
				v-bind="{...item.props}"
			/>
		</template>
	</FullPage>
</template>

<script setup>
	import FirstPage from './components/FirstPage.vue';
	import SecondPage from './components/SecondPage.vue';
	import { reactive } from 'vue';

	const options = reactive({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3'],
	});
	const goToProject = () => {
		console.log('go to project')
	};
	const pageComponentMap = [
		{
			component: FirstPage,
			props: {
				bgImage: '',
				sloganText: '',
				pageNumber: ''
			},
			event: {
				goToProject,
			},
		},
		{
			component: SecondPage,
			props: {
				bgImage: '',
				sloganText: 'Introduction',
				pageNumber: 1,
			},
			event: {},
		},
	];
</script>


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
				v-on="{...item.event}"
			/>
		</template>
	</FullPage>
</template>

<script setup>
import FirstPage from './components/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';
import ThirdPage from './components/ThirdPage.vue';
import ForthPage from './components/FourthPage.vue';
import {reactive} from 'vue';
import {getPictureRelativePath} from './lib/helper';
import {i18n} from './main.js';

const options = reactive({
	menu: '#menu',
	anchors: ['page1', 'page2', 'page3'],
});

const goToProject = () => {
	console.log('go to project')
};

const switchLang = function(lang) {
	i18n.global.locale.value = lang;
};

const pageComponentMap = [
	{
		component: FirstPage,
		props: {
			bgImage: getPictureRelativePath('mountain-1'),
			sloganText: '',
			pageNumber: ''
		},
		event: {
			goToProject,
			switchLang,
		},
	},
	{
		component: SecondPage,
		props: {
			bgImage: getPictureRelativePath('mountain-1'),
			sloganText: 'INTRODUCTION',
			pageNumber: '01',
		},
		event: {},
	},
	{
		component: ThirdPage,
		props: {
			bgImage: getPictureRelativePath('mountain-1'),
			sloganText: 'ABILITIES',
			pageNumber: '02',
		},
	},
	{
		component: ForthPage,
		props: {
			bgImage: getPictureRelativePath('mountain-1'),
			sloganText: 'PROFOLIO',
			pageNumber: '03',
		},
	}
];
</script>

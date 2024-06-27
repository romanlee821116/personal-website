
<template>
	<div class="relative">
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
		<ImageModal
			:is-open="isModalOpen"
			:image-list="modalImageList"
			@close="closeModal"
		/>
	</div>
</template>

<script setup>
import FirstPage from './components/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';
import ThirdPage from './components/ThirdPage.vue';
import ForthPage from './components/FourthPage.vue';
import {reactive, ref} from 'vue';
import {getPictureRelativePath} from './lib/helper';
import {useI18n} from 'vue-i18n';
import ImageModal from './components/ImageModal.vue';

const {locale} = useI18n();

const options = reactive({
	menu: '#menu',
	anchors: ['page1', 'page2', 'page3', 'page4'],
});

const goToProject = () => {
	fullpage_api.moveTo('page4');
};

const switchLang = lang => {
	locale.value = lang;
	sessionStorage.setItem('currentLang', lang);
};

let isModalOpen = ref(false);

let modalImageList = ref([]);

const showMoreImage = item => {
	if (item.imgList.length > 0) {
		modalImageList.value = item.imgList;
		isModalOpen.value = true;
	}
};

const closeModal = () => isModalOpen.value = false;

const pageComponentMap = [
	{
		component: FirstPage,
		props: {
			// bgImage: getPictureRelativePath('mountain-1'),
			bgImage: './assets/mountain-1.png',
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
			// bgImage: getPictureRelativePath('mountain-1'),
			bgImage: '/assets/mountain-1.png',
			sloganText: 'INTRODUCTION',
			pageNumber: '01',
		},
		event: {},
	},
	{
		component: ThirdPage,
		props: {
			// bgImage: getPictureRelativePath('mountain-1'),
			bgImage: '/assets/assets/mountain-1.png',
			sloganText: 'ABILITIES',
			pageNumber: '02',
		},
	},
	{
		component: ForthPage,
		props: {
			// bgImage: getPictureRelativePath('mountain-1'),
			bgImage: './assets/assets/mountain-1.png',
			sloganText: 'PROFOLIO',
			pageNumber: '03',
		},
		event: {
			showMoreImage,
		},
	}
];
</script>

<template>
	<PageWrap
		:pageNumber="pageNumber"
		:bgImage="bgImage"
		:sloganText="sloganText"
	>
		<div
			id="second-page"
			class="h-full flex flex-col items-center justify-center sm:flex-row"
		>
			<div class="text-left mb-8 sm:mr-20">
				<img
					class="w-56 rounded-full mb-4 mx-auto sm:w-64"
					:src="getPictureRelativePath('personal-pic')"
					alt="personal-pic"
				>
				<div class="mx-auto text-sm w-fit">
					碩士 - 台灣大學分子與細胞生物學研究所
				</div>
				<div class="mx-auto text-sm w-fit">
					學士 - 中興大學生物科技學士學位學程
				</div>
				<div class="flex justify-center mt-2">
					<a
						v-for="(item, index) in contactBtnList"
						:key="`contact-btn${index}`"
						:href="item.url"
						target="_blank"
						class="text-3xl text-gray-500 hover:text-gray-600 mx-2"
					>
						<i :class="item.icon" />
					</a>
				</div>
			</div>
			<div class="px-6 text-sm sm:w-96">
				<p class="mb-2">目前於Kkday新事業專案組擔任前端工程師，負責點對點交通服務前端畫面處理、功能串接、通用元件設計、單元測試撰寫等。</p>
				<p>過去任職於美商產品專員，有跨國不同部門團隊溝通協商經驗，對工作細節有高度敏銳，具備專案流程進度掌控力。</p>

			</div>
		</div>
	</PageWrap>
</template>
<script setup>
import {defineProps} from 'vue';
import PageWrap from './PageWrap.vue';
import {getPictureRelativePath} from '../lib/helper';

const props = defineProps({
	pageNumber: {
		type: [String, Boolean],
		default: false,
	},
	bgImage: {
		type: String,
		required: true,
	},
	sloganText: {
		type: String,
		default: '',
	},
});

const contactBtnList = [
	{
		name: 'linkedIn',
		icon: 'fab fa-linkedin',
		url: 'https://www.linkedin.com/in/anyilee/',
	},
	{
		name: 'github',
		icon: 'fab fa-github',
		url: 'https://github.com/romanlee821116',
	},
	{
		name: 'Email',
		icon: 'fas fa-envelope',
		url: 'mailto: romanlee1116@gmail.com',
	}
];

const careerInfoList = [
	{
		title: 'KKday酷遊天國際旅行社',
		subTitle: '前端工程師',
		logo: getPictureRelativePath('kkday-icon'),
		duration: '2021,Oct - Now',
		desc: ['點對點服務PC/M前端開發', '通用元件設計, 單元測試撰寫', '系統維運'],
	},
	{
		title: '緯育TibaMe',
		subTitle: 'Web/APP前端設計工程師養成班學員',
		logo: getPictureRelativePath('tibame-icon'),
		duration: '2021,Mar -2021,Aug',
		desc: ['個人專體最佳個人網站第1名', '帶領5人小組進行團體專題開發, 保持專案高完整度'],
	},
	{
		title: '美商欣科寶利股份有限公司',
		subTitle: '產品技術專員',
		logo: getPictureRelativePath('polysciences-icon'),
		duration: '2019,Dec - 2021,Feb',
		desc: ['專責亞太區生物產品服務', '0到1將主力GMP商品導入中國市場', '解決各國經銷商客戶痛點'],
	},
];
</script>
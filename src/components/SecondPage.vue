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
						class="text-3xl mx-2"
					>
						<i
							class="text-gray-200 hover:text-gray-300"
							:class="item.icon"
						/>
					</a>
				</div>
			</div>
			<div class="px-6 text-sm sm:w-[480px]">
				<p class="mb-4">目前於KKday擔任新事業專案組前端工程師，參與6項以上全新且已上線之專案開發。工作內容包含負責點對點交通服務前端畫面處理、功能串接、通用元件設計、單元測試撰寫等。</p>
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
</script>
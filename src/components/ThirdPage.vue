<template>
	<PageWrap
		:pageNumber="pageNumber"
		:bgImage="bgImage"
		:sloganText="sloganText"
	>
		<div
			id="third-page"
			class="h-full flex flex-col justify-center sm:flex-row"
		>
			<div class="career-info px-4">
				<h1 class="text-xl mb-2 font-bold">工作 / 進修經歷</h1>
				<div
					v-for="(item, index) in careerInfoList"
					:key="`career-item${index}`"
					class="flex items-top mb-2"
				>
					<img
						class="w-12 h-12 rounded-full mr-3 sm:w-16 sm:h-16"
						:src="item.logo"
						:alt="item.name"
					>
					<div>
						<div class="career-title mb-1">
							<b class="text-sm mr-2 sm:text-base">{{ item.title }}</b>
							<span class="text-xs">{{ item.duration }}</span>
						</div>
						<div class="sub-title mb-1 text-sm">
							{{ item.subTitle }}
						</div>
						<ul class="career-desc">
							<li
								v-for="(descItem, descIndex) in item.desc"
								:key="`desc-${descIndex}`"
								class="text-sm list-disc ml-5"
							>
								{{ descItem }}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="px-4 py-2">
				<h1 class="text-xl mb-2 font-bold">語言能力</h1>
				<ul class="text-sm">
					<li class="mb-1">英語 - 多益 : 940</li>
					<li class="mb-1">英語 - 歐洲共同語文參考標準 : C2 Proficient</li>
					<li class="mb-1">日語 - 日本語能力試驗 : N2</li>
				</ul>
			</div>
			<div class="px-4 py-2">
				<h1 class="text-xl mb-2 font-bold">應用技術</h1>
				<div class="grid grid-cols-5">
					<div
						v-for="(skillItem, skillIndex) in skillList"
						:key="`skill-${skillIndex}`"
						class="m-2 text-center text-xs"
					>
						<img
							:src="skillItem.img"
							:alt="skillItem.name"
							class="w-8 h-8 mx-auto"
						>
						{{ skillItem.name }}
					</div>
				</div>
			</div>
		</div>
	</PageWrap>
</template>

<script setup>
import PageWrap from './PageWrap.vue';
import {getPictureRelativePath} from '../lib/helper';
import {defineProps} from 'vue';

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

const careerInfoList = [
	{
		title: 'KKday酷遊天國際旅行社',
		subTitle: '前端工程師',
		logo: getPictureRelativePath('kkday-icon'),
		duration: '2021, Oct - Now',
		desc: ['點對點服務PC/M前端開發', '通用元件設計, 單元測試撰寫', '系統維運'],
	},
	{
		title: '緯育TibaMe',
		subTitle: 'Web/APP前端設計工程師養成班學員',
		logo: getPictureRelativePath('tibame-icon'),
		duration: '2021, Mar -2021, Aug',
		desc: ['個人專體最佳個人網站第1名', '帶領5人小組進行團體專題開發, 保持專案高完整度'],
	},
	{
		title: '美商欣科寶利股份公司',
		subTitle: '產品技術專員',
		logo: getPictureRelativePath('polysciences-icon'),
		duration: '2019, Dec - 2021, Feb',
		desc: ['專責亞太區生物產品服務', '0到1將主力GMP商品導入中國市場', '解決各國經銷商客戶痛點'],
	},
];

const skillList = [
	{
		name: 'HTML',
		img: getPictureRelativePath('html'),
	},
	{
		name: 'JavaScript',
		img: getPictureRelativePath('js'),
	},
	{
		name: 'CSS',
		img: getPictureRelativePath('css'),
	},
	{
		name: 'Vue',
		img: getPictureRelativePath('vue'),
	},
	{
		name: 'SASS',
		img: getPictureRelativePath('sass'),
	},
	{
		name: 'JEST',
		img: getPictureRelativePath('jest'),
	},
	{
		name: 'Git',
		img: getPictureRelativePath('git'),
	},
	{
		name: 'Docker',
		img: getPictureRelativePath('docker'),
	},
	{
		name: 'PHP',
		img: getPictureRelativePath('php'),
	},
	{
		name: 'ESLint',
		img: getPictureRelativePath('eslint'),
	},
];

</script>
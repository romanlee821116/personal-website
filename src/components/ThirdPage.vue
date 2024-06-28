<template>
	<PageWrap
		:pageNumber="pageNumber"
		:bgImage="bgImage"
		:sloganText="sloganText"
	>
		<div
			id="third-page"
			class="h-full flex flex-col pt-10 sm:flex-row sm:items-center sm:justify-center overflow-scroll	"
		>
			<div class="sm:flex">
				<div class="career-info px-4 py-2 mr-6 sm:w-[540px]">
					<h1 class="text-base mb-2 font-bold sm:mb-4">
						<i class="fas fa-square text-primary-green mr-1" />
						{{ lang('page3_work_title') }}
					</h1>
					<div
						v-for="(item, index) in careerInfoList"
						:key="`career-item${index}`"
						class="flex items-top mb-2 sm:mb-6"
					>
						<img
							class="w-12 h-12 rounded-full mr-3 sm:w-16 sm:h-16 sm:mr-6"
							:src="item.logo"
							:alt="item.name"
						>
						<div>
							<div class="career-title mb-1">
								<b class="text-sm mr-2 sm:text-base">{{ lang(item.title) }}</b>
								<span class="text-xs">{{ item.duration }}</span>
							</div>
							<div class="sub-title mb-1 text-sm font-bold">
								{{ lang(item.subTitle) }}
							</div>
							<ul class="career-desc">
								<li
									v-for="(descItem, descIndex) in item.desc"
									:key="`desc-${descIndex}`"
									class="text-sm list-disc ml-5 mb-1"
								>
									{{ lang(descItem) }}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<div class="px-4 py-2 sm:mb-12">
						<h1 class="text-base mb-2 font-bold sm:mb-4">
							<i class="fas fa-square text-primary-green mr-1" />
							{{ lang('page3_lang_title') }}
						</h1>
						<ul class="text-sm">
							<li
								v-for="(langItem, langIndex) in langAbilityList"
								:key="`langItem-${langIndex}`"
								class="mb-1"
							>{{ lang(langItem) }}</li>
						</ul>
					</div>
					<div class="px-4 py-2">
						<h1 class="text-base mb-2 font-bold sm:mb-4">
							<i class="fas fa-square text-primary-green mr-1" />
							{{ lang('page3_skill_title') }}
						</h1>
						<div class="grid grid-cols-4">
							<div
								v-for="(skillItem, skillIndex) in skillList"
								:key="`skill-${skillIndex}`"
								class="m-2 text-center text-xs"
							>
								<img
									:src="skillItem.img"
									:alt="skillItem.name"
									class="w-8 h-8 mx-auto sm:mb-1"
								>
								{{ skillItem.name }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</PageWrap>
</template>

<script setup>
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

const langAbilityList = [
	'lang_desc_1',
	'lang_desc_2',
	'lang_desc_3',
];

const careerInfoList = [
	{
		title: 'career_title_kkday',
		subTitle: 'career_subtitle_kkday',
		logo: getPictureRelativePath('kkday-icon'),
		duration: '2021, Oct - Now',
		desc: [
			'career_desc_kkday_1',
			'career_desc_kkday_2',
			'career_desc_kkday_3',
			'career_desc_kkday_4',
		],
	},
	{
		title: 'career_title_tibame',
		subTitle: 'career_subtitle_tibame',
		logo: getPictureRelativePath('tibame-icon'),
		duration: '2021, Mar -2021, Aug',
		desc: [
			'career_desc_tibame_1',
			'career_desc_tibame_2',
			'career_desc_tibame_3',
		],
	},
	{
		title: 'career_title_polysciences',
		subTitle: 'career_subtitle_polysciences',
		logo: getPictureRelativePath('polysciences-icon'),
		duration: '2019, Dec - 2021, Feb',
		desc: [
			'career_desc_polysciences_1',
			'career_desc_polysciences_2',
			'career_desc_polysciences_3',
		],
	},
];

const skillList = [
	{
		name: 'JavaScript',
		img: getPictureRelativePath('js'),
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
		name: 'Tailwind CSS',
		img: getPictureRelativePath('tailwind'),
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
];

</script>
<template>
	<PageWrap
		:pageNumber="pageNumber"
		:bgImage="bgImage"
		:sloganText="sloganText"
	>
		<div id="second-page flex">
			<div class="person-info text-left">
				<img
					class="w-80 rounded-full"
					src="../assets/personal-pic.png"
					alt="personal-pic"
				>
				<div>
					碩士 - 台灣大學分子與細胞生物學研究所 (2016-2018)
				</div>
				<div>
					學士 - 中興大學生物科技學士學位學程 (2012-2016)
				</div>
				<div>
					<a
						v-for="(item, index) in contactBtnList"
						:key="`contact-btn${index}`"
						:href="item.url"
						target="_blank"
					>
						<i :class="item.icon" />
					</a>
				</div>
			</div>
			<div class="career-info">
				career
			</div>
		</div>
	</PageWrap>
</template>
<script setup>
	import {defineProps} from 'vue';
	import PageWrap from './PageWrap.vue';

	const props = defineProps({
		pageNumber: {
			type: Number,
			default: 0,
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
	];

	const careerInfoList = [
		{
			title: 'KkDay',
			logo: '',
			desc: [],
		},
		{
			title: '',
			logo: '',
			desc: [],
		},
		{
			title: '',
			logo: '',
			desc: [],
		},
	];
</script>
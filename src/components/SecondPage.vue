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
					{{ lang('master') }}
				</div>
				<div class="mx-auto text-sm w-fit">
					{{ lang('bachelor') }}
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
				<p class="mb-4">
					{{ lang('intro_1') }}
				</p>
				<p>
					{{ lang('intro_2') }}
				</p>
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
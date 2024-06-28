<template>
	<PageWrap
		:bgImage="bgImage"
	>
		<div
			id="first-page"
			class="flex flex-col items-center justify-center md:h-full w-full relative h-screen"
		>
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
				<b>Hi! I'm</b>
				<div class="text-4xl mt-4 mb-6">
					Roman
				</div>
				<button
					@click="goToProject"
					class="text-sm bg-primary-green hover:opacity-50 border-none focus:outline-none transition duration-200 ease-out hover:ease-in opacity-80"
				>
					VIEW MY WORKS
				</button>
			</div>
			<div
				id="language-btn"
				class="absolute top-6 right-6 flex items-center text-sm"
			>
				<div
					v-for="(item, index) in langList"
					:key="`lang-bnt${index}`"
					class="mx-1 px-3 py-1 border border-gray rounded-md cursor-pointer"
					:class="{'active': isCurrentLang(item.langKey)}"
					@click="switchLang(item.langKey)"
				>
					{{ item.value }}
				</div>
			</div>
		</div>
	</PageWrap>
</template>

<script setup>
import PageWrap from './PageWrap.vue';
import {useI18n} from 'vue-i18n';

const {locale} = useI18n();

const props = defineProps({
	pageNumber: {
		type: [String, Boolean],
		default: false,
	},
	bgImage: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(['switchLang', 'goToProject']);

const langList = [
	{
		langKey: 'tw',
		value: '中文',
	},
	{
		langKey: 'en',
		value: 'EN',
	},
];

const isCurrentLang = lang => lang === locale.value;

const switchLang = lang => {
	if (lang !== locale.value) {
		emit('switchLang', lang);
	}
};

const goToProject = () => emit('goToProject');

</script>

<style scoped>
	#language-btn div.active {
		background-color: #5C7261;
		border-color: #5C7261;
	}
</style>

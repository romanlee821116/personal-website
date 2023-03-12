<template>
	<PageWrap
		:bgImage="bgImage"
	>
		<div
			id="first-page"
			class="flex  flex-col items-center justify-center h-full w-full"
		>
		<b>Hi! I'm</b>
		<div class="text-4xl mt-4 mb-6">An Yi</div>
		<button
			@click="$emit('goToProject')"
			class="text-sm hover:bg-gray-500 border-none focus:outline-none transition duration-200 ease-out hover:ease-in"
		>
			VIEW MY WORKS
		</button>
		</div>
	</PageWrap>
</template>

<script setup>
import {defineProps} from 'vue';
import PageWrap from './PageWrap.vue';

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
</script>

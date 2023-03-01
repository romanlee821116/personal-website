<template>
	<div
		class="first-page-wrap flex flex-col justify-center bg-page1"
	>
		<b>Hi! I'm</b>
		<div class="text-4xl mt-4 mb-6">An Yi</div>
		<button
			@click="$emit('goToProject')"
			class="text-sm hover:bg-gray-500 border-none focus:outline-none transition duration-200 ease-out hover:ease-in"
		>
			VIEW MY WORKS
		</button>
		<img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
	</div>
</template>
<script setup>

import {defineProps} from 'vue';
const props = defineProps({
	pageNumber: {
		type: Number,
		default: 0,
	},
	bgImage: {
		type: String,
		required: true,
	},
});
</script>

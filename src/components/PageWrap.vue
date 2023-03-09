<template>
	<div
		id="page-wrap"
		class="relative section h-screen w-screen"
	>
		<h1 class="absolute left-6 top-8 text-9xl font-bold">
			{{ pageNumber }}
		</h1>
		<h3 class="absolute left-0 bottom-6">
			{{ sloganText }}
		</h3>
		<slot />
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
		sloganText: {
			type: String,
			default: '',
		},
	});
</script>
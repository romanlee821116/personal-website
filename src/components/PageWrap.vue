<template>
	<div
		id="page-wrap"
		class="relative section h-screen w-scree bg-cover"
		:style="{'backgroundImage': `url(${bgImage})`}"
	>
		<div class="mask w-full h-full absolute top-0 left-0 bg-black opacity-80"></div>
		<h1
			v-if="pageNumber"
			class="absolute right-4 top-4 text-6xl font-bold opacity-50 sm:left-12 sm:top-20 sm:text-9xl z-10"
		>
			{{ pageNumber }}
		</h1>
		<h3
			v-if="sloganText"
			class="hidden slogan-text absolute left-8 bottom-40 text-2xl font-bold -rotate-90 opacity-50 sm:block z-10"
		>
			{{ sloganText }}
		</h3>
		<div class="relative max-w-screen-xl mx-auto h-full z-10">
			<slot />
		</div>
	</div>
</template>

<script setup>
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
</script>

<style scoped>
	.slogan-text::before {
		position: absolute;
		display: block;
		content: '';
		width: 120px;
		height: 1px;
		border-bottom: 2px solid white;
		left: 110%;
		top: 50%
	}
	@media (max-width: 640px) {
		.slogan-text::before {
			width: 60px;
		}
	}
</style>

<template>
	<div
		v-if="isOpen"
		id="image-modal"
		@click.self="emits('close')"
		class="absolute top-0 left-0 w-full h-full bg-black/80"
	>
		<div class="flex items-center w-full absolute top-1/2 left-0 justify-between px-6 transform -translate-y-1/2">
			<div
				class="cursor-pointer text-4xl"
				@click.prevent="switchImage(activeIndex - 1)"
			>
				<i class="fas fa-arrow-circle-left" />
			</div>
			<div class="w-80%">
				<img
					:src="getPictureRelativePath(imageList[activeIndex])"
					alt="main-image"
				>
			</div>
			<div
				class="cursor-pointer text-4xl"
				@click.prevent="switchImage(activeIndex + 1)"
			>
				<i class="fas fa-arrow-circle-right" />
			</div>
		</div>
		<div class="preview">
			<div class="flex items-center w-full h-8 absolute left-0 bottom-8 justify-center">
				<img
					v-for="(previewItem, previewIndex) in imageList"
					:key="`preview-item${previewIndex}`"
					:src="getPictureRelativePath(previewItem)"
					:alt="previewItem"
					class="h-full mx-1 opacity-20 cursor-pointer"
					:class="{'active': previewIndex === activeIndex}"
					@click.prevent="switchImage(activeIndex - 1)"
				>
			</div>
		</div>
		<div
			class="absolute top-6 right-6 text-4xl text-white cursor-pointer"
			@click="emits('close')"
		>
			<i class="fas fa-times-circle" />
		</div>
	</div>
</template>

<script setup>
import {getPictureRelativePath} from '../lib/helper';
import {defineProps, defineEmits, ref} from 'vue';

const props = defineProps({
	imageList: {
		type: Array,
		default: () => ([]),
	},
	isOpen: {
		type: Boolean,
		default: false,
	},
});
const emits = defineEmits(['close']);

const activeIndex = ref(0);

const switchImage = index => {
	if (index < 0) {
		activeIndex.value = props.imageList.length - 1;
	} else if (index >= props.imageList.length) {
		activeIndex.value = 0;
	} else {
		activeIndex.value = index;
	}
};

</script>

<style lang="scss" scoped>
	.active {
		opacity: 100%;
	}
</style>

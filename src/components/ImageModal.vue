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
			<div class="w-90%">
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
	</div>
</template>

<script setup>
import {getPictureRelativePath} from '../lib/helper';
import {defineProps, defineEmits, computed, ref} from 'vue';

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

// const displayImageList = computed(() => {
// 	if (props.imageList.length === 0) {
// 		return [];
// 	}
// 	const nextIndex = activeIndex.value + 1 === props.imageList.length ? 0 : activeIndex.value + 1;
// 	const prevIndex = activeIndex.value - 1 < 0 ? props.imageList.length - 1 : activeIndex.value - 1;
// 	return [props.imageList[prevIndex], props.imageList[activeIndex.value], props.imageList[nextIndex]];
// });

const switchImage = index => {
	activeIndex.value = index < 0 ? props.imageList.length - 1 : index;
};

</script>

<style lang="scss" scoped>
	.active {
		opacity: 100%;
	}
</style>

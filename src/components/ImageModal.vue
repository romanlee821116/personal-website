<template>
	<div
		id="image-modal"
		@click.self="emits('close')"
	>
		<div>
			<div
				class="arrow-left"
				@click.prevent="switchImage(activeIndex - 1)"
			/>
			<div class="flex items-center">
				<img
					:src="imageList[activeIndex]"
					alt="main-image"
				>
			</div>
			<div
				class="arrow-right"
				@click.prevent="switchImage(activeIndex + 1)"
			/>
		</div>
		<div class="preview">
			<div class="flex items-center">
				<img
					v-for="(previewItem, previewIndex) in displayImageList"
					:key="`preview-item${previewIndex}`"
					:src="getPictureRelativePath(previewItem)"
					:alt="previewItem"
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

const displayImageList = computed(() => {
	if (props.imageList.length === 0) {
		return [];
	}
	const nextIndex = activeIndex.value + 1 === props.imageList.length ? 0 : activeIndex.value + 1;
	const prevIndex = activeIndex.value - 1 < 0 ? props.imageList.length - 1 : activeIndex.value - 1;
	return [props.imageList[prevIndex], props.imageList[activeIndex.value], props.imageList[nextIndex]];
});

const switchImage = index => {
	activeIndex.value = index < 0 ? imageList.length - 1 : index;
};

</script>

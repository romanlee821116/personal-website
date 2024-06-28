<template>
    <PageWrap
		:pageNumber="pageNumber"
		:bgImage="bgImage"
		:sloganText="sloganText"
	>
        <div
			id="forth-page"
			class="h-full flex flex-col pt-10 sm:flex-row sm:items-center sm:justify-center"
		>
			<div class="flex items-center w-full absolute top-1/2 left-0 justify-center px-6 transform -translate-y-1/2 h-full">
				<div
					class="cursor-pointer text-4xl"
					@click.prevent="switchWork(activeIndex - 1)"
				>
					<i class="fas fa-chevron-left"></i>
				</div>
				<div class="flex flex-col md:flex-row justify-center w-full items-center">
					<div class="relative h-fit mb-12 md:mb-0">
						<img
							:src="getPictureRelativePath(activeItem.imgList[0])"
							:alt="activeItem.img"
							class="rounded-md overflow-hidden w-80 md:w-96 sm:mr-6"
						>
					</div>
					<div class="md:max-w-40% w-80%">
						<b class="text-xl mb-4 block md:w-fit w-full text-center md:text-left">
							{{ lang(activeItem.title) }}
						</b>
						<p
							class="mb-2"
							v-html="lang(activeItem.desc)"
						/>
						<a
							:href="activeItem.link"
							target="_blank"
							class="hover:underline"
						>
							<i class="fas fa-globe-asia mr-2" />
							<span>{{ lang('link') }}</span>
						</a>
					</div>
				</div>
				<div
					class="cursor-pointer text-4xl"
					@click.prevent="switchWork(activeIndex + 1)"
				>
					<i class="fas fa-chevron-right"></i>
				</div>
			</div>
        </div>
    </PageWrap>
</template>

<script setup>
import PageWrap from './PageWrap.vue';
import { getPictureRelativePath } from '../lib/helper';
import { ref, computed } from 'vue';

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

const emit = defineEmits(['showMoreImage']);

const workData = [
	{
		title: 'work_data_title_1',
		desc: 'work_data_desc_1',
		link: 'https://www.kkday.com/zh-tw/transportation/taiwan',
		imgList: ['kkday-pic1', 'kkday-pic2'],
	},
	{
		title: 'work_data_title_2',
		desc: 'work_data_desc_2',
		link: 'https://reurl.cc/A0dZ4Y',
		imgList: ['tibame-group1'],
	},
	{
		title: 'work_data_title_3',
		desc: 'work_data_desc_3',
		link: 'https://reurl.cc/x6lqL1',
		imgList: ['tibame-personal1'],
	},
];

const activeIndex = ref(0);

const activeItem = computed(() => workData[activeIndex.value]);

const switchWork = index => {
	if (index < 0) {
		activeIndex.value = 2;
	} else if (index > 2) {
		activeIndex.value = 0;
	} else {
		activeIndex.value = index;
	}
};

</script>

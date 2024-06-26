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
			<div class="flex items-center w-full absolute top-1/2 left-0 justify-center px-6 transform -translate-y-1/2">
				<div
					class="cursor-pointer text-4xl"
					@click.prevent="switchWork(activeIndex - 1)"
				>
					<i class="fas fa-chevron-left"></i>
				</div>
				<div class="flex justify-center w-full">
					<div class="relative h-fit">
						<img
							:src="getPictureRelativePath(activeItem.imgList[0])"
							:alt="activeItem.img"
							class="rounded-md overflow-hidden w-96 sm:mr-6"
						>
						<!-- <div
							class="absolute left-2 bottom-2 bg-primary-green/75 p-2 text-xs rounded-md cursor-pointer hover:bg-primary-green/90 transition duration-300"
							@click="showMoreImage(activeItem)"
						>
							<i class="far fa-image" />
							{{ '查看圖片' }}
						</div> -->
					</div>
					<div class="max-w-40% min-w-40%">
						<b class="text-xl mb-4 block w-fit">
							{{ activeItem.title }}
						</b>
						<p
							class="mb-2"
							v-html="activeItem.desc"
						/>
						<a
							:href="activeItem.link"
							target="_blank"
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
			<!-- <div class="preview">
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
			</div> -->
        </div>
    </PageWrap>
</template>

<script setup>
import PageWrap from './PageWrap.vue';
import {getPictureRelativePath} from '../lib/helper';
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
		title: 'KKday - 點對點交通服務',
		desc: '交通服務PC / Mobile頁面實作。包含台灣高鐵、日本巴士、韓國機票、全球租車等11項服務。<br><br>透過供應商串接，讓使用者能取得即時的服務資訊。並提供如選擇座位項目、升級車廂、加購商品等客製選項。<br><br>各服務皆包含首頁、搜尋結果、預定及訂單明細頁等。',
		link: 'https://www.kkday.com/zh-tw/transportation/taiwan',
		imgList: ['kkday-pic1', 'kkday-pic2'],
	},
	{
		title: 'Tibame前端工程師養成班 - 團體專題',
		desc: '實作和菓子購物網站，擔任組長帶領5人團隊進行開發，實作前台頁面動畫、金物流API及後端資料庫串接。',
		link: 'https://reurl.cc/A0dZ4Y',
		imgList: ['tibame-group1'],
	},
	{
		title: 'Tibame前端工程師養成班 - 個人專題',
		desc: '完成UI規劃設計、前台網頁開發(RWD)，成果榮獲最佳個人網站獎第1名。',
		link: 'https://reurl.cc/x6lqL1',
		imgList: ['tibame-personal1'],
	},
];

// const imageList = ref([]);

const showMoreImage = item => {
	emit('showMoreImage', item)
};

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

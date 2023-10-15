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
			<div
				v-for="(item, index) in workData"
				:key="`work-${index}`"
				class="flex justify-center"
			>
				<div class="relative">
					<img
						:src="getPictureRelativePath(item.imgList[0])"
						:alt="item.img"
						class="rounded-md overflow-hidden w-96 sm:mr-6"
					>
					<div
						class="absolute left-2 bottom-2 bg-primary-green/75 p-2 text-xs rounded-md cursor-pointer hover:bg-primary-green/90 transition duration-300"
						@click="showMoreImage(item)"
					>
						<i class="far fa-image" />
						{{ '查看圖片' }}
					</div>
				</div>
				<div class="max-w-1/2">
					<b class="text-xl mb-4 block w-fit">
						{{ item.title }}
					</b>
					<p
						class="mb-2"
						v-html="item.desc"
					/>
					<a
						:href="item.link"
						target="_blank"
					>
						<i class="fas fa-globe-asia mr-2" />
						<span>網站連結</span>
					</a>
				</div>
			</div>
        </div>
    </PageWrap>
</template>

<script setup>
import PageWrap from './PageWrap.vue';
import {getPictureRelativePath} from '../lib/helper';

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

const showMoreImage = item => {
	console.log('more image click');
	emit('showMoreImage', item)
};

const workData = [
	{
		title: 'KKday - 點對點交通服務',
		desc: '交通服務PC / M頁面實作，包含台灣高鐵、日本巴士、韓國機票、全球租車等10項服務。<br>藉由串接供應商取得服務資料，讓使用者得到即時的資訊反饋。並提供消費者如選擇座位項目、升級車廂、加購商品等客製選項。<br>各服務皆包含首頁、搜尋結果、預定及訂單明細頁等。',
		link: 'https://www.kkday.com/zh-tw/transportation/taiwan',
		imgList: ['kkday-pic1', 'kkday-pic2',],
	},
];

</script>

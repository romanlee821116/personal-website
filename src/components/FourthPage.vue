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
			
        </div>
    </PageWrap>
</template>

<script setup>
import {defineProps} from 'vue';
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
</script>

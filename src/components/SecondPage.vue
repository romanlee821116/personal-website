<template>
	<PageWrap
		:pageNumber="pageNumber"
		:bgImage="bgImage"
		:sloganText="sloganText"
	>
		<div
			id="second-page"
			class="h-fit md:h-full flex flex-col items-center justify-center sm:flex-row pt-6 md:pt-0"
		>
			<div class="text-left mb-8 sm:mr-20 img-wrap relative">
				<img
					class="w-56 sm:h-80 md:h-fit rounded-full mx-auto sm:w-80 sm:rounded-none personal-pic"
					:src="getPictureRelativePath('myself')"
					alt="personal-pic"
				>
				<div class="flex justify-center mt-8">
					<a
						v-for="(item, index) in contactBtnList"
						:key="`contact-btn${index}`"
						:href="item.url"
						target="_blank"
						class="text-3xl mr-4"
					>
						<i
							class="text-gray-200 hover:text-primary-green ease-linear duration-100 mx-auto"
							:class="item.icon"
						/>
					</a>
				</div>
			</div>
			<div class="px-6 text-sm sm:w-[480px] sm:px-0">
				<p
					class="mb-4"
					v-html="lang('intro_1')"
				/>
				<p>
					{{ lang('intro_2') }}
				</p>
				<div class="mt-8">
					<p class="text-base mb-3 font-bold">
						<i class="fas fa-square text-primary-green mr-1" />
						{{ lang('education') }}
					</p>
					<div>
						<div
							v-for="(item, index) in educationList"
							:key="`education-item${index}`"
							class="flex items-center mb-2"
						>
							<img
								:src="getPictureRelativePath(item.img)"
								:alt="item.img"
								class="w-12 sm:w-14 sm:h-fit mx-2 mb-2"
							>
							<span>{{ lang(item.text) }}</span>
						</div>
					</div>
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

const contactBtnList = [
	{
		name: 'linkedIn',
		icon: 'fab fa-linkedin',
		url: 'https://www.linkedin.com/in/anyilee/',
	},
	{
		name: 'github',
		icon: 'fab fa-github',
		url: 'https://github.com/romanlee821116',
	},
	{
		name: 'Email',
		icon: 'fas fa-envelope',
		url: 'mailto: romanlee1116@gmail.com',
	}
];

const educationList = [
	{
		text: 'master',
		img: 'ntu-logo',
	},
	{
		text: 'bachelor',
		img: 'nchu-logo',
	},
];

const schoolList = ['ntu-logo', 'nchu-logo'];

</script>

<style lang="scss" scoped>
	.personal-pic {
		box-shadow: 15px 15px 0 rgba($color: #9CC69B, $alpha: .4);

		@media (max-width: 575px) {
			box-shadow: 5px 5px 0 rgba($color: #9CC69B, $alpha: .4);
		}
	}

	.img-wrap {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			top: -15px;
			left: -15px;
			display: block;
			width: 150px;
			height: 150px;
			border-top: 4px solid rgba($color: #9CC69B, $alpha: .4);
			border-left: 4px solid rgba($color: #9CC69B, $alpha: .4);
		}
		@media (max-width: 575px) {
			&::after {
				display: none;
			}
		}
	}
</style>
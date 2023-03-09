<script>
import { defineProps } from 'vue';

export default {
	setup() {
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
	},
};
</script>

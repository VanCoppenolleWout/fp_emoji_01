<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { get } from '../utils/network'
import Emoji from './Emoji.vue'
import EmojiModel from '../models/Emoji'

interface Emojis {
	[name: string]: string
}

export default defineComponent({
	components: {
		Emoji,
	},
	
	setup() {
		const emojis = reactive<{data: Emojis}>({ data: {} })
		
		const getData = async () => {
			const data: Emojis = await get('https://api.github.com/emojis')

			emojis.data = data
		}

		getData()

		return {
			emojis,
		}
	},
})
</script>

<template>
	<main class="p-2 text-blue-900 dark:text-blue-100">
		<div class="grid grid-cols-10 gap-3 items-center justify-center overflow-y-auto" v-if="Object.keys(emojis.data).length > 0">
			<div v-for="(value, key) of emojis.data" :key="value">
				<Emoji :name="key.toString()" :image="value"/>
			</div>
		</div>
		<div v-else>
			<!-- Er zijn geen emjois -->
			<!-- We zijn aan het wachten -->
			<p class="animate-pulse text-center">Loading...</p>
		</div>
		
	</main>
</template>

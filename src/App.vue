<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import EmojiOverview from './components/EmojiOverview.vue'

import { ActionTypes } from './models/caching';
import { useStore } from 'vuex';

const store = useStore()

if (!Object.keys(store.state.caching.emojis).length) store.dispatch(ActionTypes.FETCH_EMOJIS)

</script>

<template>
	<div class="max-w-2xl mx-auto h-screen grid grid-rows-applayout">
		<AppHeader />
		<EmojiOverview v-if="Object.keys(store.state.caching.emojis).length"/>
		<AppFooter />
	</div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import Emoji from '../models/Emoji';
import { GetterTypes, MutationTypes } from '../store/modules/favorites'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    
    const handleFavToggle = () => {
      const emoji: Emoji = {}
      emoji[props.name] = props.image;

      store.commit(MutationTypes.TOGGLE_FAVORITE, emoji)
    }

    // computed, want data kan en zal veel veranderen
    const isFav = computed(() => store.getters[GetterTypes.CHECK_FAVORITE](props.name))


    return {
      handleFavToggle,
      isFav,
    }
  },
})
</script>

<template>
  <div class="relative">
    <div
      class="
        peer
        rounded-full
        hover:bg-gray-100
        dark:hover:bg-blue-800
        transition-colors
        duration-200
        ease-out
        p-3
      "
    >
      <!-- :alt="`Icon for ${name}` -->
      <img class="w-full h-auto" :src="image" />

      <span
        v-if="isFav"
        class="absolute right-0 top-0 w-2 h-2 mt-1 mr-1 rounded-full bg-red-500"
      ></span>
    </div>
    <aside
      class="
        opacity-0
        transition-transform
        hover:opacity-100 hover:translate-y-2
        peer-hover:opaciy-100 peer-hover:-translate-y-2
        hover:z-30
        -translate-y-0
        absolute
        left-1/2
        transform
        -translate-x-1/2
        z-10
        flex
        min-w-max
        items-center
        bg-white
        shadow
        p-2
        rounded
        space-x-2
      "
    >
      <button @click="handleFavToggle">
        <svg
          class="w-4 h-4 stroke-current stroke-2 text-red-600"
          :class="{'fill-current' : isFav}"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-linecap="round"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></path>
        </svg>
      </button>
      <button class="font-mono text-xs">:{{ name }}:</button>
    </aside>
  </div>
</template>

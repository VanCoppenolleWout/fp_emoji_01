<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    // warning -> vergeet de vuex module niet
    const favorites = computed(() => store.state.favorites.favs)

    return {
      favorites,
    }
  },
})
</script>

<template>
  <header
    class="
      flex
      justify-between
      items-center
      p-2
      font-medium
      text-blue-900
      dark:text-blue-100
    "
  >
    <h1>Emoji Cheatsheet</h1>
    <button
      class="
        bg-blue-900
        dark:bg-blue-100
        rounded-md
        p-2
        text-blue-100
        dark:text-blue-900
        relative
        flex
        items-center
        justify-center
        px-2
        py-1
        whitespace-normal
      "
    >
      {{ Object.keys(favorites).length }} favorites

      <svg
        class="w-5 h-5 fill-current text-gray-800 ml-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>

      <div
        class="
          absolute
          top-8
          right-8
          mt-10
          bg-white
          shadow
          z-20
          p-3
          rounded-lg
          min-w-max
        "
      >
        <button
          class="flex items-center text-left mb-3 opacity-50 hover:opacity-100"
          v-for="(value, key) of favorites"
          :key="key"
        >
          <img class="h-5 mr-3" :src="value" alt="" />
          :{{ key }}
        </button>
      </div>
    </button>
  </header>
</template>

export enum ActionTypes {
  FETCH_EMOJIS,
}

export enum MutationTypes {
  TOGGLE_FAVORITE = 'toggleFavorite',
}

export enum GetterTypes {
  CHECK_FAVORITE = 'checkFavorite',
}

export const localStorageIdentifier: string = 'EMOJI_CACHE'

const state: State = {
  favs: localStorage.getItem(localStorageIdentifier)
    ? JSON.parse(localStorage.getItem(localStorageIdentifier)!)
    : {}, // todo: fetch from localstorage
}

export default {
  state: state,

  getters: {},

  mutations: {
    [MutationTypes.STORE_EMOJIS](state: State, e: Emoji) {
      // check of emoji al bij favs hoort
      // - verwijder indien niet
      // - voeg toe indien wel
      const incomingKey: string = Object.keys(e)[0]
      if (state.favs.hasOwnProperty(incomingKey)) {
        delete state.favs[incomingKey]
      } else {
        state.favs[incomingKey] = e[incomingKey]
      }

      console.log({ state })
      localStorage.setItem('favs', JSON.stringify(state.favs))
    },
  },
  actions: {
      [ActionTypes.FETCH_EMOJIS]{{ commit }} {
          const emojis = await get('https:')
      }
  },
}

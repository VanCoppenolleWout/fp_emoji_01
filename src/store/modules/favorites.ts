import { isCoreComponent } from "@vue/compiler-core"
import Emoji from "../../models/Emoji"

type State = {
    [Key in string]: Emoji
}

export enum MutationTypes {
    TOGGLE_FAVORITE = 'toggleFavorite',
}

export enum GetterTypes {
    CHECK_FAVORITE = 'checkFavorite',
}

export const localStorageIdentifier: string = 'FAV_STORAGE'

const state: State = {
    favs: localStorage.getItem(localStorageIdentifier) ? JSON.parse(localStorage.getItem(localStorageIdentifier)!) : {}, // todo: fetch from localstorage
}

export default {
    state: state,

    getters: {
        // check if name exists in the state
        [GetterTypes.CHECK_FAVORITE]: (state: State) => (emojiName: string) => 
            state.favs[emojiName] ? true : false,
    },
    mutations: {
        [MutationTypes.TOGGLE_FAVORITE](state: State, e: Emoji) {
            // check of emoji al bij favs hoort
            // - verwijder indien niet
            // - voeg toe indien wel
            const incomingKey: string = Object.keys(e)[0]
            if (state.favs.hasOwnProperty(incomingKey))
            {
                delete state.favs[incomingKey]
            }
            else 
            {
                state.favs[incomingKey] = e[incomingKey]
            }

            console.log({state})
            localStorage.setItem('favs', JSON.stringify(state.favs))
        }
    },
    actions: {

    }
}
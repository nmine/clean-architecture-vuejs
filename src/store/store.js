import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
    return {
        user: {}
    }
}
export const store = new Vuex.Store({
    state: getDefaultState(),
    getters: {
        getLoggedUser: state => state.user,
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
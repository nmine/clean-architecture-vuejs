import Vue from 'vue'
import Vuex from 'vuex'
import {Member} from "../core/domain/Member";

Vue.use(Vuex)

const getDefaultState = () => {
    return {
        member: new Member('Tom', 'Hanks')
    }
}
export const store = new Vuex.Store({
    state: getDefaultState(),
    getters: {
        getMember: state => state.member,
    },
    mutations: {
        updateMember: (state, member) => {
            state.member = member
        },
    }
})
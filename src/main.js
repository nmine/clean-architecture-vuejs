import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import {store} from './store/store'
import makeMemberUseCases from "./core/application/MemberUseCases";
import makeMemberRepository from "./core/domain/MemberRepository";

Vue.config.productionTip = false
Vue.use(Vuex)
const memberRepository = makeMemberRepository(store)
const memberUseCases = makeMemberUseCases(memberRepository)
new Vue({
    store: store,
    memberUseCases,
    vuetify,
    render: h => h(App)
}).$mount('#app')

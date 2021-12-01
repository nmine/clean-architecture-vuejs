import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import {store} from './store/store'
import makeMemberModule from "./core/application/MemberModule";
import makeMemberRepository from "./core/domain/MemberRepository";

Vue.config.productionTip = false
Vue.use(Vuex)
const memberRepository = makeMemberRepository(store)
const memberModule = makeMemberModule(memberRepository)
new Vue({
    store: store,
    memberModule,
    vuetify,
    render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import {store} from './store/store'
import makeMemberModule from "./components/MemberModule";

Vue.config.productionTip = false
Vue.use(Vuex)

const memberModule = makeMemberModule(store)
new Vue({
    store: store,
    memberModule,
    vuetify,
    render: h => h(App)
}).$mount('#app')

import Vue from "vue";

Vue.mixin({
    beforeCreate() {
        const options = this.$options;
        if (options.memberModule)
            this.$memberModule = options.memberModule;
        else if (options.parent && options.parent.$memberModule)
            this.$memberModule = options.parent.$memberModule;
    }
});

export default function makeMemberModule(store = {}) {
    return new MemberModule(store)
}

export class MemberModule {
    constructor(store) {
        this.store = store
    }

    retrieveMember(sessionId) {
        return this.memberRepository.byId(sessionId).then(
            diagnosticSession => {
                this._currentSession =
                    diagnosticSession
            })
    }

    createMember() {
        this.store.commit('increment')
        console.log(this.$store.state.count)
    }

}
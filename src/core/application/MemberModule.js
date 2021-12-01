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

export default function makeMemberModule(memberRepository = {}) {
    return new MemberModule(memberRepository)
}

export class MemberModule {
    constructor(memberRepository) {
        this.memberRepository = memberRepository
    }

    retrieveMember(sessionId) {
        console.log(sessionId)
        return this.memberRepository.createMember()
    }

    createMember() {
        return this.memberRepository.createMember()
    }

}
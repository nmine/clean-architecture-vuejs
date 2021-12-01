import Vue from "vue";

Vue.mixin({
    beforeCreate() {
        const options = this.$options;
        if (options.memberUseCases)
            this.$memberUseCases = options.memberUseCases;
        else if (options.parent && options.parent.$memberUseCases)
            this.$memberUseCases = options.parent.$memberUseCases;
    }
});

export default function makeMemberUseCases(memberRepository = {}) {
    return new MemberUseCases(memberRepository)
}

export class MemberUseCases {
    constructor(memberRepository) {
        this.memberRepository = memberRepository
    }

    retrieveMember() {
        return this.memberRepository.retrieveMember()
    }

    createMember() {
        return this.memberRepository.createMember()
    }

}
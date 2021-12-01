export default function makeMemberRepository(store = {}) {
    return new MemberRepository(store)
}

export class MemberRepository {
    constructor(store) {
        this.store = store
    }

    retrieveMember() {
        return this.store.getters.member
    }

    createMember() {
        this.store.commit('increment')
        console.log(this.store.state.count)
    }

}
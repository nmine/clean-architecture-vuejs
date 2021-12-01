export default function makeMemberRepository(store = {}) {
    return new MemberRepository(store)
}

export class MemberRepository {
    constructor(store) {
        this.store = store
    }

    retrieveMember(sessionId) {
        console.log(sessionId)
        this.store.commit('increment')
        console.log(this.$store.state.count)
    }

    createMember() {
        this.store.commit('increment')
        console.log(this.store.state.count)
    }

}
export class MemberModule {
    constructor(memberRepository) {
        this.memberRepository = memberRepository
    }

    retrieveMember(sessionId) {
        return this.memberRepository.byId(sessionId).then(
            diagnosticSession => {
                this._currentSession =
                    diagnosticSession
            })
    }

    createMember(member) {
        return member.whenValid(() => {
            const result = this.memberRepository.create(member)
            return result
        })
    }

}
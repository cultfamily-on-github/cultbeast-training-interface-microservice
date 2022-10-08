export interface IMasterkeyFileEntry {
    socialMediaLink: string
    masterKey: string
}


export interface IApprenticeKeyFileEntry {
    socialMediaLink: string
    apprenticeKey: string
}

export interface IGameProposalInbound {
    text: string
    fromMasterKey: string
}

export interface IGameProposal {
    id: number,
    text: string,
    proposalDateUTC: string,
    expiryDateUTC: string,
    rating: number,
    proposedBy: string,
    currentVisitorsVoteForItem: number
}

export interface IVoteInbound {
    id: number,
    rating: number,
    fromKey: string
}

export interface IVote {
    id: number,
    votingDate: string,
    rating: number,
    voteBy: string
}
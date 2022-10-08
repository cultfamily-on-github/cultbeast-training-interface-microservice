import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { GameProposalOrganizer } from "./game-proposal-organizer.ts"
import { PersistenceService } from "./persistence-service.ts"
import { DateDoctor } from "./date-doctor/date-doctor.ts"
import { IGameProposal, IVoteInbound } from "./data-model.ts"

const gameProposalOrganizer = GameProposalOrganizer.getInstance()
const persistenceService = PersistenceService.getInstance()

// Deno.test("addVoteOnGameProposal", async () => {

//     await persistenceService.writeGameProposals(testData)

//     const vote: IVoteInbound = {
//         id: 5,
//         rating: 8,
//         fromKey: "unittestapprenticekeyonlyvalidinprogrammingenvironmentdonottrytoexploitdosomethingvaluableinstead"
//     }
//     const newRatingOfProposal = await gameProposalOrganizer.addVoteOnGameProposal(vote)

//     assertEquals(newRatingOfProposal, 8)


//     const expectedResult = [
//         {
//             id: 5,
//             text: "e",
//             proposalDateUTC: "2022-09-30 10:46:14",
//             expiryDateUTC: "2022-10-03 00:00:00",
//             rating: 8,
//             proposedBy: "https://twitter.com/Peer2PeerE",
//             currentVisitorsVoteForItem: 0
//           },
//           {
//             id: 4,
//             text: "d",
//             proposalDateUTC: "2022-09-30 10:46:14",
//             expiryDateUTC: "2022-10-04 00:00:00",
//             rating: 5,
//             proposedBy: "https://twitter.com/Peer2PeerE",
//             currentVisitorsVoteForItem: 0
//           }
//     ]

//     const newlyArrangedGameProposals = await persistenceService.readGameProposals()

//     console.log(newlyArrangedGameProposals[0])
// })

Deno.test("isAfter", async () => { 

    const exampleExpiryDate1 = "9999-10-04 00:00:00"
    const exampleExpiryDate2 = "2022-10-01 00:00:00"
    const lastMomentOfToday = "2022-10-02 23:59:59"

    assertEquals(DateDoctor.isAfter(exampleExpiryDate1, lastMomentOfToday), true)
    assertEquals(DateDoctor.isAfter(exampleExpiryDate2, lastMomentOfToday), false)
})

Deno.test("get future games sort them by rating ... and give them according expiryDates", async () => {
     await persistenceService.writeGameProposals(testData)

    // const allGames = await gameProposalOrganizer.getGameProposals()
    const allGames = testData
    const futureGames = await gameProposalOrganizer.getFutureGames(allGames)

    const expectedOutput1 = [
        {
            "id": 4,
            "text": "d",
            "proposalDateUTC": "2022-09-30 10:46:14",
            "expiryDateUTC": "9999-10-03 00:00:00",
            "rating": 5,
            "proposedBy": "https://twitter.com/Peer2PeerE",
            "currentVisitorsVoteForItem": 0
        },
        {
            "id": 5,
            "text": "e",
            "proposalDateUTC": "2022-09-30 10:46:14",
            "expiryDateUTC": "9999-10-04 00:00:00",
            "rating": 8,
            "proposedBy": "https://twitter.com/Peer2PeerE",
            "currentVisitorsVoteForItem": 0
        }
    ]

    assertEquals(futureGames, expectedOutput1)

    const expectedOutput2 = [
        {
            "id": 4,
            "text": "d",
            "proposalDateUTC": "2022-09-30 10:46:14",
            "expiryDateUTC": "9999-10-01 00:00:00",
            "rating": 6,
            "proposedBy": "https://twitter.com/Peer2PeerE",
            "currentVisitorsVoteForItem": 0
        },
        {
            "id": 3,
            "text": "c",
            "proposalDateUTC": "2022-09-30 10:46:14",
            "expiryDateUTC": "9999-10-01 00:00:00",
            "rating": 4,
            "proposedBy": "https://twitter.com/Peer2PeerE",
            "currentVisitorsVoteForItem": 0
        }
    ]

    const sortedFutureGames: IGameProposal[] = gameProposalOrganizer.updateFutureGamesExpiryDatesAccordingToRating(allGames)

    assertEquals(sortedFutureGames[0].rating, 8)
    assertEquals(sortedFutureGames[1].rating, 5)
})


Deno.test("get next free expiry date", async () => {

    const actualOutput = gameProposalOrganizer.getNextFreeExpiryDate(testData)
    const expectedOutput = "2022-10-05 00:00:00"
    assertEquals(actualOutput, expectedOutput)

})


const testData = [
    {
        "id": 1,
        "text": "a",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "2022-09-30 00:00:00",
        "rating": 0,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 0
    },
    {
        "id": 2,
        "text": "b",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "2022-10-01 00:00:00",
        "rating": 4,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 0
    },
    {
        "id": 3,
        "text": "c",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "2022-10-02 00:00:00",
        "rating": 6,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 0
    },
    {
        "id": 4,
        "text": "d",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "9999-10-03 00:00:00",
        "rating": 5,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 0
    },
    {
        "id": 5,
        "text": "e",
        "proposalDateUTC": "2022-09-30 10:46:14",
        "expiryDateUTC": "9999-10-04 00:00:00",
        "rating": 8,
        "proposedBy": "https://twitter.com/Peer2PeerE",
        "currentVisitorsVoteForItem": 0
    }
]
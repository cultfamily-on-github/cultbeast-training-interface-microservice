import { writable } from 'svelte/store'

export const backendBaseURL = 'http://localhost:8042' // might be replaced by on-chain backend one day
export const cultBeastBackendBaseURL = 'https://cultmagazine.org:8443' // might be replaced by on-chain backend one day

// http://localhost:8042/api/v1/getgameproposals
// http://localhost:8042/api/v1/getgameproposals

export const CultGames = writable([
  {
    id: 0,
    rating: 10,
    text: 'Ask your landlord if you are allowed to pay the rent via CULT or RVLT. Consider tweeting about how he reacted.',
    utcDate: '2022-9-28',
  },
  {
    id: 1,
    rating: 10,
    text: 'Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A',
    utcDate: '2022-9-28',
  },
  {
    id: 2,
    rating: 9,
    text: 'Ensure the following hashtags are trending on Twitter today: #BanklessIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1575232469774651392?s=20&t=29KAdI7wbOWaaw0XtLt6sw',
    utcDate: '2022-9-29',
  },
  {
    id: 3,
    rating: 9,
    text: 'Comment the following video https://rumble.com/v1l86tz-the-great-mission-of-rumble.html with something like. "Thank you Chris. You have our full support https://cultmagazine.org".',
    utcDate: '2022-9-30',
  },
  {
    id: 4,
    rating: 9,
    text: 'Find 2 people (neighbors, friends, colleagues, family members, ...) who do not have browserwallet or a paper wallet yet. Explain to them how important it is to educate themselves around self-hosted wallets like metamask.io.',
    utcDate: '2022-10-01',
  },
  {
    id: 14,
    rating: 9,
    text: 'Invite 5 new people (neighbors, friends, colleagues, family members, ...) who might love the CULTDAO to https://discord.com/invite/wearecultdao to expand our network.',
    utcDate: '2022-10-1',
  },
  {
    id: 5,
    rating: 9,
    text: 'To all who use facebook: Offer each of your facebook friends via a public post 1.000 RVLT if they post a supportive statement regarding the CULTDAO.',
    utcDate: '2022-10-2',
  },
  {
    id: 6,
    rating: 9,
    text: 'Follow 10 new good people today who might love the CULTDAO. Look for common interests and connect with them - to learn, to make friends and to enhance our networks.',
    utcDate: '2022-10-3',
  },
  {
    id: 7,
    rating: 8,
    text: 'Ensure #SaylorLovesCULT is trending on Twitter.',
    utcDate: '2022-10-4',
  },
  {
    id: 8,
    rating: 9,
    text: 'Find 2 people who do not have CULT or RVLT yet. Explain to them how valuable decentralization is. Help them to buy CULT or RVLT. You migh use the info in the following tweet. Please also retweet.',
    utcDate: '2022-10-01',
  },
])

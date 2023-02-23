import {
  rewardBloggerOff,
  rewardBloggerOn,
  rewardChallengerOff,
  rewardChallengerOn,
  rewardCollaboratorOff,
  rewardCollaboratorOn,
  rewardCriticalThinkerOff,
  rewardCriticalThinkerOn,
  rewardDareToBeHappy2On,
  rewardDebaterOff,
  rewardDebaterOn,
  rewardDreamVacationChallengeOn,
  rewardFireStarterOff,
  rewardFireStarterOn,
  rewardFriendshipOn,
  rewardGreenOff,
  rewardGreenOn,
  rewardHomeTownChallengeOn,
  rewardInfluencerOff,
  rewardInfluencerOn,
  rewardStorytellerOff,
  rewardStorytellerOn,
  rewardSuperFriendOff,
  rewardSuperFriendOn,
  rewardWinterChallengeOn,
} from 'Assets/images/rewards'

export const REWARD_BADGES_TYPES = {
  REWARD_CHALLENGER: 'challenger',
  REWARD_BLOGGER: 'blogger',
  REWARD_STORYTELLER: 'storyteller',
  REWARD_SUPER_FRIEND: 'superfriend',
  REWARD_FIRE_STARTER: 'firestarter',
  REWARD_DEBATER: 'debater',
  REWARD_INFLUENCER: 'influencer',
  REWARD_GREEN: 'green',
  REWARD_COLLABORATOR: 'collaborator',
  REWARD_CRITICAL_THINKER: 'critical-thinker',
  REWARD_WINTER_CHALLENGE: 'winter_challenge',
  REWARD_HOMETOWN_CHALLENGE: 'hometown_challenge',
  REWARD_DREAM_VACATION: 'dream_vacation_challenge',
  REWARD_DARE_TO_BE_HAPPY2: 'dare_to_be_happy2',
  REWARD_WINTER_CHALLENGE2: 'winter_challenge2',
  REWARD_FRIENDSHIP: 'friendship_challenge',
}

export const REWARDS = (s: any) => ({
  [REWARD_BADGES_TYPES.REWARD_CHALLENGER]: {
    type: REWARD_BADGES_TYPES.REWARD_CHALLENGER,
    title: s(`${REWARD_BADGES_TYPES.REWARD_CHALLENGER}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_CHALLENGER}.descriptionOff`,
    ),
    descriptionOn: s(`${REWARD_BADGES_TYPES.REWARD_CHALLENGER}.descriptionOn`),
    iconOff: rewardChallengerOff,
    iconOn: rewardChallengerOn,
  },
  [REWARD_BADGES_TYPES.REWARD_FIRE_STARTER]: {
    type: REWARD_BADGES_TYPES.REWARD_FIRE_STARTER,
    title: s(`${REWARD_BADGES_TYPES.REWARD_FIRE_STARTER}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_FIRE_STARTER}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_FIRE_STARTER}.descriptionOn`,
    ),
    iconOff: rewardFireStarterOff,
    iconOn: rewardFireStarterOn,
  },
  [REWARD_BADGES_TYPES.REWARD_BLOGGER]: {
    type: REWARD_BADGES_TYPES.REWARD_BLOGGER,
    title: s(`${REWARD_BADGES_TYPES.REWARD_BLOGGER}.title`),
    descriptionOff: s(`${REWARD_BADGES_TYPES.REWARD_BLOGGER}.descriptionOff`),
    descriptionOn: s(`${REWARD_BADGES_TYPES.REWARD_BLOGGER}.descriptionOn`),
    iconOff: rewardBloggerOff,
    iconOn: rewardBloggerOn,
  },
  [REWARD_BADGES_TYPES.REWARD_STORYTELLER]: {
    type: REWARD_BADGES_TYPES.REWARD_STORYTELLER,
    title: s(`${REWARD_BADGES_TYPES.REWARD_STORYTELLER}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_STORYTELLER}.descriptionOff`,
    ),
    descriptionOn: s(`${REWARD_BADGES_TYPES.REWARD_STORYTELLER}.descriptionOn`),
    iconOff: rewardStorytellerOff,
    iconOn: rewardStorytellerOn,
  },
  [REWARD_BADGES_TYPES.REWARD_INFLUENCER]: {
    type: REWARD_BADGES_TYPES.REWARD_INFLUENCER,
    title: s(`${REWARD_BADGES_TYPES.REWARD_INFLUENCER}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_INFLUENCER}.descriptionOff`,
    ),
    descriptionOn: s(`${REWARD_BADGES_TYPES.REWARD_INFLUENCER}.descriptionOn`),
    iconOff: rewardInfluencerOff,
    iconOn: rewardInfluencerOn,
    tips: s(`${REWARD_BADGES_TYPES.REWARD_INFLUENCER}.tips`),
  },
  [REWARD_BADGES_TYPES.REWARD_CRITICAL_THINKER]: {
    type: REWARD_BADGES_TYPES.REWARD_CRITICAL_THINKER,
    title: s(`${REWARD_BADGES_TYPES.REWARD_CRITICAL_THINKER}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_CRITICAL_THINKER}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_CRITICAL_THINKER}.descriptionOn`,
    ),
    iconOff: rewardCriticalThinkerOff,
    iconOn: rewardCriticalThinkerOn,
    tips: s(`${REWARD_BADGES_TYPES.REWARD_CRITICAL_THINKER}.tips`),
  },
  [REWARD_BADGES_TYPES.REWARD_GREEN]: {
    type: REWARD_BADGES_TYPES.REWARD_GREEN,
    title: s(`${REWARD_BADGES_TYPES.REWARD_GREEN}.title`),
    descriptionOff: s(`${REWARD_BADGES_TYPES.REWARD_GREEN}.descriptionOff`),
    descriptionOn: s(`${REWARD_BADGES_TYPES.REWARD_GREEN}.descriptionOn`),
    iconOff: rewardGreenOff,
    iconOn: rewardGreenOn,
    tips: s(`${REWARD_BADGES_TYPES.REWARD_GREEN}.tips`),
  },
  [REWARD_BADGES_TYPES.REWARD_DEBATER]: {
    type: REWARD_BADGES_TYPES.REWARD_DEBATER,
    title: s(`${REWARD_BADGES_TYPES.REWARD_DEBATER}.title`),
    descriptionOff: s(`${REWARD_BADGES_TYPES.REWARD_DEBATER}.descriptionOff`),
    descriptionOn: s(`${REWARD_BADGES_TYPES.REWARD_DEBATER}.descriptionOn`),
    iconOff: rewardDebaterOff,
    iconOn: rewardDebaterOn,
  },
  [REWARD_BADGES_TYPES.REWARD_SUPER_FRIEND]: {
    type: REWARD_BADGES_TYPES.REWARD_SUPER_FRIEND,
    title: s(`${REWARD_BADGES_TYPES.REWARD_SUPER_FRIEND}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_SUPER_FRIEND}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_SUPER_FRIEND}.descriptionOn`,
    ),
    iconOff: rewardSuperFriendOff,
    iconOn: rewardSuperFriendOn,
    tips: s(`${REWARD_BADGES_TYPES.REWARD_SUPER_FRIEND}.tips`),
  },
  [REWARD_BADGES_TYPES.REWARD_COLLABORATOR]: {
    type: REWARD_BADGES_TYPES.REWARD_COLLABORATOR,
    title: s(`${REWARD_BADGES_TYPES.REWARD_COLLABORATOR}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_COLLABORATOR}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_COLLABORATOR}.descriptionOn`,
    ),
    iconOff: rewardCollaboratorOff,
    iconOn: rewardCollaboratorOn,
    tips: s(`${REWARD_BADGES_TYPES.REWARD_COLLABORATOR}.tips`),
  },
  [REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE]: {
    type: REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE,
    title: s(`${REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE}.descriptionOn`,
    ),
    iconOff: rewardWinterChallengeOn,
    iconOn: rewardWinterChallengeOn,
  },
  [REWARD_BADGES_TYPES.REWARD_HOMETOWN_CHALLENGE]: {
    type: REWARD_BADGES_TYPES.REWARD_HOMETOWN_CHALLENGE,
    title: s(`${REWARD_BADGES_TYPES.REWARD_HOMETOWN_CHALLENGE}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_HOMETOWN_CHALLENGE}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_HOMETOWN_CHALLENGE}.descriptionOn`,
    ),
    iconOff: rewardHomeTownChallengeOn,
    iconOn: rewardHomeTownChallengeOn,
  },
  [REWARD_BADGES_TYPES.REWARD_DREAM_VACATION]: {
    type: REWARD_BADGES_TYPES.REWARD_DREAM_VACATION,
    title: s(`${REWARD_BADGES_TYPES.REWARD_DREAM_VACATION}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_DREAM_VACATION}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_DREAM_VACATION}.descriptionOn`,
    ),
    iconOff: rewardDreamVacationChallengeOn,
    iconOn: rewardDreamVacationChallengeOn,
  },
  [REWARD_BADGES_TYPES.REWARD_DARE_TO_BE_HAPPY2]: {
    type: REWARD_BADGES_TYPES.REWARD_DARE_TO_BE_HAPPY2,
    title: s(`${REWARD_BADGES_TYPES.REWARD_DARE_TO_BE_HAPPY2}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_DARE_TO_BE_HAPPY2}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_DARE_TO_BE_HAPPY2}.descriptionOn`,
    ),
    iconOff: rewardDareToBeHappy2On,
    iconOn: rewardDareToBeHappy2On,
  },
  [REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE2]: {
    type: REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE2,
    title: s(`${REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE2}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE2}.descriptionOff`,
    ),
    descriptionOn: s(
      `${REWARD_BADGES_TYPES.REWARD_WINTER_CHALLENGE2}.descriptionOn`,
    ),
    iconOff: rewardDareToBeHappy2On,
    iconOn: rewardDareToBeHappy2On,
  },
  [REWARD_BADGES_TYPES.REWARD_FRIENDSHIP]: {
    type: REWARD_BADGES_TYPES.REWARD_FRIENDSHIP,
    title: s(`${REWARD_BADGES_TYPES.REWARD_FRIENDSHIP}.title`),
    descriptionOff: s(
      `${REWARD_BADGES_TYPES.REWARD_FRIENDSHIP}.descriptionOff`,
    ),
    descriptionOn: s(`${REWARD_BADGES_TYPES.REWARD_FRIENDSHIP}.descriptionOn`),
    iconOff: rewardFriendshipOn,
    iconOn: rewardFriendshipOn,
  },
})

export const getReward = type => REWARDS[type]

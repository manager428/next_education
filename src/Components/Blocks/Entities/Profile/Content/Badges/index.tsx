import React, { useCallback, useState } from 'react'
import PT from 'prop-types'

import get from 'lodash/get'
import keyBy from 'lodash/keyBy'
import map from 'lodash/map'
import take from 'lodash/take'
import values from 'lodash/values'

import { Flex } from 'Components/UI'

import {
  BlockTitle,
  ContentTitleText,
  ContentTitleViewAllText,
  RoundedBlock,
} from 'Components/Blocks/Entities/Profile/styles'
import BadgeModal from 'Components/Blocks/Modals/BadgeModal'

import { REWARDS } from 'Constants/rewards'

import _, { useScopedI18n } from 'Services/I18n'

import RewardItem from './RewardItem'
import { BadgesWrap, Wrap } from './styles'

const Badges = ({ badges }) => {
  const s = useScopedI18n('badges')
  const TRANSLATED_REWARD = REWARDS(s)
  const [modalState, setModalState] = useState<any>({
    isOpen: false,
    badge: null,
    userBadge: null,
  })
  const [isViewAll, setViewAll] = useState(false)

  let sortedRewards = { ...TRANSLATED_REWARD }

  if (TRANSLATED_REWARD.dream_vacation_challenge) {
    sortedRewards = {
      dream_vacation_challenge: TRANSLATED_REWARD.dream_vacation_challenge,

      ...sortedRewards,
    }
  }

  const rewards = !isViewAll
    ? keyBy(take(values(sortedRewards), 8), 'type')
    : sortedRewards

  const handleBadgeOpen = useCallback(
    (badge, userBadge) => {
      setModalState({
        isOpen: true,
        badge,
        userBadge,
      })
    },
    [modalState],
  )

  return (
    <Wrap>
      {modalState.isOpen && (
        <BadgeModal
          badge={modalState.badge}
          isOpen={modalState.isOpen}
          userBadge={modalState.userBadge}
          onClose={() =>
            setModalState({ isOpen: false, badge: null, userBadge: null })
          }
        />
      )}

      <BlockTitle>
        <ContentTitleText>{_('general.badges')}</ContentTitleText>
        <ContentTitleViewAllText onClick={() => setViewAll(!isViewAll)}>
          {!isViewAll ? _('general.viewAll') : _('general.viewLess')}
        </ContentTitleViewAllText>
      </BlockTitle>
      <RoundedBlock style={{ marginTop: '12px' }}>
        <BadgesWrap>
          {map(rewards, (rewardData, rewardType) => {
            const userBadge = get(badges, rewardType, null)
            const icon = userBadge ? 'iconOn' : 'iconOff'

            return TRANSLATED_REWARD[rewardType].descriptionOff.length > 0 ||
              userBadge ? (
              <Flex
                key={rewardType}
                onClick={() => handleBadgeOpen(rewardData, userBadge)}
              >
                <RewardItem
                  count={get(userBadge, 'badge_count', 0)}
                  rewardImage={get(rewardData, icon)}
                  rewardTitle={get(rewardData, 'title')}
                />
              </Flex>
            ) : null
          })}
        </BadgesWrap>
      </RoundedBlock>
    </Wrap>
  )
}

Badges.propTypes = {
  badges: PT.object.isRequired,
}

export default Badges

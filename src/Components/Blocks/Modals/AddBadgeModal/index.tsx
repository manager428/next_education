import React, { useState } from 'react'

import filter from 'lodash/filter'
import keyBy from 'lodash/keyBy'
import map from 'lodash/map'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { REWARD_BADGES_TYPES, REWARDS } from 'Constants/rewards'

import { teacherApi } from 'Services/Api/requests'
import { useScopedI18n } from 'Services/I18n'

import Badge from './Badge'
import {
  Button,
  ButtonsContainer,
  Content,
  Error,
  Modal,
  Title,
} from './styles'
import { Props } from './types'

const AddBadgeModal: React.FC<Props> = ({
  selectedUserId,
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const s = useScopedI18n('badges')
  const TRANSLATED_REWARDS = REWARDS(s)

  const BADGES = [
    TRANSLATED_REWARDS[REWARD_BADGES_TYPES.REWARD_INFLUENCER],
    TRANSLATED_REWARDS[REWARD_BADGES_TYPES.REWARD_CRITICAL_THINKER],
    TRANSLATED_REWARDS[REWARD_BADGES_TYPES.REWARD_COLLABORATOR],
    TRANSLATED_REWARDS[REWARD_BADGES_TYPES.REWARD_GREEN],
  ]

  const [responseError, setResponseError] = useState('')
  const [selectedBadges, setSelectedBadges] = useState<typeof BADGES>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleAddBadges = async () => {
    setIsLoading(true)

    try {
      await teacherApi.addBadge({
        badges: selectedBadges,
        userId: selectedUserId,
      })
      onSuccess()
      onCloseModal()
    } catch (e) {
      setResponseError('Something going wrong, contact with support!')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectBadge = badge => {
    const selectedBadgesHash = keyBy(selectedBadges, 'title')
    if (selectedBadgesHash[badge.title]) {
      setSelectedBadges(filter(selectedBadges, bg => bg.title !== badge.title))
    } else {
      setSelectedBadges([...selectedBadges, badge])
    }
  }

  const selectedBadgesHash = keyBy(selectedBadges, 'title')

  return (
    <Modal isOpen={isOpen}>
      <Content>
        <Flex flexWrap="wrap" width="100%">
          <Title>Choose Rewards for Student</Title>

          <Flex flexWrap="wrap" width="100%">
            {map(BADGES, (badge, index) => (
              <Badge
                data={badge}
                isSelected={!!selectedBadgesHash[badge.title]}
                key={index}
                onSelect={handleSelectBadge}
              />
            ))}
          </Flex>

          <Error>{responseError}</Error>
          <ButtonsContainer>
            <Button disabled={isLoading} onClick={onCloseModal}>
              Cancel
            </Button>
            <Flex alignItems="center">
              {selectedBadges.length > 0 && (
                <Flex as="span" fontSize={16} mr={14}>
                  You have selected {selectedBadges.length} reward(s)
                </Flex>
              )}

              <Button
                disabled={isLoading || selectedBadges.length === 0}
                primary
                width={140}
                onClick={handleAddBadges}
              >
                Confirm
              </Button>
            </Flex>

            {isLoading && <Loader />}
          </ButtonsContainer>
        </Flex>
      </Content>
    </Modal>
  )
}

export default AddBadgeModal

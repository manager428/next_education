/* eslint-disable camelcase */
import React, { useMemo, useRef } from 'react'

import Image from 'next/image'
import { Line } from 'rc-progress'

import get from 'lodash/get'

import { Flex } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'

import {
  CloseButton,
  Content,
  Description,
  Modal,
  ProgressInfo,
  ProgressSection,
  RewardCount,
  RewardWrapper,
  Tips,
  Title,
  Wrapper,
} from './styles'

type Props = {
  isOpen: boolean
  badge: {
    type: string
    title: string
    descriptionOff: string
    descriptionOn: string
    iconOff: any
    iconOn: any
  }
  userBadge: {
    badge_count: number
    maxActions: number
    userActions: number
  }
  onClose: () => void
}

const BadgeModal: React.FC<Props> = ({ badge, userBadge, isOpen, onClose }) => {
  const ref = useRef(null)
  useOutsideClick({ ref, onClick: () => onClose() })

  const icon = useMemo(
    () => (userBadge ? get(badge, 'iconOn') : get(badge, 'iconOff')),
    [badge],
  )

  const description = useMemo(
    () =>
      userBadge ? get(badge, 'descriptionOn') : get(badge, 'descriptionOff'),
    [badge],
  )

  const tips = get(badge, 'tips')

  return (
    <Modal className="badge-detail-modal" isOpen={isOpen} onCallback={onClose}>
      <Wrapper>
        <Content ref={ref}>
          <Flex onClick={onClose}>
            <CloseButton />
          </Flex>

          <Flex
            alignContent="flex-start"
            flexWrap="wrap"
            justifyContent="center"
            width={1}
          >
            <Title>{badge.title}</Title>
            <RewardWrapper>
              <Image objectFit="cover" src={icon} />
              {userBadge?.badge_count && (
                <RewardCount>x{userBadge?.badge_count}</RewardCount>
              )}
            </RewardWrapper>

            {userBadge?.maxActions > 1 && (
              <ProgressSection>
                <ProgressInfo>
                  <span>{userBadge?.userActions}</span>/ {userBadge?.maxActions}{' '}
                  to the next reward
                </ProgressInfo>

                <Line
                  className="progress-line"
                  percent={
                    (userBadge?.userActions / userBadge?.maxActions) * 100
                  }
                  strokeColor="#071D40"
                  strokeLinecap="butt"
                  strokeWidth={1}
                  style={{
                    height: '10px',
                    borderRadius: '5px',
                  }}
                  trailColor="#D3DAE8"
                />
              </ProgressSection>
            )}

            <Description variant={userBadge ? 'bold' : null}>
              {description}
            </Description>
            {tips && <Tips>{tips}</Tips>}
          </Flex>
        </Content>
      </Wrapper>
    </Modal>
  )
}

export default BadgeModal

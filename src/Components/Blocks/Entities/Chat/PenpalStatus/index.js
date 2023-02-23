import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'Components/UI'

import {
  Avatar,
  Container,
  InfoButton,
  OnlineIndicator,
  Status,
  Title,
} from 'Components/Blocks/Entities/Chat/PenpalStatus/styles'

const PenpalStatus = ({ title, avatar, onInfoClick, isActive, isOnline }) => (
  <Container>
    <Avatar src={avatar} />
    <Flex flexWrap="wrap" ml="14px;" width={1}>
      <Title>{title}</Title>
      <Status>
        {isOnline ? 'Online' : 'Offline'}
        <OnlineIndicator online={isOnline} />
      </Status>
    </Flex>
    <Flex alignItems="center" justifyContent="flex-end">
      <InfoButton isActive={isActive} onClick={onInfoClick} />
    </Flex>
  </Container>
)

PenpalStatus.propTypes = {
  avatar: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isOnline: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onInfoClick: PropTypes.func.isRequired,
}

export default PenpalStatus

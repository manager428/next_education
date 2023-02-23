import React, { useState } from 'react'

import {
  acceptedCallGlyph,
  declinedCallGlyph,
  pendingCallGlyph,
} from 'Assets/svg/calls'

import { Flex, Icon } from 'Components/UI'

import {
  CardStatusContainer,
  StatusToolTip,
} from 'Components/Blocks/Entities/Calls/CallCard/styles'

import { CALL_USER_STATUS_ENUM } from 'Constants/calls'

type Props = {
  status: CALL_USER_STATUS_ENUM
}
const CallStatus: React.FC<Props> = ({ status }) => {
  const [isShowTooltip, setShowTooltip] = useState<boolean>(false)

  const renderIcon = (): React.ReactNode => {
    switch (status) {
      case CALL_USER_STATUS_ENUM.accepted:
        return (
          <Flex
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Icon
              icon={acceptedCallGlyph}
              size={18}
              wrapperStyles={{ mr: 'px' }}
            />
            {isShowTooltip && (
              <StatusToolTip>The call was accepted by a student</StatusToolTip>
            )}
          </Flex>
        )
      case CALL_USER_STATUS_ENUM.declined:
        return (
          <Flex
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Icon
              icon={declinedCallGlyph}
              size={18}
              wrapperStyles={{ mr: '8px' }}
            />
            {isShowTooltip && (
              <StatusToolTip>Call was declined by a student</StatusToolTip>
            )}
          </Flex>
        )
      case CALL_USER_STATUS_ENUM.pending:
        return (
          <Flex
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Icon
              icon={pendingCallGlyph}
              size={18}
              wrapperStyles={{ mr: '8px' }}
            />
            {isShowTooltip && (
              <StatusToolTip>Awaiting student confirmation</StatusToolTip>
            )}
          </Flex>
        )
      default:
        return null
    }
  }
  return <CardStatusContainer>{renderIcon()}</CardStatusContainer>
}

export default CallStatus

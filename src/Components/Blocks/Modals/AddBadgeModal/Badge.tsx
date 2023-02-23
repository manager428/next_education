import React from 'react'

import get from 'lodash/get'

import { Flex } from 'Components/UI'

import {
  BadgeButton,
  BadgeContainer,
  BadgeIcon,
  BadgeName,
  BadgeTip,
} from './styles'

type Props = {
  data: {
    type: string
    title: string
    iconOff: {
      src: string
    }
    iconOn: {
      src: string
    }
  }
  isSelected: boolean
  onSelect: (data: any) => void
}
const Badge: React.FC<Props> = ({ data, onSelect, isSelected }) => {
  const iconPath = get(data, 'iconOn')
  const name = get(data, 'title', '')
  const tips = get(data, 'tips', '')

  return (
    <BadgeContainer>
      <Flex flexShrink={0} height="120px" width="120px">
        <BadgeIcon src={iconPath.src} />
      </Flex>
      <Flex
        alignContent="flex-start"
        alignItems="flex-start"
        flexGrow={1}
        flexWrap="wrap"
        ml={27}
      >
        <BadgeName>{name}</BadgeName>
        <BadgeTip>
          <span>Tips:</span> {tips}
        </BadgeTip>
        <BadgeButton selected={isSelected} onClick={() => onSelect(data)}>
          {isSelected ? 'Selected' : 'Select'}
        </BadgeButton>
      </Flex>
    </BadgeContainer>
  )
}

export default Badge

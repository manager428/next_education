import React from 'react'

import { pick as pickProps } from '@styled-system/props'

import InnerHTML from 'dangerously-set-html-content'

import { Element, Flex, Tooltip } from 'Components/UI'

import {
  CardButton,
  CardContainer,
  InfoButtonIcon,
} from 'Components/Blocks/Entities/Teacher/Profile/Content/Components/Activity/styles'

import { theme } from 'Theme'

const ActivityCard = ({
  title,
  count,
  tooltip,
  onButtonClick,
  buttonText,
  buttonColor = theme.colors.green,
  ...rest
}: {
  title: string
  count: number
  tooltip: string
  onButtonClick?: () => void
  buttonText?: string
  buttonColor?: string
  [rest: string]: any
}) => (
  <CardContainer {...pickProps(rest)}>
    <Flex position="absolute" right="9px" top="9px">
      <Tooltip
        backgroundColor="white"
        tooltipElement={<InfoButtonIcon />}
        tooltipProps={{ place: 'bottom' }}
        tooltipTextElement={
          <Element fontSize="12px" fontWeight={600} lineHeight="12px">
            <InnerHTML html={tooltip} />
          </Element>
        }
      />
    </Flex>

    <Element fontSize="18px" lineHeight="24px" textAlign="center" width={1}>
      <InnerHTML html={title} />
    </Element>

    <Element
      fontSize="32px"
      fontWeight={600}
      lineHeight="32px"
      mt="14px"
      textAlign="center"
      width={1}
    >
      {count}
    </Element>

    {buttonText && (
      <Flex justifyContent="center" maxWidth="130px" mt="14px" width={1}>
        <CardButton color={buttonColor} onClick={onButtonClick}>
          {buttonText}
        </CardButton>
      </Flex>
    )}
  </CardContainer>
)

export default ActivityCard

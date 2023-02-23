import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import ReactTooltip from 'react-tooltip'

import { Element, Flex } from 'Components/UI'

import { TooltipContainer } from 'Components/Blocks/Entities/Profile/Content/DigitalPassport/styles'

import { theme } from 'Theme'

const TripTooltip = ({
  trip,
}: {
  trip?: {
    countryCode: string
    country: string
    visits: number
    lastVisit: string
  }
}) => {
  const renderTooltip = () => {
    if (!trip) return null

    return (
      <TooltipContainer>
        <Flex alignItems="center">
          <ReactCountryFlag
            countryCode={trip.countryCode}
            style={{
              width: '16px',
              height: '16px',
            }}
            svg
          />
          <Element fontSize="14px" fontWeight={600} ml="5px">
            {trip.country}
          </Element>
        </Flex>
        <Flex flexWrap="wrap" mt="7px" width={1}>
          <Element color={theme.colors.graySecondary} fontSize="14px" width={1}>
            Visited {trip.visits} times
          </Element>
          <Element
            color={theme.colors.graySecondary}
            fontSize="14px"
            mt="6px"
            width={1}
          >
            Last visit {trip.lastVisit}
          </Element>
        </Flex>
      </TooltipContainer>
    )
  }
  return (
    <ReactTooltip
      backgroundColor="transparent"
      className="opaque"
      effect="float"
      place="top"
      type="light"
    >
      {renderTooltip()}
    </ReactTooltip>
  )
}

export default TripTooltip

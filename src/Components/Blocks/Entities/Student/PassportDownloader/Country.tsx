import React from 'react'
import ReactCountryFlag from 'react-country-flag'

import { Element, Flex } from 'Components/UI'

import { theme } from 'Theme'

export const Country = ({
  small,
  countryName,
  countryCode,
  visits,
}: {
  small?: boolean
  countryName: string
  countryCode: string
  visits: number
}) => {
  const fontSize = small ? '10px' : '14px'
  const iconSize = small ? '12px' : '14px'
  const bottomMargin = small ? '6px' : '13px'

  return (
    <Flex alignContent="center" alignItems="center" mb={bottomMargin} width={1}>
      <ReactCountryFlag
        countryCode={countryCode}
        style={{
          width: iconSize,
          height: iconSize,
        }}
        svg
      />
      <Flex flexGrow={1} justifyContent="space-between" ml="10px">
        <Element
          color={theme.colors.primary}
          fontSize={fontSize}
          lineHeight={fontSize}
        >
          {countryName}
        </Element>
        <Element
          color={theme.colors.primary}
          fontSize={fontSize}
          fontWeight={600}
          lineHeight={fontSize}
        >
          x{visits}
        </Element>
      </Flex>
    </Flex>
  )
}

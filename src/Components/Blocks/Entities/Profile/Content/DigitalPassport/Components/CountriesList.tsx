import React, { useMemo } from 'react'
import ReactCountryFlag from 'react-country-flag'

import reduce from 'lodash/reduce'

import { Element, Flex } from 'Components/UI'

import { theme } from 'Theme'

import { ScrollableContainer } from '../styles'

const CountryItem = ({
  countryName,
  countryCode,
  visits,
}: {
  countryName: string
  countryCode: string
  visits: number
}) => (
  <Flex alignContent="center" alignItems="center" mb="15px" width={1}>
    <ReactCountryFlag
      countryCode={countryCode}
      style={{
        width: '18px',
        height: '18px',
      }}
      svg
    />
    <Flex flexGrow={1} justifyContent="space-between" ml="10px">
      <Element color={theme.colors.primary} fontSize="16px">
        {countryName}
      </Element>
      <Element color={theme.colors.primary} fontSize="16px" fontWeight={600}>
        x{visits}
      </Element>
    </Flex>
  </Flex>
)

const CountriesList = ({
  data,
}: {
  data: {
    countryCode: string
    country: string
    visits: number
  }[]
}) => {
  const columns = useMemo(
    () =>
      reduce(
        data,
        (acc: { left: any[]; right: any[] }, item: any, index: number) => {
          const country = (
            <CountryItem
              countryCode={item.countryCode}
              countryName={item.country}
              key={item.countryCode}
              visits={item.visits}
            />
          )
          if (index % 2) {
            acc.right.push(country)
          } else {
            acc.left.push(country)
          }

          return acc
        },
        { left: [], right: [] },
      ),
    [data],
  )

  return (
    <ScrollableContainer>
      <Flex width={1}>
        <Flex flexDirection="column" flexWrap="wrap" width="254px">
          {columns.left}
        </Flex>
        <Flex flexDirection="column" flexWrap="wrap" ml="26px" width="254px">
          {columns.right}
        </Flex>
      </Flex>
    </ScrollableContainer>
  )
}

export default CountriesList

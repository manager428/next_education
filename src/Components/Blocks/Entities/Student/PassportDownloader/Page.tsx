import React, { Ref, useCallback, useEffect, useRef } from 'react'

import dynamic from 'next/dynamic'

import chunk from 'lodash/chunk'
import flatten from 'lodash/flatten'
import map from 'lodash/map'

import { tourismBg, tourismMainBg } from 'Assets/images/digital-passport'

import { Element, Flex, Loader } from 'Components/UI'

import { useScopedI18n } from 'Services/I18n'

import { Country } from './Country'
import {
  Container,
  CountriesColumn,
  HeaderGradient,
  PageContainer,
  VisitedBlock,
  VisitedCounterBlock,
} from './styles'

const LazyMap = dynamic(
  () => import('Components/Blocks/Entities/Profile/VisitedMap'),
  {
    ssr: false,
    loading: Loader,
  },
)

const DEFAULT_COLUMN_LIMIT = 23
const DEFAULT_SECONDARY_COLUMN_LIMIT = 10

type Props = {
  fullName: string
  trips: {
    countryCode: string
    country: string
    visits: number
  }[]
  visitedCodes: string[]
  page: string
  countriesCount: number
  travelsCount: number
  isMain?: boolean
  onSetRef: (ref: Ref<HTMLElement>) => void
}

const Page = ({
  fullName,
  trips,
  isMain = true,
  page,
  countriesCount,
  travelsCount,
  visitedCodes,
  onSetRef,
}: Props) => {
  const s = useScopedI18n('digitalPassport')
  const ref = useRef(null)

  useEffect(() => {
    if (ref?.current) {
      onSetRef(ref)
    }
  }, [ref])

  const renderMainLayout = useCallback(
    () => (
      <Flex width={1}>
        <CountriesColumn maxWidth={220} mt="15px">
          {map(trips, trip => (
            <Country
              countryCode={trip.countryCode}
              countryName={trip.country}
              key={trip.countryCode}
              visits={trip.visits}
            />
          ))}
        </CountriesColumn>
        <Flex alignSelf="flex-start" height="280px" width="566px">
          <LazyMap
            coloredCountries={visitedCodes}
            height={280}
            isZoomable={false}
            scale={100}
            width={566}
          />
        </Flex>
      </Flex>
    ),
    [isMain],
  )

  const renderLayout = useCallback(() => {
    const chunks = chunk(trips, DEFAULT_COLUMN_LIMIT)
    const [firstColumnTrips, secondColumnTrips, ...restChunks] = chunks
    const [thirdColumnTrips, fourthColumnTrips] = chunk(
      flatten(restChunks),
      DEFAULT_SECONDARY_COLUMN_LIMIT,
    )

    return (
      <Flex width={1}>
        <Flex maxWidth="340px" width={1}>
          <CountriesColumn maxWidth={160} mt="15px">
            {map(firstColumnTrips, trip => (
              <Country
                countryCode={trip.countryCode}
                countryName={trip.country}
                key={trip.countryCode}
                small
                visits={trip.visits}
              />
            ))}
          </CountriesColumn>

          <CountriesColumn maxWidth={160} ml="20px" mt="15px">
            {map(secondColumnTrips, trip => (
              <Country
                countryCode={trip.countryCode}
                countryName={trip.country}
                key={trip.countryCode}
                small
                visits={trip.visits}
              />
            ))}
          </CountriesColumn>
        </Flex>

        <Flex alignSelf="flex-start" flexGrow={1} flexWrap="wrap" ml={34}>
          <LazyMap
            coloredCountries={visitedCodes}
            height={254}
            isZoomable={false}
            scale={100}
            width={480}
          />

          <Flex mt="20px" width={1}>
            <CountriesColumn maxWidth={160} mt="15px">
              {map(thirdColumnTrips, trip => (
                <Country
                  countryCode={trip.countryCode}
                  countryName={trip.country}
                  key={trip.countryCode}
                  small
                  visits={trip.visits}
                />
              ))}
            </CountriesColumn>

            <CountriesColumn maxWidth={160} ml="20px" mt="15px">
              {map(fourthColumnTrips, trip => (
                <Country
                  countryCode={trip.countryCode}
                  countryName={trip.country}
                  key={trip.countryCode}
                  small
                  visits={trip.visits}
                />
              ))}
            </CountriesColumn>
          </Flex>
        </Flex>
      </Flex>
    )
  }, [])

  return (
    <Container
      alignContent="flex-start"
      alignItems="flex-start"
      backgroundImage={isMain ? tourismMainBg.src : tourismBg.src}
      ref={ref}
    >
      <Flex flexWrap="wrap" width={1}>
        <Flex maxWidth="250px">
          <HeaderGradient />
          <Flex flexWrap="wrap" ml="14px">
            <Element fontSize="18px" fontWeight={600} width={1}>
              {s('digitalPassport')}
            </Element>
            <Element fontSize="14px" mt="7px">
              {fullName}
            </Element>
          </Flex>
        </Flex>

        <Flex mt="15px" width={1}>
          <VisitedBlock>
            {s('visitedCountries')}:{' '}
            <VisitedCounterBlock ml="5px">{countriesCount}</VisitedCounterBlock>
          </VisitedBlock>
          <VisitedBlock ml="20px">
            {s('numberOfTravels')}:{' '}
            <VisitedCounterBlock ml="5px">{travelsCount}</VisitedCounterBlock>
          </VisitedBlock>
        </Flex>
      </Flex>

      {isMain ? renderMainLayout() : renderLayout()}

      <PageContainer>{page}</PageContainer>
    </Container>
  )
}

export default Page

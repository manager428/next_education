import React, { useMemo, useState } from 'react'

import dynamic from 'next/dynamic'

import { Flex, Loader } from 'Components/UI'

import { useScopedI18n } from 'Services/I18n'

import { CountriesList, InfoBar, TripTooltip } from './Components'
import { Container, Content } from './styles'

import { ContentTitleText } from '../../styles'

const LazyMap = dynamic(
  () => import('Components/Blocks/Entities/Profile/VisitedMap'),
  {
    ssr: false,
    loading: Loader,
  },
)

const DigitalPassport = ({
  userId,
  countriesCount,
  travelsCount,
  trips,
  isShowDownload,
}: {
  userId: number
  countriesCount: number
  travelsCount: number
  trips: {
    countryCode: string
    country: string
    visits: number
    lastVisit: string
  }[]
  isShowDownload: boolean
}) => {
  const s = useScopedI18n('digitalPassport')
  const [content, setContent] = useState('')

  const visitedCodes = useMemo(() => trips.map(trip => trip.countryCode), [
    trips,
  ])

  const trip = trips.find(item => item.countryCode === content)

  return (
    <Container>
      <ContentTitleText width={1}>{s('digitalPassport')}</ContentTitleText>

      <Content flexWrap="wrap" mt="20px">
        <TripTooltip trip={trip} />

        <LazyMap
          coloredCountries={visitedCodes}
          setTooltipContent={setContent}
        />

        <InfoBar
          countriesCount={countriesCount}
          isShowDownload={isShowDownload}
          travelsCount={travelsCount}
          userId={userId}
        />

        {trips && trips.length > 0 && (
          <Flex width={1}>
            <CountriesList data={trips} />
          </Flex>
        )}
      </Content>
    </Container>
  )
}

export default DigitalPassport

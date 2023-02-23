import React, { useMemo } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import { Loader } from 'Components/UI'

import PassportDownloader from 'Components/Blocks/Entities/Student/PassportDownloader'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'
import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'

import { Background, Container } from './styles'

type Props = {
  initialData: {
    profileData: {
      data: IProfileResponse
    }
  }
}

const DigitalPassport = ({ initialData }: Props) => {
  const params = useRouterQueryParams()
  const userId = +get(params, 'id', 0)

  const { data, isLoading } = useSwrRequest<IProfileResponse>({
    url: PROFILE_API_PATHS.details(+userId),
    options: { fallbackData: initialData.profileData },
  })

  const memoizedTripsData = useMemo(() => data?.virtual_field_trips, [
    data?.virtual_field_trips,
  ])

  const countriesCount = memoizedTripsData?.count_countries ?? 0
  const travelsCount = memoizedTripsData?.count_visits ?? 0
  const trips = map(memoizedTripsData?.trips, trip => ({
    countryCode: trip.country_code,
    country: trip.country,
    visits: trip.visits,
  }))
  const visitedCodes = trips.map(trip => trip.countryCode)

  return (
    <Background>
      <Head description="Digital passport" title="Digital passport" />

      <Container pb={60} pt={0}>
        {isLoading ? (
          <Loader />
        ) : (
          <PassportDownloader
            countriesCount={countriesCount}
            fullName={data?.profile.full_name}
            travelsCount={travelsCount}
            trips={trips}
            visitedCodes={visitedCodes}
          />
        )}
      </Container>

      <Footer />
    </Background>
  )
}

export default DigitalPassport

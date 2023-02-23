import React, { useCallback, useMemo, useState } from 'react'

import { DateTime } from 'luxon'

import get from 'lodash/get'
import map from 'lodash/map'

import { Element, Flex } from 'Components/UI'

import {
  Badges,
  CountryInfo,
  Debates,
  DetailedDebates,
  DetailedLessons,
  DetailedVideoCalls,
  DigitalPassport,
  PetBlock,
  Posts,
  VideoCalls,
  VideoLessons,
  WeeklyProgress,
  WeeklyVisits,
} from 'Components/Blocks/Entities/Profile/Content'

import { useScopedI18n } from 'Services/I18n'

import { Props } from './types'

enum DETAILED_SCREENS {
  VIDEO = 'video',
  DEBATES = 'debates',
  LECTORIUM = 'lectorium',
}
const Content: React.FC<Props> = ({ data }) => {
  const s = useScopedI18n('parent')

  const [detailedScreen, setDetailedScreen] = useState<DETAILED_SCREENS | null>(
    null,
  )

  const profileId = get(data, ['profile', 'id'], 0)

  const monster = get(data, 'monster', {})
  const progress = get(data, 'activities', {})
  const dailyVisits = get(data, ['profile', 'lastDailyVisits'], [])
  const videoCalls = get(data, 'calls', [])
  const badges = get(data, 'badges', {})
  const userPosts = get(data, 'userPosts', {})
  const userDebates = get(userPosts, 'debates.posts', [])
  const userDebatesCount = get(userPosts, 'debates.posts_count', 0)
  const userLectoriums = get(userPosts, 'lectoriums.posts', [])
  const userLectoriumsCount = get(userPosts, 'lectoriums.posts_count', 0)
  const country = get(data, 'profile.country', '')
  const trips = data?.virtual_field_trips?.trips

  const convertedTrips = useMemo(
    () =>
      map(trips, trip => ({
        countryCode: trip.country_code,
        country: trip.country,
        visits: trip.visits,
        lastVisit: DateTime.fromISO(trip.last_visit).toLocaleString(
          DateTime.DATE_SHORT,
        ),
      })),
    [trips],
  )

  const isUserFromClass = get(
    data,
    ['profile', 'friends_data', 'isUserFromClass'],
    false,
  )

  const handleSetDetailedScreen = useCallback(screen => {
    window.scrollTo(0, 0)
    setDetailedScreen(screen)
  }, [])

  return (
    <Flex
      alignContent="flex-start"
      alignItems="flex-start"
      flexWrap="wrap"
      maxWidth={630}
      width={1}
    >
      {detailedScreen ? (
        <>
          {detailedScreen === DETAILED_SCREENS.VIDEO && (
            <DetailedVideoCalls
              title={s('videoCallsWithTeacher')}
              userId={profileId}
              onBack={() => setDetailedScreen(null)}
            />
          )}

          {detailedScreen === DETAILED_SCREENS.DEBATES && (
            <DetailedDebates
              userId={profileId}
              onBack={() => setDetailedScreen(null)}
            />
          )}

          {detailedScreen === DETAILED_SCREENS.LECTORIUM && (
            <DetailedLessons
              userId={profileId}
              onBack={() => setDetailedScreen(null)}
            />
          )}
        </>
      ) : (
        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          width={1}
        >
          <PetBlock character={monster} />

          <WeeklyProgress progress={Object.values(progress)} />

          {isUserFromClass && <WeeklyVisits progress={dailyVisits} />}

          <VideoCalls
            calls={videoCalls}
            title={s('videoCallsWithTeacher')}
            onViewAll={() => handleSetDetailedScreen(DETAILED_SCREENS.VIDEO)}
          />

          <Element mt="40px" width={1}>
            <Badges badges={badges} />
          </Element>

          <Element mb="40px" width={1}>
            <DigitalPassport
              countriesCount={data?.virtual_field_trips?.count_countries ?? 0}
              isShowDownload
              travelsCount={data?.virtual_field_trips?.count_visits ?? 0}
              trips={convertedTrips}
              userId={profileId}
            />
          </Element>

          <Posts posts={userPosts} />

          <Debates
            debates={userDebates}
            totalCount={userDebatesCount}
            onViewAll={() => handleSetDetailedScreen(DETAILED_SCREENS.DEBATES)}
          />

          {userLectoriums.length > 0 && (
            <VideoLessons
              posts={userLectoriums}
              totalCount={userLectoriumsCount}
              onViewAll={() =>
                handleSetDetailedScreen(DETAILED_SCREENS.LECTORIUM)
              }
            />
          )}

          {country && <CountryInfo country={country} />}
        </Flex>
      )}
    </Flex>
  )
}

export default Content

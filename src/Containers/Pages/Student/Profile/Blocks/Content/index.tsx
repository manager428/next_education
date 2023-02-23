import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { DateTime } from 'luxon'

import get from 'lodash/get'
import map from 'lodash/map'
import some from 'lodash/some'

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

import useMe from 'Hooks/useMe'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import _ from 'Services/I18n'

import { Props } from './types'

enum DETAILED_SCREENS {
  VIDEO = 'video',
  DEBATES = 'debates',
  LECTORIUM = 'lectorium',
}
const Content: React.FC<Props> = ({ data }) => {
  const me = useMe()
  const params = useRouterQueryParams()

  const [detailedScreen, setDetailedScreen] = useState<DETAILED_SCREENS | null>(
    null,
  )

  useEffect(() => {
    if (params.tab === 'call-calendar')
      setDetailedScreen(DETAILED_SCREENS.VIDEO)
  }, [params])

  const profileId = get(data, ['profile', 'id'], 0)
  const monster = get(data, 'monster', {})
  const progress = get(data, 'activities', {})
  const dailyVisits = get(data, ['profile', 'lastDailyVisits'], [])
  const videoCalls = get(data, 'calls', [])
  const badges = get(data, 'badges', {})
  const country = get(data, 'profile.country', '')
  const trips = data?.virtual_field_trips?.trips ?? []

  const isOwnProfile = profileId === me?.id
  const userRelations = data?.profile.user_relations

  const isShowDownloadPassport = some(
    [
      isOwnProfile,
      userRelations.is_school_admin_user,
      userRelations.is_teacher_student,
    ],
    relation => !!relation,
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
              title={_('profile.content.videoCalls.title')}
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

          <Element mb="40px" width={1}>
            <VideoCalls
              calls={videoCalls}
              title={_('profile.content.videoCalls.title')}
              onViewAll={() => handleSetDetailedScreen(DETAILED_SCREENS.VIDEO)}
            />
          </Element>

          <Badges badges={badges} />

          <Element mb="40px" width={1}>
            <DigitalPassport
              countriesCount={data?.virtual_field_trips?.count_countries ?? 0}
              isShowDownload={isShowDownloadPassport}
              travelsCount={data?.virtual_field_trips?.count_visits ?? 0}
              trips={convertedTrips}
              userId={profileId}
            />
          </Element>

          <Posts posts={data?.userPosts ?? {}} />

          <Debates
            debates={data?.userPosts?.debates.rows ?? []}
            totalCount={data?.userPosts?.debates.rows_count ?? 0}
            onViewAll={() => handleSetDetailedScreen(DETAILED_SCREENS.DEBATES)}
          />

          {data?.userPosts?.lectoriums?.rows?.length > 0 && (
            <Flex mt="40px" width={1}>
              <VideoLessons
                posts={data.userPosts.lectoriums.rows}
                totalCount={data.userPosts.lectoriums.rows_count}
                onViewAll={() =>
                  handleSetDetailedScreen(DETAILED_SCREENS.LECTORIUM)
                }
              />
            </Flex>
          )}

          {country && <CountryInfo country={country} />}
        </Flex>
      )}
    </Flex>
  )
}

export default Content

import React, { useCallback, useState } from 'react'

import { Flex } from 'Components/UI'

import {
  CountryInfo,
  Debates,
  DetailedDebates,
  DetailedVideoCalls,
  VideoCalls,
  VideoLessons,
} from 'Components/Blocks/Entities/Profile/Content'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'

import { Activity, DetailedLessons } from './Components'

enum DETAILED_SCREENS {
  VIDEO = 'video',
  DEBATES = 'debates',
  LECTORIUM = 'lectorium',
}

export type Props = {
  data: IProfileResponse
  isPublic: boolean
}
const Content = ({ data, isPublic }: Props) => {
  const me = useMe()

  const { isSchoolAdmin } = useRole()
  const schoolId = me?.school?.id ?? 0

  const [detailedScreen, setDetailedScreen] = useState<DETAILED_SCREENS | null>(
    null,
  )

  const handleSetDetailedScreen = useCallback(screen => {
    window.scrollTo(0, 0)
    setDetailedScreen(screen)
  }, [])

  const handleSetDetailedDebates = useCallback(() => {
    handleSetDetailedScreen(DETAILED_SCREENS.DEBATES)
  }, [])

  const handleSetDetailedLectorium = useCallback(() => {
    handleSetDetailedScreen(DETAILED_SCREENS.LECTORIUM)
  }, [])

  const handleSetDetailedCalls = useCallback(() => {
    handleSetDetailedScreen(DETAILED_SCREENS.VIDEO)
  }, [])

  const isTeacherAdmin = isSchoolAdmin && schoolId === data?.school?.id
  const isShowActivity = isTeacherAdmin && data?.activity_statistic

  const country = data.profile?.country
  const videoCalls = data?.calls ?? []

  return (
    <Flex
      alignContent="flex-start"
      alignItems="flex-start"
      flexGrow={1}
      flexWrap="wrap"
      maxWidth="630px"
    >
      {detailedScreen ? (
        <>
          {detailedScreen === DETAILED_SCREENS.VIDEO && (
            <DetailedVideoCalls
              title="Video Calls"
              userId={data?.profile.id}
              onBack={() => setDetailedScreen(null)}
            />
          )}

          {detailedScreen === DETAILED_SCREENS.DEBATES && (
            <DetailedDebates
              userId={data?.profile.id}
              onBack={() => setDetailedScreen(null)}
            />
          )}

          {detailedScreen === DETAILED_SCREENS.LECTORIUM && (
            <DetailedLessons
              isPublicView={!isTeacherAdmin}
              userId={data?.profile.id}
              onBack={() => setDetailedScreen(null)}
            />
          )}
        </>
      ) : (
        <Flex flexWrap="wrap" width={1}>
          {isShowActivity && (
            <Flex flexWrap="wrap" mb="40px" width={1}>
              <Activity
                activity={data.activity_statistic}
                onViewCalls={handleSetDetailedCalls}
                onViewDebates={handleSetDetailedDebates}
                onViewLectorium={handleSetDetailedLectorium}
              />
            </Flex>
          )}

          <Flex mb="40px" width={1}>
            <VideoCalls
              calls={isPublic ? [] : videoCalls}
              title="Video Calls"
              onViewAll={() => handleSetDetailedScreen(DETAILED_SCREENS.VIDEO)}
            />
          </Flex>

          <Flex mb="40px" width={1}>
            <VideoLessons
              posts={data?.userPosts.lectoriums?.rows ?? []}
              totalCount={data?.userPosts.lectoriums?.rows_count ?? 0}
              onViewAll={() =>
                handleSetDetailedScreen(DETAILED_SCREENS.LECTORIUM)
              }
            />
          </Flex>

          <Flex width={1}>
            <Debates
              debates={data?.userPosts.debates?.rows ?? []}
              totalCount={data?.userPosts.debates?.rows_count ?? 0}
              onViewAll={() =>
                handleSetDetailedScreen(DETAILED_SCREENS.DEBATES)
              }
            />
          </Flex>

          {country && <CountryInfo country={country} />}
        </Flex>
      )}
    </Flex>
  )
}

export default Content

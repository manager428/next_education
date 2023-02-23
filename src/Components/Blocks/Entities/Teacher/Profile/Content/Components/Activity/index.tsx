import React, { useMemo, useState } from 'react'

import map from 'lodash/map'

import { Element, Flex, Loader } from 'Components/UI'

import ActivityCard from 'Components/Blocks/Entities/Teacher/Profile/Content/Components/Activity/ActivityCard'
import { Button } from 'Components/Blocks/Entities/Teacher/Profile/Content/Components/Activity/styles'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'

import { theme } from 'Theme'

const PERIOD_BUTTONS: {
  label: string
  value: keyof IProfileResponse['activity_statistic']
}[] = [
  {
    value: 'all',
    label: 'All Time',
  },
  {
    value: 'month',
    label: 'This Month',
  },
  {
    value: 'week',
    label: 'This week',
  },
]

const Activity = ({
  activity,
  onViewCalls,
  onViewDebates,
  onViewLectorium,
}: {
  activity: IProfileResponse['activity_statistic']
  onViewCalls: () => void
  onViewDebates: () => void
  onViewLectorium: () => void
}) => {
  const [period, setPeriod] = useState<
    keyof IProfileResponse['activity_statistic']
  >('all')

  const activityStatistic = useMemo(() => activity[period], [activity, period])

  const renderActivityFilters = () => (
    <Flex flexWrap="wrap" width={1}>
      <Element fontSize="24px" fontWeight={600} lineHeight="24px" width={1}>
        Activity Statistics
      </Element>

      <Flex alignItems="center" mt="20px" width={1}>
        <Element fontSize="18px" lineHeight="18px" mr="20px">
          Select period:
        </Element>

        <Flex alignItems="center" flexGrow={1}>
          {map(PERIOD_BUTTONS, item => (
            <Button
              active={period === item.value}
              key={item.value}
              maxWidth="92px"
              mr="20px"
              onClick={() => setPeriod(item.value)}
            >
              {item.label}
            </Button>
          ))}
        </Flex>

        <Flex>
          <Button maxWidth="110px" onClick={onViewCalls}>
            View All Calls
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )

  const renderActivityCards = () => (
    <Flex flexWrap="wrap" mt="20px" width={1}>
      <Flex justifyContent="space-between" width={1}>
        <ActivityCard
          count={activityStatistic.field_trips}
          maxWidth="144px"
          title="Field<br/>Trips"
          tooltip="Exciting live-streamed adventures"
          width={1}
        />

        <ActivityCard
          count={activityStatistic.group_calls}
          maxWidth="144px"
          title="Open<br/>Lessons"
          tooltip="Lessons and other activities<br/>with classrooms from different schools"
          width={1}
        />

        <ActivityCard
          count={activityStatistic.class_calls}
          maxWidth="144px"
          title="Group<br/>Lessons "
          tooltip="Lessons with a group of students "
          width={1}
        />

        <ActivityCard
          count={activityStatistic.individual_calls}
          maxWidth="144px"
          title="Individual<br/>Lessons"
          tooltip="One-on-One lessons"
          width={1}
        />
      </Flex>

      <Flex justifyContent="space-between" mt="20px" width={1}>
        <ActivityCard
          buttonColor={theme.colors.orange}
          buttonText="View All Lessons"
          count={activityStatistic.lectorium}
          maxWidth="306px"
          title="Uploaded Video Lessons"
          tooltip="Lessons and tasks created for self-paced learning"
          width={1}
          onButtonClick={onViewLectorium}
        />

        <ActivityCard
          buttonColor={theme.colors.blueLight}
          buttonText="View all"
          count={activityStatistic.debates}
          maxWidth="306px"
          title="View All Debates"
          tooltip='Discussion activities in the "Debates" section'
          width={1}
          onButtonClick={onViewDebates}
        />
      </Flex>
    </Flex>
  )

  if (!activity) return <Loader />

  return (
    <Flex flexWrap="wrap" width={1}>
      {renderActivityFilters()}
      {renderActivityCards()}
    </Flex>
  )
}

export default Activity

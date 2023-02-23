import React, { useState } from 'react'
import PropTypes from 'prop-types'

import dynamic from 'next/dynamic'

import reduce from 'lodash/reduce'

import {
  Title,
  Wrapper,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/VideoStatistic/styles'
import LectoriumVideoStudentsModal from 'Components/Blocks/Entities/Lectorium/Modals/LectoriumVideoStudentsModal'

const WeekChart = dynamic(
  () =>
    import(
      'Components/Blocks/Entities/Lectorium/LectoriumExplore/VideoStatistic/WeekChart'
    ),
  { ssr: false },
)
const Pie = dynamic(
  () =>
    import(
      'Components/Blocks/Entities/Lectorium/LectoriumExplore/VideoStatistic/Pie'
    ),
  { ssr: false },
)

const VideoStatistic = ({
  title,
  id,
  totalInProgress,
  totalViews,
  totalCompleted,
  studentsCompleted,
  studentsInProgress,
  studentsNotStarted,
  weeklyData,
}) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleToggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  const convertedWeekly = reduce(
    weeklyData,
    (acc, value, index) => {
      acc.data.push({
        name: index,
        views: value,
      })
      acc.totalViews = value + acc.totalViews

      return acc
    },
    { data: [], totalViews: 0 },
  )

  return (
    <>
      {isModalOpen && (
        <LectoriumVideoStudentsModal
          id={id}
          isOpen={isModalOpen}
          title={title}
          onClose={handleToggleModal}
        />
      )}

      <Wrapper>
        <Title>Video Statistic</Title>
        <Pie
          data={[
            { title: 'Finished', value: totalCompleted, color: '#49CEB1' },
            { title: 'On Study', value: totalInProgress, color: '#FFA08C' },
          ]}
          metrics={{
            totalCompleted,
            totalInProgress,
            totalViews,
          }}
          mr="46px"
          title="Total Views"
          type="total views"
        />
        <Pie
          data={[
            { title: 'Finished', value: studentsCompleted, color: '#49CEB1' },
            {
              title: 'Not Started',
              value: studentsNotStarted,
              color: '#D3DAE8',
            },
            { title: 'On Study', value: studentsInProgress, color: '#FFA08C' },
          ]}
          metrics={{
            studentsInProgress,
            studentsNotStarted,
            studentsCompleted,
            totalViews: studentsCompleted + studentsInProgress,
          }}
          title="Your Students Views"
          type="student views"
          onViewStudentsClick={handleToggleModal}
        />
        <WeekChart
          data={convertedWeekly.data}
          title={`+${convertedWeekly.totalViews} Views This Week`}
        />
      </Wrapper>
    </>
  )
}

VideoStatistic.propTypes = {
  id: PropTypes.number.isRequired,
  studentsCompleted: PropTypes.number.isRequired,
  studentsInProgress: PropTypes.number.isRequired,
  studentsNotStarted: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  totalCompleted: PropTypes.number.isRequired,
  totalInProgress: PropTypes.number.isRequired,
  totalViews: PropTypes.number.isRequired,
  weeklyData: PropTypes.object.isRequired,
}

export default VideoStatistic

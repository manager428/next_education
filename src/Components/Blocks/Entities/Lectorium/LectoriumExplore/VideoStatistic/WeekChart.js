import React from 'react'
import PropTypes from 'prop-types'

import { Line, LineChart, Tooltip, XAxis } from 'recharts'

import {
  ChartTitle,
  ChartWrapper,
  ContactButton,
  WeeklyChartWrapper,
  WeeklyDescription,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/VideoStatistic/styles'

const WeekChart = ({ title, data }) => {
  const handleShowIntercom = e => {
    e.preventDefault()

    if (window.Intercom) {
      window.Intercom('show')
    }
  }

  return (
    <ChartWrapper transparent>
      <WeeklyChartWrapper>
        <ChartTitle mb={14}>{title}</ChartTitle>
        <LineChart
          data={data}
          height={221}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
          width={255}
        >
          <XAxis
            dataKey="name"
            interval={0}
            minTickGap={-1}
            padding={{ left: 5, right: 5 }}
            tick={{ fontSize: '12px', wordWrap: 'break-word' }}
          />
          <Tooltip />
          <Line
            activeDot={{ r: 8 }}
            dataKey="views"
            stroke="#49CEB1"
            type="monotone"
          />
        </LineChart>
      </WeeklyChartWrapper>

      <WeeklyDescription mt={20}>
        If you want to change something in <br /> your video or delet it, write
        to us
      </WeeklyDescription>

      <ContactButton onClick={handleShowIntercom}>
        Contact Support
      </ContactButton>
    </ChartWrapper>
  )
}

WeekChart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default WeekChart

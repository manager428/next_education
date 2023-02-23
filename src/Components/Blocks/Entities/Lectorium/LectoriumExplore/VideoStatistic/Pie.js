import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import PropTypes from 'prop-types'

import get from 'lodash/get'

import { Element, Flex } from 'Components/UI'

import {
  ChartContainer,
  ChartTitle,
  ChartWrapper,
  Label,
  StatDot,
  StatItemWrap,
  StatsContainer,
  StudentListButton,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/VideoStatistic/styles'

const Pie = ({ title, type, mr, data, metrics, onViewStudentsClick }) => {
  const renderStatItems = () => {
    switch (type) {
      case 'total views': {
        const totalInProgress = get(metrics, 'totalInProgress', 0)
        const totalCompleted = get(metrics, 'totalCompleted', 0)

        return (
          <>
            <StatItemWrap>
              <Flex alignItems="center">
                <StatDot color="#FFA08C" mr="10px" />
                On Study
              </Flex>
              <Flex>{totalInProgress}</Flex>
            </StatItemWrap>
            <StatItemWrap>
              <Flex alignItems="center">
                <StatDot color="#49CEB1" mr="10px" />
                Finished
              </Flex>
              <Flex>{totalCompleted}</Flex>
            </StatItemWrap>
          </>
        )
      }

      case 'student views': {
        const onStudy = get(metrics, 'studentsInProgress', 0)
        const notStarted = get(metrics, 'studentsNotStarted', 0)
        const completed = get(metrics, 'studentsCompleted', 0)

        return (
          <>
            <StatItemWrap>
              <Flex alignItems="center">
                <StatDot color="#FFA08C" mr="10px" />
                On Study
              </Flex>
              <Flex>{onStudy}</Flex>
            </StatItemWrap>
            <StatItemWrap>
              <Flex alignItems="center">
                <StatDot color="#49CEB1" mr="10px" />
                Finished
              </Flex>
              <Flex>{completed}</Flex>
            </StatItemWrap>
            <StatItemWrap>
              <Flex alignItems="center">
                <StatDot color="#D3DAE8" mr="10px" />
                Not Started
              </Flex>
              <Flex>{notStarted}</Flex>
            </StatItemWrap>
          </>
        )
      }
      default:
        return null
    }
  }

  const totalViews = get(metrics, 'totalViews', 0)

  return (
    <ChartWrapper mr={mr}>
      <ChartTitle>{title}</ChartTitle>
      <ChartContainer>
        <PieChart
          animate
          center={[100, 100]}
          data={data}
          labelPosition={0}
          labelStyle={{
            fontSize: '25px',
            fontFamily: 'sans-serif',
            fill: '#E38627',
          }}
          lineWidth={30}
          radius={90}
          style={{
            fontFamily:
              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: '8px',
          }}
          viewBoxSize={[200, 200]}
        />
        <Label>
          {totalViews}
          <Element as="span" width={1}>
            Views
          </Element>
        </Label>
      </ChartContainer>
      <StatsContainer>{renderStatItems()}</StatsContainer>
      {type === 'student views' && (
        <Flex justifyContent="center" width={1}>
          <StudentListButton onClick={onViewStudentsClick}>
            View Students List
          </StudentListButton>
        </Flex>
      )}
    </ChartWrapper>
  )
}

Pie.defaultProps = {
  mr: '0px',
  onViewStudentsClick: () => null,
}

Pie.propTypes = {
  data: PropTypes.array.isRequired,
  metrics: PropTypes.object.isRequired,
  mr: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onViewStudentsClick: PropTypes.func,
}

export default Pie

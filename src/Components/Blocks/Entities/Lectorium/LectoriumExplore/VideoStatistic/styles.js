import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Wrapper = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
`

export const Title = styled(Flex)`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  width: 100%;
`

export const ChartWrapper = styled(Flex)`
  background: #ffffff;
  box-shadow: 0px 4px 26px rgba(233, 241, 252, 0.5);
  border-radius: 20px;
  align-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: 20px;
  max-width: ${props => props.maxWidth || '296px'};

  ${props =>
    props.transparent &&
    css`
      box-shadow: none;
      padding: 0;
    `}
`

export const ChartTitle = styled(Flex)`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: black;
  text-align: center;
  width: 100%;
  justify-content: center;
`

export const ChartContainer = styled(Flex)`
  border-radius: 50%;
  border: 1px solid #baece1;
  width: 200px;
  height: 200px;
  margin: 14px auto 20px auto;

  position: relative;
`

export const Label = styled(Flex)`
  position: absolute;
  font-weight: 600;
  width: 130px;
  font-size: 32px;
  line-height: 40px;
  flex-wrap: wrap;
  justify-content: center;
  top: 35%;
  left: 17%;

  span {
    width: 100%;
    font-size: 18px;
    line-height: 22px;
    color: #bdbdbd;
    text-align: center;
  }
`

export const StatsContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const StatItemWrap = styled(Flex)`
  width: 100%;
  margin-bottom: 14px;
  justify-content: space-between;
  color: #828282;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
`

export const StatDot = styled(Flex)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${props => props.color || 'white'};
`

export const StudentListButton = styled(Flex).attrs({
  as: 'button',
})`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 100px;
  width: 160px;
  height: 28px;
  color: #49ceb1;
  font-size: 14px;
  line-height: 18px;
  justify-content: center;
  box-shadow: none;
  background-color: transparent;
  outline: 0px;
  align-items: center;
  cursor: pointer;
`

export const WeeklyChartWrapper = styled(Flex)`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 26px rgba(233, 241, 252, 0.5);
  border-radius: 20px;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 20px 10px 20px;
  max-width: ${props => props.maxWidth || '296px'};
`

export const WeeklyDescription = styled(Flex)`
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`

export const ContactButton = styled(Flex).attrs({
  as: 'button',
})`
  border: 1px solid #6e46ff;
  box-sizing: border-box;
  border-radius: 100px;
  width: 180px;
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #6e46ff;
  justify-content: center;
  align-content: center;
  box-shadow: none;
  align-items: center;
  background-color: white;
  margin: 20px auto 0 auto;
  cursor: pointer;
  outline: 0px;
`

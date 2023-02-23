import styled, { css } from 'styled-components'

import { calendarGlyph } from 'Assets/svg/calls'

import { Flex, Icon } from 'Components/UI'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`

export const Container = styled(Flex)`
  width: 980px;
  margin: 0 auto;
  font-family: 'Nunito Sans';
  min-height: 700px;
`

export const Content = styled(Flex)`
  width: 480px;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  position: relative;
  min-height: 500px;
`

export const NoCalls = styled(Flex)`
  width: 100%;
  margin-top: 34px;
`

export const NoCallsText = styled(Flex)`
  width: 100%;
  line-height: 24px;
  flex-wrap: wrap;
  margin-left: 30px;

  p {
    width: 100%;
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 24px;
    margin-top: 0px;
  }
  font-weight: 400;
  font-size: 16px;

  color: #333333;
`

export const CalendarIcon = styled(Icon).attrs({
  icon: calendarGlyph,
  size: 74,
})``

export const CallFilter = styled.span<{
  isActive: boolean
}>`
  cursor: pointer;
  display: flex;
  box-shadow: none;
  outline: 0;
  border: 0;
  font-weight: 600;
  font-size: 14px;
  color: #828282;
  margin-right: 16px;
  background-color: transparent;
  padding: 0;
  font-family: 'Nunito Sans', 'sans-serif';

  &:last-of-type {
    margin-right: 0;
  }

  ${props =>
    props.isActive &&
    css`
      color: #49ceb1;
    `}
`

export const RelativeContainer = styled(Flex)`
  position: relative;
`

export const LoadMore = styled.button`
  cursor: pointer;
  width: 220px;
  height: 40px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #fff;
  display: block;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: none;
  margin: 0 auto;
  background-color: #6e46ff;
  &:hover {
    opacity: 0.8;
  }
`

import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { calendarGlyph } from 'Assets/svg/calls'
import { filterActiveGlyph, filterGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Header = styled(Flex)`
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CalendarInfo = styled(Flex)`
  align-items: center;
  position: relative;
`

export const SelectedCalendarDate = styled(Flex)`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`

export const FilterContainer = styled(Flex)`
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  .react-select__control {
    background-color: transparent !important;
    min-height: 32px;
    max-height: 32px;
  }
  .react-select__value-container {
    min-height: 32px;
    max-height: 32px;
    padding: 0 12px;
  }

  .react-select__value-container {
    height: 32px;
    input {
      height: 32px;
    }
  }
  .react-select__value-container > div:last-child {
    height: 32px;
  }
  .react-select__input {
    min-height: 32px;
  }

  .react-select__single-value {
    color: #828282;
  }

  .react-select__indicators {
    height: 32px;
  }
  .react-select__menu {
    border: 1px solid ${themeGet('colors.green')};
    box-sizing: border-box;
    border-radius: 5px;
  }
`

export const TabsContainer = styled(Flex)`
  flex-grow: 1;
`

export const Tab = styled.span<{
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
      color: #6e46ff;
    `}
`

export const Content = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  position: relative;
  min-height: 500px;
`

export const CallListContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
`
export const CallListDate = styled(Flex)`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #071d40;
`

export const FilterButton = styled(Icon).attrs<any>(({ active }) => ({
  icon: active ? filterActiveGlyph : filterGlyph,
  size: 40,
}))`
  cursor: pointer;
`

export const ClearFilterButton = styled(Flex).attrs({ as: 'button' })`
  background: #d3dae8;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  width: 126px;
  height: 40px;
  justify-content: center;
  align-content: center;
  padding: 0;
  cursor: pointer;
`

export const TagsFilterContainer = styled(Flex)`
  width: 100%;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 10px;
  padding: 14px;
  flex-wrap: wrap;
`

export const Tag = styled.span<{
  selected: boolean
  highlighted: boolean
}>`
  color: #828282;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;

  margin-right: 14px;
  margin-bottom: 10px;

  ${props =>
    props.highlighted &&
    css`
      color: #ffa08c;
    `}

  ${props =>
    props.selected &&
    css`
      color: #6e46ff;
    `}
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

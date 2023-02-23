import styled, { css } from 'styled-components'
import { margin, MarginProps } from 'styled-system'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  background-color: transparent;
  width: 328px;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  flex-wrap: wrap;
  z-index: 99;
`

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333333;
`

export const Dates = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #333333;
  span {
    color: #49ceb1;
  }
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

export const Tag = styled(Flex).attrs({
  as: 'button',
})<any>`
  cursor: pointer;
  font-size: 12px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 20px;
  color: #bdbdbd;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: none;
  background-color: transparent;

  ${props =>
    props.selected &&
    css`
      border: 1px solid #49ceb1;
      color: #49ceb1;
    `}
`

export const SidebarTitle = styled.h3<MarginProps>`
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  margin: 0;
  ${margin};

  span {
    color: #49ceb1;
  }
`

export const ResetButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  color: #828282;
  box-shadow: none;
  background-color: unset;
  border: 0px;
  font-family: 'Nunito Sans';
  cursor: pointer;
`

export const TagCounter = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #49ceb1;
`

export const SidebarDescription = styled(Flex)`
  color: #49ceb1;
  font-size: 16px;
`

export const LabelText = styled.span`
  font-size: 14px;
  color: #333333;
`

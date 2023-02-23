import styled, { css } from 'styled-components'
import styledMap from 'styled-map'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Tooltip = styled.span`
  text-align: right;
  font-weight: 400;
  color: ${themeGet('colors.red')};
  border-radius: 6px;
  transition: opacity 1s;
  margin-top: 6px;
  font-size: 12px;

  position: ${styledMap`
        left: inherit;
        default: relative;
      `};
  width: ${styledMap`
        left: 100%;
        default: inherit;
      `};
`

export const Container = styled(Flex).attrs(props => ({
  width: 1,
  mb: props.left ? 2 : props.mb,
}))`
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  font-size: 14px;
  color: #333333;
  width: 100%;

  padding: 1px;
  border-radius: 8px;

  ${props =>
    props.joined &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `};

  label {
    margin-bottom: 8px;
  }
`

export const Label = styled.label`
  color: #828282;
  font-size: 16px;
  line-height: 20px;
`

export const TipWrapper = styled.div`
  border: none;
  position: absolute;
  right: -24px;
  bottom: 10px;
  height: 16px;
  width: 16px;
`

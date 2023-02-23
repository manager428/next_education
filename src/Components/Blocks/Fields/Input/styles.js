import styled, { css } from 'styled-components'
import styledMap from 'styled-map'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Tooltip = styled.span`
  color: ${themeGet('colors.red')};
  text-align: right;
  border-radius: 6px;
  transition: opacity 1s;
  font-size: 12px;
  margin-top: 6px;

  width: ${styledMap`
        left: 100%;
        default: inherit;
      `};

  right: 0;

  ${props =>
    props.centered &&
    css`
      right: 50%;
      transform: translateX(50%);
    `};
`

export const Container = styled(Flex).attrs({
  width: 1,
})`
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

  &.error {
    input {
      border: 2px solid ${themeGet('colors.red')};
    }
  }
`

export const Label = styled.label`
  color: ${themeGet('colors.green')};
  font-size: 16px;
  line-height: 16px;
`

export const TipWrapper = styled.div`
  border: none;
  position: absolute;
  right: -24px;
  bottom: 10px;
  height: 16px;
  width: 16px;
`

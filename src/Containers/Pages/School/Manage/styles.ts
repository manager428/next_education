import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Element } from 'Components/UI'

const activeCss = css`
  color: #49ceb1;

  &:after {
    position: absolute;
    content: '';
    margin-top: 6px;
    width: 100%;
    height: 2px;
    left: 0px;
    top: 100%;
    background-color: ${themeGet('colors.green')};
  }
`

export const Tab = styled(Element).attrs({
  as: 'a',
})<{ active?: boolean }>`
  font-size: 18px;
  line-height: 24px;
  color: ${themeGet('colors.graySecondary')};
  cursor: pointer;
  margin-right: 24px;
  position: relative;

  &:last-of-type {
    margin-right: 0px;
  }

  :hover {
    ${activeCss}
  }

  ${props => props.active && activeCss};
`

import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { informGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

export const Button = styled(Element)<{ active?: boolean }>`
  width: 100%;
  font-size: 14px;
  padding: 5px;
  text-align: center;
  line-height: 14px;
  color: ${themeGet('colors.green')};
  border: 1px solid ${themeGet('colors.green')};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background-color: ${themeGet('colors.green')};
      color: white;
    `}
`

export const CardContainer = styled(Flex)`
  background: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
  position: relative;
`

export const CardButton = styled('button')<{
  color: string
}>`
  width: 100%;
  font-size: 14px;
  padding: 5px;
  text-align: center;
  line-height: 14px;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
`

export const InfoButtonIcon = styled(Icon).attrs({
  icon: informGlyph,
  size: 20,
})`
  cursor: pointer;
  fill: #bdbdbd;
`

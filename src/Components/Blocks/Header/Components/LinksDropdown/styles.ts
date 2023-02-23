import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { arrowDownGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  padding: 0px 25px 0px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  color: ${themeGet('colors.graySecondary')};
  font-size: 18px;
  line-height: 14px;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 350px) {
    font-size: 14px;
  }
`

export const Links = styled.ul`
  width: 200px;
  border: 1px solid #d3dae8;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  position: absolute;
  left: -12px;
  top: 25px;
  z-index: 20;
  margin: 0px;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 350px) {
    width: 100px;
  }
`

export const LinkItem = styled.a<{ highlighted?: boolean }>`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  padding: 0px;
  justify-content: center;
  color: ${themeGet('colors.graySecondary')};
  margin-bottom: 14px;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 350px) {
    font-size: 14px;
  }
  &:last-of-type {
    margin-bottom: 0px;
  }

  &:hover {
    color: ${themeGet('colors.green')};
  }

  ${props =>
    props.highlighted &&
    css`
      color: ${themeGet('colors.green')};
    `}
`

export const ArrowWrap = styled(Flex)`
  position: absolute;
  top: 0px;
  right: 0px;

  @media (max-width: 350px) {
    left: 64px;
  }
`
export const ArrowIcon = styled(Icon).attrs({
  icon: arrowDownGlyph,
  fill: '#828282',
  size: 16,
})`
  @media (max-width: 350px) {
    width: 10px;
  }
`

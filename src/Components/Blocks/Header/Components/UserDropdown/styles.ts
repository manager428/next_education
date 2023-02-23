import styled, { css } from 'styled-components'
import { width, WidthProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { arrowDownGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)<{
  highlight?: boolean
}>`
  padding: 4px 44px 4px 4px;
  border: 1px solid #f2f2f2;
  cursor: pointer;
  border-radius: 25px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  margin-left: 12px;

  @media (max-width: 719px) {
    padding: 4px 4px 4px 4px;
    margin-left: 16px;
    border-top-color: #6e46ff;
    border-bottom-color: #c869f5;
    border-right-color: #c869f5;
    border-left-color: #6e46ff;
  }
  @media (max-width: 350px) {
    padding: 1px 1px 1px 1px;
  }

  ${props =>
    props.highlight &&
    css`
      border: 1px solid ${themeGet('colors.green')};
    `}

  :hover {
    border: 1px solid #603ace;
  }
`

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 350px) {
    width: 18px;
    height: 18px;
  }
`

export const Links = styled.ul<Partial<WidthProps>>`
  border: 1px solid #d3dae8;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-width: 180px;
  position: absolute;
  padding: 0px 20px;
  left: 50%;
  transform: translate(-50%, 0);
  top: 45px;
  z-index: 20;
  ${width};
`

export const LinkItem = styled.li`
  font-size: 18px;
  line-height: 38px;
  display: flex;
  padding: 5px 0;
  justify-content: center;
  color: ${themeGet('colors.graySecondary')};

  a {
    font-size: 18px;
    line-height: 38px;
    display: flex;
    padding: 5px 0;
    justify-content: center;
    color: ${themeGet('colors.graySecondary')};
    &:hover {
      color: ${themeGet('colors.green')};
    }
  }

  &:hover {
    color: ${themeGet('colors.green')};
  }
`

export const ArrowWrap = styled(Flex)`
  position: absolute;
  top: 14px;
  right: 14px;
`
export const ArrowIcon = styled(Icon).attrs({
  icon: arrowDownGlyph,
  fill: '#828282',
  size: 16,
})`
  @media (max-width: 719px) {
    display: none;
  }
`

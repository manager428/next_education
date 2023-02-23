import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { mainLogo } from 'Assets/images/common'
import { FaqGlyph, LogoSmall } from 'Assets/svg/common'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import { device } from 'Constants/media'

export const Container = styled(Flex)`
  width: 100%;
  justify-content: center;
  padding: 18px 0;
  background-color: #fff;
  box-shadow: 0 4px 10px #f3f5f9;
  position: sticky;
  top: 0;
  z-index: 99999999;
  min-height: 90px;

  @media (hover: none) {
    a:after {
      display: none;
    }
  }

  @media ${device.tablet} {
    min-height: auto;
    padding: 14px 0;
  }
`

export const Inner = styled(Flex)`
  max-width: 1160px;
  min-height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 32px;

  @media ${device.tablet} {
    min-height: auto;
  }
`

export const HomeLogoSmallest = styled(Icon).attrs({
  icon: LogoSmall,
  width: 36,
  height: 32,
})`
  object-fit: contain;
`

export const HomeLogo = styled(Image).attrs({
  width: 182,
  height: 38,
  src: mainLogo,
  layout: 'fixed',
})`
  object-fit: contain;
`

export const NavLink = styled.a<{ selected?: boolean }>`
  color: ${themeGet('colors.graySecondary')};
  font-size: 18px;
  line-height: 23px;
  text-decoration: none;
  position: relative;

  &:hover {
    :after {
      content: '';
      width: 100%;
      border-bottom: 2px solid ${themeGet('colors.green')};
      bottom: -6px;
      left: 0px;
      position: absolute;
    }
  }

  @media ${device.tablet} {
    padding-bottom: 0px;
  }

  ${props =>
    props.selected &&
    css`
      color: ${themeGet('colors.green')};

      :after {
        content: '';
        width: 100%;
        border-bottom: 2px solid ${themeGet('colors.green')};
        bottom: -6px;
        left: 0px;
        position: absolute;
      }
    `}
`

export const LinkWrapper = styled(Flex).attrs({
  as: 'a',
})`
  cursor: pointer;
  display: flex;
`

export const SignInLink = styled(LinkWrapper)`
  margin-left: 20px;
  text-align: center;
  color: ${themeGet('colors.orange')};
  text-decoration: none;
  font-size: 18px;
  line-height: 23px;

  @media ${device.tablet} {
    font-size: 16px;
  }
`

export const SignUpLink = styled(SignInLink)`
  margin-left: 20px;
  border: 1px solid ${themeGet('colors.orange')};
  border-radius: 100px;
  text-align: center;
  padding: 4px 10px;
  justify-content: center;
  flex-shrink: 0;
  min-width: 100px;

  @media ${device.tablet} {
    min-width: 100px;
    font-size: 16px;
    padding: 4px 10px;
    line-height: 24px;
  }
`

export const FaqLink = styled(Icon).attrs({
  icon: FaqGlyph,
  width: 30,
  height: 30,
})``

export const ActionLink = styled(Flex).attrs({
  as: 'a',
})<{ highlighted?: boolean }>`
  background-repeat: no-repeat;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: ${themeGet('colors.graySecondary')};
  text-decoration: none;

  ${props =>
    props.highlighted &&
    css`
      color: ${themeGet('colors.green')};
    `}
`

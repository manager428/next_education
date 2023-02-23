import styled, { css } from 'styled-components'
import { fontWeight, typography, TypographyProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { educatorsTeacher, safeEnvBg } from 'Assets/images/landing'

import { Flex, Image } from 'Components/UI'

import { device } from 'Constants/media'

export const Container = styled(Flex)`
  width: 100%;
  background-color: white;
  flex-wrap: wrap;
  position: relative;
  min-height: 100vh;
  align-items: flex-start;
`

export const Background = styled.div`
  background-image: url('public/static/images/intro-background.svg');
  background-position: 0px -70px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  padding: 20px 0;
`

export const Section = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
`

export const SectionList = styled.ul`
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 0;
  list-style-type: none;
  margin-top: 20px;

  li {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 300;
  }
`

export const Title = styled(Flex).attrs({
  as: 'h2',
})<TypographyProps>`
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  margin: 0;
  padding: 0;
  color: #071d40;

  span {
    color: ${themeGet('colors.green')};
  }

  ${typography};
`

export const Relative = styled(Flex)`
  position: relative;
`

export const EducatorsTeacher = styled(Image).attrs({
  src: educatorsTeacher,
  width: 196,
  height: 294,
  objectFit: 'cover',
  position: 'absolute',

  zIndex: 100,
})``

export const SectionDescription = styled(Flex)`
  font-size: 20px;
  line-height: 28px;
  color: #071d40;

  ${typography};
`

export const SectionHeader = styled(Flex).attrs({
  as: 'h2',
})<TypographyProps>`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #071d40;

  ${typography};
`

export const GreenMaskBlock = styled(Flex)`
  background-image: url(${safeEnvBg.src});
  height: 100%;
  background-size: 100%;
`

export const VideoBlock = styled(Flex)`
  position: relative;
  flex-wrap: wrap;

  @media ${device.tablet} {
    img {
      width: 100%;
    }
  }
`

export const NavButton = styled(Flex).attrs({
  as: 'a',
})<{
  variant?: 'transparent' | 'orange'
  minwidth?: string
}>`
  border-radius: 100px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 16px;
  color: white;
  padding: 12px 20px;
  font-weight: 600;
  background-color: #6e46ff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-content: center;
  min-width: ${props => props.minwidth || 'inherit'};
  border: 1px solid #49ceb1;
  align-items: center;

  ${fontWeight};

  ${props =>
    props.variant === 'transparent' &&
    css`
      background-color: transparent;
      color: #49ceb1;
    `};

  ${props =>
    props.variant === 'orange' &&
    css`
      background-color: #ffa08c;
      border: 1px solid #ffa08c;
    `};
`

export const NativeLink = styled(NavButton)``

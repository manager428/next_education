import styled, { css } from 'styled-components'
import { typography, TypographyProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

import { device } from 'Constants/media'

export const Container = styled(Flex)<{ fullWidth?: boolean }>`
  flex-wrap: wrap;
  width: ${props => (props.width ? props.width : '980px')};
  margin: 0 auto;
  scroll-behavior: smooth;
  color: #071d40;
  position: relative;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`

export const Section = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const InnerContainer = styled(Flex)`
  max-width: 1030px;
  width: 100%;
  margin: 0 auto;

  @media ${device.mobile} {
    max-width: 100%;
  }
`

export const TopTitle = styled(Flex).attrs({ as: 'h1' })`
  font-weight: bold;
  color: #49ceb1;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0;

  span {
    color: #071d40;
  }
`

export const Text = styled(Flex)<TypographyProps>`
  font-size: 24px;
  line-height: 28px;
  justify-content: center;
  ${typography};
`

export const TopText = styled(Text)<{ alignLeft?: boolean }>`
  ${props =>
    props.alignLeft &&
    css`
      justify-content: flex-start;
    `}
`

export const SectionTitle = styled(Flex).attrs({
  as: 'span',
})<TypographyProps>`
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;

  ${typography};
`

export const TopBlock = styled(Flex)``

export const TopImageBlock = styled(Flex)`
  > div {
    position: relative;
    height: 416px;
    width: 452px;
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

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    font-size: 22px;
    line-height: 22px;
  }

  ${typography};
`

export const CompanyContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;

  @media ${device.tablet} {
    max-width: 365px;
    flex-wrap: wrap;
    justify-content: center;

    div {
      margin-right: 24px;
      margin-bottom: 20px;

      &:last-of-type {
        margin-right: 0px;
      }

      &:nth-child(n + 3) {
        margin-bottom: 0px;
      }
    }
  }
`

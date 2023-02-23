import styled, { css } from 'styled-components'
import { typography, TypographyProps } from 'styled-system'

import { admin, boy, familiesBoy, girl, partners } from 'Assets/images/landing'

import { NativeLink, NavButton } from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { device, MEDIA_SIZES } from 'Constants/media'

export const Title = styled(Flex).attrs({
  as: 'h2',
})<TypographyProps>`
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  margin: 0;
  padding: 0;
  color: #071d40;

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

export const Container = styled(Flex)<{ fullWidth?: number }>`
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

export const InnerContainer = styled(Flex)`
  max-width: 1030px;
  width: 100%;
  margin: 0 auto;

  @media ${device.mobile} {
    max-width: 100%;
  }
`

export const TopTitle = styled.h2<TypographyProps>`
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  color: #49ceb1;
  margin-top: 60px;
  margin-bottom: 0px;
  padding: 0;

  span {
    color: #071d40;
  }

  @media ${device.tablet} {
    font-size: 32px;
    line-height: 38px;
    margin-top: 32px;
  }

  @media ${device.mobile} {
    margin-top: 20px;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    width: 100%;
  }

  ${typography}
`

export const Text = styled(Flex)<TypographyProps>`
  font-size: 24px;
  line-height: 28px;
  ${typography};

  @media ${device[MEDIA_SIZES.TABLET]} {
    font-size: 20px;
    line-height: 28px;
  }
`

export const TopText = styled(Text)`
  line-height: 34px;
  margin-top: 30px;

  @media ${device.tablet} {
    margin-top: 14px;
    font-size: 22px;
    line-height: 28px;
  }

  @media ${device.mobile} {
    margin-top: 10px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    width: 100%;
  }

  ${typography}
`

export const Section = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const ColoredBox = styled(Flex)`
  border-radius: 10px;
  height: 80px;
  width: 144px;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: white;
  font-size: 46px;
`

export const SectionTitle = styled(Flex).attrs({
  as: 'span',
})<TypographyProps>`
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;

  ${typography};
`

export const TopBlock = styled(Flex)`
  max-width: 480px;

  @media ${device.tablet} {
    max-width: 344px;
  }

  @media ${device.mobile} {
    max-width: 288px;

    ${NavButton} {
      margin: 0;
      min-width: 138px;
      padding: 12px 14px;

      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
`

export const TopImageBlock = styled(Flex)`
  margin-left: 50px;
  margin-top: 50px;
  > div {
    position: relative;
    height: 416px;
    width: 452px;
  }

  @media ${device.tablet} {
    > div {
      width: 286px;
      height: 278px;
    }
  }

  @media ${device.mobile} {
    margin-left: 0px;
    margin-top: 14px;
    width: 100%;
    justify-content: center;
    > div {
      width: 288px;
      height: 280px;
    }
  }
`

export const SubTitle = styled(Flex)`
  font-size: 20px;
  text-align: center;
`

export const HereBlock = styled(Flex)`
  > img {
    object-fit: cover;
    height: 224px;
  }

  @media ${device.tablet} {
    ${NativeLink} {
      font-size: 12px;
    }
  }

  @media ${device.mobile} {
    ${NativeLink} {
      font-size: 16px;
    }
  }
`

export const HereTitle = styled(Flex)`
  font-weight: 600;
  font-size: 22px;
  color: #071d40;
  text-align: center;
  width: 100%;
  justify-content: center;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 18px;
  }
`

export const HereDescription = styled(Flex)`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  width: 100%;
  justify-content: center;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`

export const FamiliesBoy = styled(Image).attrs({
  src: familiesBoy,
  width: 262,
  height: 294,
  position: 'absolute',

  objectFit: 'cover',
  zIndex: 100,
})``

export const Admin = styled(Image).attrs({
  src: admin,
  width: 280,
  height: 281,
  position: 'absolute',
  objectFit: 'cover',
  zIndex: 100,
})``

export const Partners = styled(Image).attrs({
  src: partners,
  width: 250,
  height: 303,
  position: 'absolute',
  objectFit: 'cover',
  zIndex: 100,
})``

export const Boy = styled(Image).attrs({
  src: boy,
  width: 158,
  height: 308,
  position: 'absolute',
  objectFit: 'cover',
  zIndex: 100,
})``

export const Girl = styled(Image).attrs({
  src: girl,
  width: 210,
  height: 256,

  position: 'absolute',
  objectFit: 'cover',
  zIndex: 100,
})``

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

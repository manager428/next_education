import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import {
  contactFormBgGlyph,
  howWeDoBgGlyph,
  mainBgGlyph,
  ourTeamBgGlyph,
} from 'Assets/svg/about'

import { Element, Flex, Icon } from 'Components/UI'

export const Background = styled.div`
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`

export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
  flex: 1;
  z-index: 99;
`

export const Section = styled(Flex).attrs({ as: 'section' })<{
  backgroundColor?: string
  image?: string
}>`
  position: relative;
  width: 100%;
  background-color: ${props => props.backgroundColor || 'transparent'};

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-repeat: no-repeat;
      background-size: 100%;
    `}
`

export const MainBgIcon = styled(Icon).attrs({
  icon: mainBgGlyph,
})`
  position: absolute;
  top: 40px;
`

export const Title = styled(Element).attrs({
  as: 'h2',
})`
  margin: 0;
  font-size: 34px;
  font-weight: 700;
  line-height: 45px;
  color: ${themeGet('colors.gray')};

  span {
    color: ${themeGet('colors.green')};
  }
`

export const Text = styled(Element)<{ color?: string }>`
  color: ${props => props.color || themeGet('colors.gray')};
`

export const Quote = styled(Element)`
  border-left: 4px solid #8de1d1;
  padding-left: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${themeGet('colors.gray')};
`

export const OurTeamBg = styled(Icon).attrs({
  icon: ourTeamBgGlyph,
  width: '100%',
  height: 620,
})`
  position: absolute;
  top: -5px;
`

export const HowWeDoBg = styled(Icon).attrs({
  icon: howWeDoBgGlyph,
  width: '100%',
  height: 724,
})`
  position: absolute;
  top: -5px;
`

export const WhatWeDoBox = styled(Flex)`
  background-color: white;
  padding: 20px 20px 20px 40px;
  position: relative;
  height: 202px;
  flex-wrap: wrap;
  max-width: 380px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
`

export const WhatWeDoNumber = styled(Flex)`
  width: 36px;
  height: 36px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  left: -18px;
  top: 60px;
  background-color: ${themeGet('colors.orange')};
  border-radius: 50%;
`

export const WhyWeDoQoute = styled(Element)<{ image: string }>`
  padding: 22px 30px 22px 30px;

  span {
    color: #8de1d1;
    font-style: italic;
  }

  background-image: url(${props => props.image});
  background-size: cover;
`

export const WhyWeDoQuoteText = styled(Element)`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: white;
  border-left: 4px solid #8de1d1;
  padding-left: 20px;
`

export const Button = styled.button<{ active?: boolean }>`
  background: ${({ active }) =>
    active ? themeGet('colors.green') : '#CAD2E3'};
  border-radius: 5px;
  padding: 12px 14px;
  width: 160px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: white;
`
export const FormContainer = styled(Flex).attrs({
  as: 'form',
})`
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(3, 13, 63, 0.12);
  border-radius: 20px;
  padding: 22px 32px;
  position: relative;
  z-index: 99;
  width: 424px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  min-height: 528px;
  flex-direction: column;
`

export const FormBackground = styled(Icon).attrs({
  icon: contactFormBgGlyph,
})`
  position: absolute;
  top: -14px;
  left: -80px;
`

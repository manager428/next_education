import styled, { css } from 'styled-components'
import { margin, MarginProps, textAlign, TextAlignProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Section = styled(Flex)`
  width: 100%;
`

export const SectionTitle = styled(Flex)`
  justify-content: center;
  align-items: center;
  align-content: center;
  font-weight: 600;
  font-size: 28px;
  width: 100%;
  color: ${themeGet('colors.font.primary')};

  &:before {
    margin-right: 10px;
  }

  &:after {
    margin-left: 10px;
  }

  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background-color: #d3dae8;
  }
`

export const Item = styled(Flex)<{ withBackground?: boolean }>`
  width: 296px;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 24px;
  padding-top: 24px;
  ${props =>
    props.withBackground &&
    css`
      background: #ffffff;
      box-shadow: 0px 2px 18px rgba(8, 36, 77, 0.08);
      border-radius: 14px;
    `}
`

export const ItemTitle = styled.span`
  font-weight: 600;
  font-size: 22px;
  color: ${themeGet('colors.font.primary')};
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 24px;
  padding: 0 24px 0 24px;
`

export const ItemSubtitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${themeGet('colors.green')};
  margin-top: 14px;
  padding: 0 20px 0 20px;
`

export const ItemDescription = styled.span<TextAlignProps & MarginProps>`
  font-size: 16px;
  line-height: 22px;
  color: ${themeGet('colors.graySecondary')};
  margin-top: 14px;
  padding: 0 24px 0 24px;

  ${textAlign};
  ${margin};
`

export const PrizesTitle = styled.span`
  padding: 0 14px 0 14px;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  color: ${themeGet('colors.font.primary')};
  text-align: left;
  margin-top: 24px;
`

export const PrizesDescription = styled.span<TextAlignProps & MarginProps>`
  font-size: 16px;
  line-height: 22px;
  color: ${themeGet('colors.graySecondary')};
  margin-top: 14px;
  padding: 0 14px 0 14px;

  ${textAlign};
  ${margin};
`

export const PrizesText = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: ${themeGet('colors.font.primary')};
  text-align: left;
`

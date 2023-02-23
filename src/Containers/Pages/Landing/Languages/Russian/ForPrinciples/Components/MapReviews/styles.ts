import styled, { css } from 'styled-components'

import { closeIconGlyph, reviewQouteGlyph } from 'Assets/svg/landing'

import { Element, Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  background: #f7faff;
`

export const Title = styled(Element)`
  text-align: center;
  font-weight: 800;
  font-size: 32px;
  line-height: 43px;
  span {
    color: #49ceb1;
  }
`

export const MapContainer = styled(Flex)`
  position: relative;
`

export const UserReview = styled(Flex)<{ active?: boolean }>`
  width: 60px;
  height: 60px;
  border: 2px solid #ffa08c;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    border-radius: 50%;
  }

  ${({ active }) =>
    active &&
    css`
      width: 84px;
      height: 84px;
      border: 4px solid #49ceb1;

      img {
        width: 64px !important;
        height: 64px !important;
      }
    `};
`

export const ReviewPopup = styled(Flex)`
  position: absolute;
  width: 220px;
  padding: 14px;
  background-color: white;
  box-shadow: 0px 2px 20px rgba(8, 36, 77, 0.08);
  border-radius: 8px;
  flex-wrap: wrap;
  transition: all 0.3s ease;
  z-index: 999;
`

export const QuoteIcon = styled(Icon).attrs({
  icon: reviewQouteGlyph,
})``

export const CloseIcon = styled(Icon).attrs({
  icon: closeIconGlyph,
  size: 13,
  fill: '#CAD2E3',
})``

export const CloseWrapper = styled(Flex)`
  position: absolute;
  right: 14px;
  cursor: pointer;
`

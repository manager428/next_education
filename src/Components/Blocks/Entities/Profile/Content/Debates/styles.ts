import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { sliderArrowGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;

  ul {
    min-height: 478px !important;
  }

  .slider {
    outline: 0px;
    .slider-frame {
      /* height: auto !important; */
    }

    .slider-control-centerright {
      top: 150px !important;
    }
    .slider-control-centerleft {
      top: 150px !important;
    }
  }
`

export const SliderArrow = styled(Icon).attrs({
  icon: sliderArrowGlyph,
  size: 18,
})`
  fill: #bdbdbd;
`

export const SliderButton = styled(Flex)<{
  type?: 'prev' | 'next'
  active?: boolean
}>`
  border: 2px solid #bdbdbd;
  background-color: white;
  width: 36px;
  height: 36px;
  box-shadow: none;
  outline: 0px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 0;

  ${props =>
    props.type === 'prev' &&
    css`
      left: -17px;
    `}

  ${props =>
    props.type === 'next' &&
    css`
      right: -17px;
      transform: rotate(180deg);
    `}

  ${props =>
    props.active &&
    css`
      border-color: #ffa08c;
      ${SliderArrow} {
        fill: #ffa08c;
      }
    `}
`

export const Dot = styled.div`
  display: inline-block;
  width: 4px;
  height: 4px;
  background: ${themeGet('colors.primary')};
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
`

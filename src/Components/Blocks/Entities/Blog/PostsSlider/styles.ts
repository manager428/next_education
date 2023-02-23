import styled, { css } from 'styled-components'

import { carouselGlyph, carouseNotActivelGlyph } from 'Assets/svg/lectorium'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const SliderContainer = styled(Flex)<{
  withBorder?: 1 | 2
}>`
  width: 100%;
  margin-top: 40px;
  flex-wrap: wrap;

  ${props =>
    props.withBorder &&
    css`
      padding: 20px 50px;
      border: 2px solid #d3dae8;
      box-sizing: border-box;
      border-radius: 20px;
      width: 1080px;
      position: relative;
      left: -50px;

      .slider-control-centerleft,
      .slider-control-centerright {
        top: 40% !important;
      }
    `};
`

export const Slider = styled(Flex)`
  width: 100%;

  position: relative;
  flex-wrap: nowrap;
  justify-content: center;
  outline: 0;

  .slider {
    outline: 0px;
    .slider-frame {
      height: auto !important;
    }
  }

  .slider-control-centerleft {
    left: -23px !important;
    top: 141px !important;
  }
  .slider-control-centerright {
    right: -23px !important;
    top: 141px !important;
  }
  li {
    outline: 0px;
  }
`

export const ListTitle = styled(Flex)`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  flex-grow: 1;
`

export const ListExploreButton = styled.a`
  color: #6e46ff;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  flex-shrink: 0;
`

export const PrevButton = styled(Icon).attrs<any>(props => ({
  icon: props.disabled ? carouseNotActivelGlyph : carouselGlyph,
  size: 48,
}))<any>`
  cursor: pointer;
  outline: 0;
  transform: rotate(180deg);

  ${props =>
    props.disabled &&
    css`
      transform: rotate(0deg);
    `}
`

export const NextButton = styled(Icon).attrs<any>(props => ({
  icon: props.disabled ? carouseNotActivelGlyph : carouselGlyph,
  size: 48,
}))<any>`
  cursor: pointer;
  outline: 0;

  ${props =>
    props.disabled &&
    css`
      transform: rotate(180deg);
    `}
`

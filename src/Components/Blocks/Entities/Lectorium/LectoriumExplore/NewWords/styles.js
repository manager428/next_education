import styled, { css } from 'styled-components'

import SimpleBar from 'simplebar-react'

import { carouselGlyph, carouseNotActivelGlyph } from 'Assets/svg/lectorium'

import { Flex, Icon } from 'Components/UI'

import 'simplebar/dist/simplebar.min.css'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 60px;
  position: relative;

  .slider {
    outline: 0;
    .slider-frame {
      height: auto !important;
    }

    .slider-control-centerleft {
      left: -70px !important;
      @media screen and (max-width: 1023px) {
        left: 0px !important;
      }
      @media screen and (max-width: 720px) {
        left: -20px !important;
      }
    }
    .slider-control-centerright {
      right: -70px !important;
      @media screen and (max-width: 1023px) {
        right: 0px !important;
      }
      @media screen and (max-width: 720px) {
        right: -20px !important;
      }
    }
  }
`
export const Title = styled(Flex).attrs({
  as: 'h2',
})`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  width: 100%;
  justify-content: center;
`

export const Slider = styled(Flex)`
  width: 100%;
  margin-top: 40px;
  position: relative;
  flex-wrap: nowrap;
  justify-content: center;
  outline: 0;

  @media screen and (max-width: 1280px) {
    margin: 40px 65px;
  }
  @media screen and (max-width: 1024px) {
    margin: 20px 35px;
  }
  @media screen and (max-width: 1023px) {
    margin: 20px 0px;
  }
  @media screen and (max-width: 720px) {
    margin: 20px 0px;
  }
  @media screen and (max-width: 560px) {
    margin: 20px 40px;
  }
  @media screen and (max-width: 350px) {
    margin: 20px 20px;
  }
  li {
    outline: 0px;
    height: 100% !important;
  }
`

export const Card = styled(Flex)`
  border: 2px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 10px;
  //height: 260px;
  width: 260px;
  margin: 0 auto;
  outline: 0;
  padding: 20px 10px 20px 20px;
  align-content: flex-start;
  align-items: flex-start;
  height: 100%;
  //flex-direction: column;
  flex-direction: column;
  justify-content: space-between;
`

export const PrevButton = styled(Icon).attrs(props => ({
  icon: props.disabled ? carouseNotActivelGlyph : carouselGlyph,
  size: 48,
}))`
  cursor: pointer;
  outline: 0;
  transform: rotate(180deg);

  ${props =>
    props.disabled &&
    css`
      transform: rotate(0deg);
    `}
`

export const NextButton = styled(Icon).attrs(props => ({
  icon: props.disabled ? carouseNotActivelGlyph : carouselGlyph,
  size: 48,
}))`
  cursor: pointer;
  outline: 0;

  ${props =>
    props.disabled &&
    css`
      transform: rotate(180deg);
    `}
`

export const Word = styled(Flex)`
  font-weight: 600;
  font-size: 18px;

  color: black;
  width: 100%;
  justify-content: center;
  word-break: break-word;
`

export const Description = styled(SimpleBar)`
  width: 100%;
  overflow-y: auto;
  max-height: 130px;
  min-height: 130px;
  margin-top: 14px;

  .simplebar-content {
    padding: 0px 0px !important;
    padding-right: 25px !important;
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
    width: 6px !important;
  }

  .simplebar-scrollbar {
    border-radius: 8px;
    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 8px;
      border: 1px solid #d3dae8;
    }
  }
`

export const GotIt = styled(Flex)`
  background: ${props => (props.checked ? '#49CEB1' : '#d3dae8')};
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  width: 100px;
  height: 30px;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin: 14px auto 0 auto;
  cursor: pointer;

  span {
    padding-top: 2px;
  }
`

export const CheckBoxWrapper = styled(Flex)`
  max-width: 22px;
  margin-right: 8px;
  border-radius: 8px;
  margin-left: 4px;

  .checkbox {
    border: 0px;
    border-radius: 8px;

    &:after {
      top: 6px;
      left: 5px;
    }
  }
`

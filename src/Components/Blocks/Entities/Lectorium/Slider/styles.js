import styled, { css } from 'styled-components'

import { playVideoGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  margin-top: 40px;
  position: relative;
  flex-wrap: nowrap;
  width: 100%;
  height: 290px;
  li {
    outline: 0px;
  }
  @media (max-width: 1023px) {
    width: 99%;
    height: 200px;
    margin-left: 5%;
  }
  @media (max-width: 720px) {
    width: 97%;
  }
  @media (max-width: 719px) {
    display: none;
  }
`

export const Slide = styled(Flex)`
  width: 100%;
  height: 290px;
  pointer-events: all !important;
  user-select: all !important;
`
export const PreviewContainer = styled.div`
  height: 100%;
  width: 480px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;

  @media screen and (max-width: 1024px) {
    width: 465px;
  }
  @media screen and (max-width: 1023px) {
    width: 365px;
    height: 200px;
  }
  @media screen and (max-width: 720px) {
    height: 180px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`

export const PlayIcon = styled(Icon).attrs({
  icon: playVideoGlyph,
  width: 86,
  height: 86,
  color: '#6E46FF',
})`
  position: absolute;
  left: calc(50% - 43px);
  top: calc(50% - 43px);
  color: #6e46ff;
`

export const Content = styled(Flex)`
  padding-top: 20px;
  flex-grow: 1;
  align-items: flex-start;
  padding-left: 30px;
  flex-wrap: wrap;
  align-content: flex-start;

  @media screen and (max-width: 1023px) {
    padding-top: 0px;
  }
  @media screen and (max-width: 720px) {
    padding-top: 0px;
    padding-left: 20px;
  }
`
export const Section = styled(Flex)`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #828282;
  width: 100%;
  align-items: center;

  @media (max-width: 1023px) {
    font-size: 12px;
    line-height: 100%;
  }
`

export const Dot = styled.div`
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #828282;
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  flex-shrink: 0;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  max-width: 470px;
  text-overflow: ellipsis;

  @media (max-width: 1023px) {
    font-size: 18px;
    line-height: 100%;
  }
`

export const Description = styled.div`
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  font-weight: 400;
  margin-top: 10px;
  width: 100%;
  max-height: 66px;
  overflow: hidden;

  @media (max-width: 1023px) {
    max-height: 40px;
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
`

export const ReadMore = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.color || '#6E46FF'};
  margin-top: 20px;

  @media (max-width: 1023px) {
    margin-top: 10px;
    font-size: 14px;
    line-height: 100%;
  }
`

export const Dots = styled(Flex)`
  position: absolute;
  bottom: 0px;
  left: 52%;
  width: 50px;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    bottom: 0;
    left: 54%;
  }
  @media (max-width: 1023px) {
    bottom: 0;
    left: 65%;
  }
  @media (max-width: 720px) {
    bottom: 10%;
    left: 61%;
  }
`

export const SliderDot = styled.div`
  width: 8px;
  height: 8px;
  background: #d3dae8;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 10px;
  flex-shrink: 0;

  ${props =>
    props.active &&
    css`
      background: ${props.color || '#6E46FF'};
    `}
`

export const Author = styled.a`
  color: #bdbdbd;
  display: flex;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  align-content: center;
  text-decoration: none;
  margin-top: 20px;

  @media (max-width: 1023px) {
    font-size: 14px;
    line-height: 100%;
  }
  @media (max-width: 720px) {
    margin-top: 10px;
  }
  img {
    height: 38px;
    width: 38px;
    object-fit: cover;
    margin-right: 14px;
    border-radius: ${props => (props.isRounded ? '20px' : '0')};
  }
`

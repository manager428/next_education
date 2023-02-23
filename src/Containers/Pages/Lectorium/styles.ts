import styled, { css } from 'styled-components'

import { videoIconGlyph } from 'Assets/svg/lectorium'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

export const Background = styled.div<{ image?: string }>`
  background-image: url('/static/images/main_bg.svg');
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-repeat: repeat;
    `}
`

export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 90%;
    max-width: 1024px;
  }
  @media screen and (max-width: 1023px) {
    width: 63%;
  }
  @media screen and (max-width: 720px) {
    width: 92%;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`

export const Content = styled(Flex)`
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  min-height: 500px;

  @media screen and (max-width: 1023px) {
    width: 100%;
    margin: 0 auto;
  }
  @media screen and (max-width: 720px) {
    width: 97%;
  }
`

export const SpecialProjectBanner = styled.img`
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit: cover;
  width: 100%;
  height: 400px;
`

export const SpecialProjectTab = styled(Flex)<{
  color?: string
  active?: boolean
}>`
  font-size: 22px;
  cursor: pointer;
  margin-right: 34px;
  color: #828282;
  border-bottom: 1px solid transparent;
  box-shadow: none;
  padding-bottom: 5px;

  ${props =>
    props.active &&
    css`
      border-color: ${props.color};
      color: ${props.color};
    `};
`

export const AddVideoIcon = styled(Icon).attrs({
  icon: videoIconGlyph,
  size: 22,
})``

export const AddNew = styled(Flex)`
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 20px;
  align-items: center;
  font-size: 18px;
  line-height: 24px;
  color: #828282;
  padding: 7px 16px;
  cursor: pointer;
  margin-left: 36px;
  position: relative;

  a {
    color: #828282;
    text-decoration: none;
    outline: 0px;
  }
`

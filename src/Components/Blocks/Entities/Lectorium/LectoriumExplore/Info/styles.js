import styled, { css } from 'styled-components'

import { likeGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  align-content: center;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  width: 610px;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    width: 590px;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`

export const Category = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #828282;
  @media (max-width: 719px) {
    display: none;
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
  @media (max-width: 719px) {
    display: none;
  }
`

export const Text = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  @media (max-width: 719px) {
    display: none;
  }
`

export const Date = styled(Flex)`
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  margin-right: 12px;
  @media (max-width: 719px) {
    display: none;
  }
`

export const Likes = styled(Flex)`
  font-size: 18px;
  color: #333;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  @media (max-width: 719px) {
    position: absolute;
    right: 0;
  }
  @media (max-width: 350px) {
    position: absolute;
    right: 10px;
  }
  ${props =>
    props.noLineHeight !== undefined &&
    css`
      line-height: 18px !important;
    `}
`

export const LikeIcon = styled(Icon).attrs({
  icon: likeGlyph,
  size: 18,
})`
  position: relative;
  fill: #bdbdbd;
  margin-right: 8px;

  ${props =>
    props.liked &&
    css`
      fill: #dd85ad;
    `}
  &:hover {
    fill: #dd85ad;
  }
`

export const Author = styled.a`
  color: #bdbdbd;
  display: flex;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  align-content: center;
  text-decoration: none;
  @media (max-width: 719px) {
    display: inline;
  }
  img {
    height: 38px;
    width: 38px;
    object-fit: cover;
    margin-right: 14px;
    border-radius: ${props => (props.isRounded ? '20px' : '0')};
    @media (max-width: 719px) {
      margin-bottom: -14px;
    }
    @media (max-width: 350px) {
      margin-bottom: -10px;
      width: 30px;
      height: 30px;
    }
  }
`

import styled from 'styled-components'
import { position, PositionProps } from 'styled-system'

import { parentNotAllowedGlyph } from 'Assets/svg/parent'

import { Flex, Icon } from 'Components/UI'

export const Wrapper = styled(Flex)<PositionProps>`
  position: absolute;
  background-color: white;
  padding: 15px 12px;
  flex-wrap: wrap;
  width: 200px !important;
  height: 234px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  z-index: 99999999;

  ${position};
`

export const Title = styled.div`
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  color: #333333;
  text-align: center;
  justify-content: center;

  a {
    color: #2d9cdb;
    text-decoration: none;
  }
`

export const Logo = styled(Icon).attrs({
  icon: parentNotAllowedGlyph,
  width: 180,
  height: 158,
})``

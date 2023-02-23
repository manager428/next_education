import styled from 'styled-components'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

export const Container = styled(Flex)`
  width: 42px;
  position: relative;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 719px) {
    display: none;
  }
`

export const Dropdown = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  top: 100%;
  background: #ffffff;
  justify-content: center;
  z-index: 999;
  margin-top: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid #cad2e3;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.16);
`

export const LanguageIcon = styled(Icon).attrs({
  width: 28,
  height: 28,
  objectFit: 'cover',
})``

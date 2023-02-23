import styled from 'styled-components'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  position: fixed;
  top: 200px;
  right: 20px;
  flex-wrap: wrap;
  width: 40px;
  padding: 5px;
  justify-content: center;
  z-index: 99999;
`

export const SocialContainer = styled(Flex)`
  box-sizing: border-box;
  border: 2px solid transparent;
  padding: 2px;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  min-width: 40px;
  &:hover {
    border: 2px solid rgba(73, 206, 177, 0.2);
  }
`
export const SocialIcon = styled(Icon).attrs({
  width: 32,
  height: 32,
})``

export const Title = styled(Flex)<{ color?: string }>`
  margin-top: 50px;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.color};
  transform: rotate(-90deg);
  flex-shrink: 0;
`

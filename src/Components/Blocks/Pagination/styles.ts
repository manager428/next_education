import styled, { css } from 'styled-components'

import { prevArrow, prevArrowActive } from 'Assets/svg/notifications'

import { Flex, Icon } from 'Components/UI'

export const PaginationContainer = styled(Flex)`
  width: 100%;
  margin-top: 20px;
  justify-content: center;
`

export const Arrow = styled(Icon).attrs<any>(props => ({
  icon: props.active ? prevArrowActive : prevArrow,
  size: 22,
}))<any>`
  ${props =>
    props.next &&
    css`
      transform: rotate(180deg);
    `};

  ${props =>
    props.active &&
    css`
      cursor: pointer;
    `};
`

export const Info = styled(Flex)`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #071d40;
  justify-content: center;
  align-items: center;
  align-content: center;
`

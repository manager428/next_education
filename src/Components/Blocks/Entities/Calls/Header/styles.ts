import styled, { css } from 'styled-components'
import { margin, MarginProps } from 'styled-system'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 98px;
  align-items: center;
`

export const Inner = styled(Flex)`
  width: 980px;
  margin: 0 auto;
`

export const Tab = styled(Flex).attrs({
  as: 'button',
})<{ green?: boolean }>`
  flex-wrap: wrap;
  color: #828282;
  font-size: 18px;
  align-self: center;

  background-color: transparent;
  border: 0px;
  cursor: pointer;
  padding: 0px;

  :after {
    margin-top: 6px;
    content: '';
    background-color: transparent;
    height: 2px;
    width: 100%;
    display: block;
  }

  :hover {
    color: #6e46ff;
    &:after {
      background-color: #6e46ff;
    }
  }

  ${props =>
    props.green &&
    css`
      color: #49ceb1;

      :after {
        background-color: #6e46ff;
      }
    `};
`

export const Button = styled(Flex).attrs({
  as: 'a',
})`
  align-items: center;
  border-radius: 20px;
  border: 1px solid;
  font-size: 16px;
  line-height: 14px;
  padding: 8px 15px;
  box-sizing: border-box;
  cursor: pointer;
`

export const LinkButton = styled(Flex).attrs({ as: 'a' })`
  align-items: center;
  border-radius: 20px;
  border: 1px solid;
  font-size: 16px;
  line-height: 14px;
  padding: 8px 15px;
  box-sizing: border-box;
  cursor: pointer;
  color: #ffa08c;
`

export const RelativeContainer = styled(Flex)`
  position: relative;
`

export const DropdownContainer = styled(Flex)`
  position: absolute;
  top: 47px;
  width: 100%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid #8de1d1;
  background-color: white;
  padding: 14px;
  flex-wrap: wrap;
  z-index: 1000;
`

export const DropdownButton = styled(Flex).attrs({
  as: 'button',
})<MarginProps>`
  margin: 0;
  font-size: 16px;
  background: unset;
  border: 0;
  cursor: pointer;
  color: #bdbdbd;

  ${margin};

  &:hover {
    color: #49ceb1;
  }
`

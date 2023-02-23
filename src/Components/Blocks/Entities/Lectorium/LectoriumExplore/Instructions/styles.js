import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 19px;
  @media (max-width: 350px) {
    padding: 0 10px;
  }
`

export const Title = styled.span`
  width: 100%;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: black;
`
export const Content = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: black;
  margin-top: 14px;
  width: 100%;

  p {
    overflow: auto;
    margin-bottom: 1em;
  }
`

export const ButtonWrapper = styled(Flex)`
  position: relative;
  width: 100%;
  justify-content: center;
`

export const Button = styled(Flex).attrs({ as: 'button' })`
  background: #d3dae8;
  border-radius: 5px;
  width: 398px;
  height: 40px;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 30px;
  outline: 0px;
  color: white;
  align-content: center;
  align-items: center;

  ${props =>
    props.active &&
    css`
      background: #6e46ff;
    `}

  &:hover {
    background: #6e46ff;
  }
`

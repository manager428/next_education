import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex).attrs({ width: 1 })<{ isError: number }>`
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  color: #333333;
  width: 100%;

  border-radius: 0px;
  border-bottom: 2px solid #d3dae8;
  padding-bottom: 4px;

  input {
    width: 100%;
    outline: 0;
    border: 0;
    border-radius: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #071d40;
    padding: 0;

    ::placeholder {
      color: #071d40 !important;
      opacity: 1;
      font-family: 'Nunito Sans', sans-serif;
    }
  }

  ${props =>
    props.isError &&
    css`
      border-bottom: 2px solid #eb5757;
    `};
`

export const Label = styled(Flex).attrs({
  as: 'label',
})`
  color: #828282;
  font-size: 16px;
  line-height: 20px;
`

export const TipWrapper = styled(Flex)`
  border: none;
  position: absolute;
  right: -24px;
  bottom: 10px;
  height: 16px;
  width: 16px;
`

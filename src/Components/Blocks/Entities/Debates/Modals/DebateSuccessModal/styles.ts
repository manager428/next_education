import styled from 'styled-components'

import { Flex, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  .Modal {
    min-height: 140px !important;
    box-sizing: border-box !important;
    background-color: white;
  }
`

export const Content = styled(Flex)`
  flex-wrap: wrap;
  width: 270px;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  justify-content: center;
  color: #071d40;

  a {
    margin-left: 5px;
    color: #5f9ee1;
    text-decoration: underline;
  }
`

export const Button = styled(Flex).attrs({
  as: 'button',
})`
  background: #49ceb1;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
`

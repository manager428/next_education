import styled from 'styled-components'

import { Flex } from 'Components/UI'
import ModalBase from 'Components/UI/Modal'

export const Container = styled(Flex)`
  margin-top: 40px;
  position: relative;
  flex-wrap: nowrap;
  width: 100%;
  height: 350px;
  li {
    outline: 0px;
  }
`

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  display: flex;
  padding: 0 !important;
  max-width: 100% !important;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 !important;
  border-radius: 0px !important;
  border: 0 !important;

  .Modal {
    box-shadow: none !important;
    box-shadow: unset;
  }
`

export const Wrapper = styled(Flex)`
  margin: 0 auto;
  background-color: unset;
  justify-content: center;
  border: 0 !important;
  box-shadow: none !important;
`

export const Content = styled(Flex)`
  width: 100%;
  max-width: 822px;
  position: relative;
  background-color: transparent;
  border-radius: 20px;
  justify-content: center;

  padding: 30px 20px;
  video {
    width: 100%;
    height: 100%;
    outline: 0px;
  }
`

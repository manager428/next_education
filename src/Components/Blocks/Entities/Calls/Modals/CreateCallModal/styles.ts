import styled from 'styled-components'

import SimpleBar from 'simplebar-react'

import { Modal as ModalBase } from 'Components/UI'

import 'simplebar/dist/simplebar.min.css'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  display: flex;
  padding-right: 6px !important;

  .Modal {
    background-color: white;
  }
`

export const Content = styled.div`
  width: 602px;
  min-height: 550px;
  position: relative;
`

export const InnerContent = styled(SimpleBar)`
  overflow-y: auto;
  max-height: 550px;
  height: 100%;
  padding-right: 10px;

  .simplebar-track.simplebar-vertical {
    width: 6px;
  }

  .simplebar-content {
    padding: 6px 0px !important;
    padding-right: 15px !important;
    padding-left: 6px !important;
    height: fit-content;

    :before,
    :after {
      display: none;
    }
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;
    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid #d3dae8;
    }
  }
`

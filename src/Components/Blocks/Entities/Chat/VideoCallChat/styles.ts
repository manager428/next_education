import styled, { css } from 'styled-components'

import SimpleBar from 'simplebar-react'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  height: 560px;
`

export const Scroll = styled(SimpleBar)<{
  limitheight?: number
}>`
  overflow-y: auto;
  max-height: 560px;
  height: 100%;
  width: 100%;

  .simplebar-horizontal {
    display: none !important;
  }

  ${props =>
    props.limitheight &&
    css`
      max-height: 495px;
    `};

  .simplebar-track.simplebar-vertical {
    width: 6px;
  }

  .simplebar-content {
    box-sizing: border-box;
    max-height: 487px;
    height: 100%;
    padding: 20px !important;

    :before,
    :after {
      display: none;
    }
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
    right: 15px;
    top: 20px !important;
    bottom: 20px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;

    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid #d3dae8;
      width: 4px;
      left: 0px !important;
    }
  }
`

export const MessageContainer = styled(Flex)`
  width: 100%;

  font-size: 12px;
  line-height: 16px;
  color: #333333;
  flex-wrap: wrap;
  margin-bottom: 14px;

  .message-menu {
    display: none;
  }

  &:hover {
    .message-menu {
      display: flex;
    }
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`

export const FullName = styled(Flex)`
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #49ceb1;
`

export const Text = styled(Flex)`
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
`

export const SendMessageWrapper = styled(Flex)`
  padding: 0 10px 0 20px;
  width: 100%;
`

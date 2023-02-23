import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import SimpleBar from 'simplebar-react'

import { Element, Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`

export const Content = styled(Flex)`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 14px 20px 20px;
  width: 100%;
  position: relative;

  .opaque {
    opacity: 1 !important;
  }
`

export const InfoBlock = styled(Flex)`
  justify-content: center;
  align-items: center;
  padding: 9px 10px;
  border: 1px solid ${themeGet('colors.blueMid')};
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 16px;
`

export const InfoCounter = styled(Element)`
  color: ${themeGet('colors.green')};
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
`

export const ScrollableContainer = styled(SimpleBar)<{
  limitheight?: number
}>`
  margin-top: 14px;
  overflow-y: auto;
  max-height: 210px;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  color: ${themeGet('colors.blueMid')};
  border: 1px solid ${themeGet('colors.blueMid')};

  .simplebar-horizontal {
    display: none !important;
  }

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

export const TooltipContainer = styled(Flex)`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(13, 42, 98, 0.08);
  border-radius: 2px;
  padding: 8px;
  width: 160px;
  flex-wrap: wrap;
`

import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const ComingSoonText = styled(Flex)`
  color: #49ceb1;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  justify-content: center;
`

export const CountDownCell = styled(Flex)`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #071d40;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  width: 80px;
  span {
    color: #49ceb1;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    width: 100%;
  }
`

export const CountDownSeparator = styled(Flex)`
  color: #071d40;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
`

export const JitsiContainer = styled(Flex)`
  width: 100%;
  height: 594px;
  border: 2px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 10px;
  justify-content: center;
  align-content: center;

  iframe: {
    border-radius: 10px;
  }
  #zoom-content {
    z-index: 1;

    #phone {
      display: none !important;
    }
  }
`

export const JitsiRoomMessage = styled(Flex)`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #071d40;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-self: center;
`

export const ReloadContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 18px;
  justify-content: center;
`

export const ReloadButton = styled(Flex).attrs({
  as: 'button',
})`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 25px;
  font-size: 14px;
  line-height: 18px;
  color: #49ceb1;
  justify-content: center;
  box-shadow: none;
  background-color: white;
  padding: 6px 10px;
  cursor: pointer;
`

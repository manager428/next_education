import styled, { css } from 'styled-components'

import { closeIconGlyph } from 'Assets/svg/common'

import { Flex, Icon, Modal as ModalBase } from 'Components/UI'

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
  width: 320px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 !important;
  box-shadow: none !important;
  border: 0 !important;

  .Modal {
    background-color: white;
  }

  > .badge-detail-modal {
    background-color: transparent !important;
  }
`

export const Wrapper = styled(Flex)`
  width: 320px;
  margin: 0 auto;
  background-color: white;
  justify-content: center;
  border: 0 !important;
  box-shadow: none !important;
  border-radius: 10px !important;
  box-sizing: border-box;
  position: relative;
`

export const Content = styled(Flex)`
  width: 100%;
  max-width: 320px;
  background-color: transparent;
  border-radius: 20px;
  justify-content: center;

  padding: 20px 24px;
  video {
    width: 100%;
    height: 100%;
    outline: 0px;
  }
`

export const CloseButton = styled(Icon).attrs({
  icon: closeIconGlyph,
  size: 24,
  fill: '#D3DAE8',
})`
  cursor: pointer;
  position: absolute;
  right: 14px;
  top: 20px;
`

export const Title = styled(Flex)`
  font-size: 22px;
  line-height: 22px;
  color: #071d40;
  width: 100%;
  justify-content: center;
  text-align: center;
`

export const RewardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 14px;
  width: 120px;
  padding: 0 14px;
  cursor: pointer;
`

export const RewardCount = styled.div`
  position: absolute;
  right: 10px;
  top: 53%;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  color: #828282;
  padding: 1px 12px;
  box-shadow: 0 2px 6px rgba(22, 0, 85, 0.16);
  border-radius: 20px;
`

export const Description = styled(Flex)<{ variant?: 'bold' | null }>`
  color: #071d40;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  ${props =>
    props.variant === 'bold' &&
    css`
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    `}
`

export const Tips = styled(Flex)`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: #071d40;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 14px;
`

export const ProgressSection = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 32px;
`

export const ProgressInfo = styled(Flex)`
  font-weight: 600;
  font-size: 14px;
  color: #071d40;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 8px;
  span {
    font-weight: 600;
    font-size: 24px;
    margin-right: 5px;
  }
`

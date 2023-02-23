import styled, { css } from 'styled-components'

import { Element, Flex, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  .Modal {
    background-color: white;
  }
`

export const Content = styled(Flex)`
  width: 630px;
  font-family: 'Nunito Sans';
  flex-wrap: wrap;
  padding: 15px;
`

export const Title = styled(Flex).attrs({ as: 'span' })`
  font-size: 18px;
  line-height: 23px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
`

export const Button = styled(Flex).attrs({ as: 'button' })<{
  disabled?: boolean
  primary?: boolean
}>`
  box-shadow: none;
  border: 0px;
  outline: 0px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 18px;
  background-color: #d3dae8;
  font-size: 18px;
  line-height: 24px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  outline: 0px;

  ${props =>
    props.disabled &&
    css`
      background-color: #d3dae8;
    `}

  ${props =>
    props.primary &&
    !props.disabled &&
    css`
      background-color: #6e46ff;
    `}
`

export const Name = styled(Flex).attrs({ as: 'span' })`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`

export const Message = styled(Flex).attrs({ as: 'span' })`
  width: 100%;
  text-align: center;
  font-size: 16px;

  line-height: 20px;
`

export const Error = styled(Flex)`
  color: #eb5757;
  font-size: 12px;
  line-height: 15px;
  width: 100%;
  justify-content: flex-end;
  &:not(:empty) {
    margin-bottom: 5px;
    height: 15px;
  }
`

export const BadgeContainer = styled(Flex)`
  width: 100%;
`

export const BadgeIcon = styled.img`
  object-fit: contain;
  width: 100%;
`

export const BadgeName = styled(Flex).attrs({ as: 'span' })`
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  margin-top: 20px;
`

export const BadgeTip = styled(Element).attrs({ as: 'span' })`
  margin-top: 15px;
  width: 100%;
  span {
    color: #49ceb1;
    font-weight: 500;
  }

  font-size: 14px;
  line-height: 18px;
  color: #828282;
`

export const BadgeButton = styled.button<{ selected?: boolean }>`
  display: flex;
  border-radius: 5px;
  background-color: #d3dae8;
  font-size: 16px;
  line-height: 18px;
  box-shadow: none;
  outline: 0px;
  border: 0px;
  margin-top: 15px;
  width: 136px;
  height: 26px;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  &:hover {
    background: #49ceb1;
  }

  ${props =>
    props.selected &&
    css`
      background: #49ceb1;
    `}
`

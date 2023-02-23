import styled, { css } from 'styled-components'

import { Flex, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase)`
  .Modal {
    box-shadow: none;
  }
`

export const Content = styled(Flex)<{ locale?: string }>`
  width: 468px;
  font-family: 'Nunito Sans';
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;
  padding: 0;
  min-height: 520px !important;
  max-height: 520px !important;
  background: white;
  box-shadow: rgb(0 0 0 / 50%) 10px 10px 20px -10px;
  z-index: 99999999;
  transition: all 0.17s ease 100ms;
  border-radius: 20px;
  padding: 24px !important;
`

export const Container = styled(Flex)`
  background: #ffffff;
  width: 100%;
  flex-wrap: wrap;
  z-index: 9999;
`

export const Title = styled.h3`
  width: 100%;
  margin: 0;
  text-align: center;
  color: #333333;
  font-weight: 600;
  font-size: 18px;
`

export const TagsContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Tag = styled(Flex)<{
  active: boolean
  highlighted: boolean
}>`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  ${props =>
    props.highlighted &&
    css`
      border: 1px solid #ffa08c;
      color: #ffa08c;
    `}

  ${props =>
    props.active &&
    css`
      border: 1px solid #49ceb1;
      color: #49ceb1;
    `}
`

export const InformContainer = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: #49ceb1;
  min-height: 22px;
`

export const FormButton = styled(Flex).attrs({ as: 'button' })<{
  active?: boolean
}>`
  border: none;
  background: #d3dae8;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.active &&
    css`
      background: #49ceb1;
    `};
`

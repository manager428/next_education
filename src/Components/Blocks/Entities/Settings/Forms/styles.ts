import styled, { css } from 'styled-components'

import { editPencilGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

export const AvatarField = styled(Element)`
  position: relative;
  height: 100px;

  img {
    border-radius: 100px;
    object-fit: cover;
  }

  input {
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    border-radius: 50%;
    background-color: #000;
    opacity: 0;
    cursor: pointer;
  }

  .edit-block {
    color: #bdbdbd;
    cursor: pointer;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 2px solid #bdbdbd;
    display: flex;
    align-items: center;
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
    justify-content: center;
    svg {
      margin: 0 !important;
    }
  }
`

export const EditIcon = styled(Icon).attrs({
  icon: editPencilGlyph,
  size: 12,
})`
  fill: #828282;
`

export const FormButton = styled(Flex).attrs({ as: 'button' })<{
  gray?: boolean
}>`
  background: #49ceb1;
  border-radius: 5px;
  height: 40px;
  box-shadow: none;
  text-align: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  color: white;
  cursor: pointer;
  outline: 0px;

  ${props =>
    props.gray &&
    css`
      background: #d3dae8;
    `}
`

export const Success = styled.span`
  font-size: 14px;
  margin-top: 10px;
  width: 100%;
  color: #49ceb1;
`

export const Error = styled(Success)`
  color: rgb(235, 87, 87);
`

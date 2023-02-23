import styled, { css } from 'styled-components'

import { attachmentGlyph, fileGlyph, trashBinGlyph } from 'Assets/svg/calls'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)<{ isError: number }>`
  width: 100%;
  flex-wrap: wrap;

  ${props =>
    props.isError &&
    css`
      border-bottom: red;
    `}
`

export const AttachmentIcon = styled(Icon).attrs({
  icon: attachmentGlyph,
  size: 14,
})``

export const Button = styled(Flex)`
  border: 2px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 8px;
  color: #071d40;
  font-size: 14px;
  line-height: 18px;
  position: relative;
  cursor: pointer;
  align-content: center;
  align-items: center;
  overflow: hidden;

  input {
    cursor: pointer;
    font-size: 100px;
    filter: alpha(opacity=1);
    -moz-opacity: 0.01;
    opacity: 0.01;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const Limit = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #071d40;
`

export const FileIcon = styled(Icon).attrs({
  icon: fileGlyph,
  size: 14,
})``

export const FileName = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #071d40;
`

export const DeleteIcon = styled(Icon).attrs({
  icon: trashBinGlyph,
  size: 20,
})<any>`
  cursor: pointer;
  fill: #d3dae8;

  &:hover {
    fill: #ffa08c;
  }
`

export const ErrorContainer = styled(Flex)`
  color: #eb5757;
  font-size: 12px;
  line-height: 16px;
`

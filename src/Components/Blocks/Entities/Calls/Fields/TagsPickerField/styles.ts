import styled from 'styled-components'

import { editPencilGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
`

export const TagsContainer = styled(Flex)`
  flex-grow: 1;
  flex-wrap: wrap;
  min-height: 40px;
`

export const EditContainer = styled(Flex)`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #071d40;
  padding-top: 10px;
  cursor: pointer;
  flex-shrink: 0;
`

export const EditButton = styled(Icon).attrs({
  icon: editPencilGlyph,
  size: 12,
})`
  cursor: pointer;
  flex-shrink: 0;
`

export const Tag = styled(Flex)`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 18px;
  color: #6e46ff;
  margin-right: 10px;
  margin-bottom: 10px;
`

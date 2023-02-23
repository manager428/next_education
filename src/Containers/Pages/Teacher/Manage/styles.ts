import styled, { css } from 'styled-components'

import { addUserGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

import { theme } from 'Theme'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`

export const Container = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  max-width: 980px;
  position: relative;
`

export const Tab = styled(Element).attrs({
  as: 'a',
})<{ active?: boolean }>`
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  cursor: pointer;
  margin-right: 24px;
  font-weight: 600;

  &:last-of-type {
    margin-right: 0px;
  }

  ${props =>
    props.active &&
    css`
      color: #49ceb1;
    `};
`

export const AddNew = styled(Flex)`
  border: 1px solid ${theme.colors.green};
  box-sizing: border-box;
  border-radius: 20px;
  align-items: center;
  font-size: 18px;
  line-height: 24px;
  color: ${theme.colors.green};
  padding: 7px 16px;
  cursor: pointer;

  position: relative;
  flex-shrink: 0;
`

export const AddIcon = styled(Icon).attrs({
  icon: addUserGlyph,
  size: 22,
  fill: theme.colors.green,
})`
  margin-right: 10px;
`

export const Content = styled(Flex)`
  width: 100%;
  min-height: 500px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`

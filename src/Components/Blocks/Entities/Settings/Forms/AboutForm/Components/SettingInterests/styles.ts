import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Element, Flex } from 'Components/UI'

export const Container = styled(Flex)``

export const InterestItem = styled.div<{ selected?: boolean }>`
  height: 26px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 30px;
  border: 1px solid ${props => (props.selected ? '#49CEB1' : '#BDBDBD')};
  color: ${props => (props.selected ? '#49CEB1' : '#BDBDBD')};
  margin-right: 10px;
  cursor: pointer;
`

export const Label = styled(Element).attrs({ as: 'span' })`
  color: ${themeGet('colors.green')};
  font-size: 16px;
  line-height: 16px;
`

export const Inner = styled(Flex)`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`

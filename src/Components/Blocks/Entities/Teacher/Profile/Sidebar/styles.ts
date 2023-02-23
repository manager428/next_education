import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Element, Flex } from 'Components/UI'

export const RoundedBlock = styled(Flex)`
  margin-bottom: 14px;
  background-color: #ffffff;
  border-radius: 14px;
  padding: 12px 14px;
  width: 100%;
`

export const Container = styled(Flex)`
  flex-direction: column;
  position: sticky;
  top: 98px;
`

export const SectionTitle = styled(Flex).attrs({ as: 'span' })`
  font-size: 16px;
  margin-right: 10px;
  color: #333333;
`

export const SectionDescription = styled(Flex)`
  line-height: 20px;
  color: #828282;
`

export const SmallButton = styled(Flex)`
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 14px;
  color: ${themeGet('colors.green')};
  border: 1px solid ${themeGet('colors.green')};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const ElementWithBorder = styled(Element)`
  width: 100%;
  font-size: 14px;
  padding: 8px;
  text-align: center;
  line-height: 14px;
  color: ${themeGet('colors.green')};
  border: 1px solid ${themeGet('colors.green')};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const LinkWithBorder = styled('a')<{
  color: string
}>`
  width: 100%;
  font-size: 14px;
  padding: 5px;
  text-align: center;
  line-height: 14px;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
`

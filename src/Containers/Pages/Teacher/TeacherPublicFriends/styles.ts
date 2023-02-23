import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 980px;
  align-items: center;
`

export const BackButton = styled(Flex).attrs({ as: 'button' })`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${themeGet('colors.graySecondary')};
  background: transparent;
  border-radius: 5px;
  padding: 3px 9px;
  cursor: pointer;
  outline: 0px;
  border: 1px solid ${themeGet('colors.graySecondary')};
  position: absolute;
  right: 0px;
`

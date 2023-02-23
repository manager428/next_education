import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  min-width: 160px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`

export const Text = styled(Flex)`
  color: ${themeGet('colors.grayMid')};
  font-size: 18px;
  line-height: 18px;
  align-items: center;
  cursor: pointer;
`

export const Options = styled.ul`
  border: 1px solid #d3dae8;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 14px;
  position: absolute;
  width: 100%;
  top: 25px;
  z-index: 20;
`

export const Option = styled.li`
  font-size: 16px;
  line-height: 16px;
  display: flex;
  margin-bottom: 14px;
  justify-content: center;
  &:last-of-type {
    margin-bottom: 0px;
  }
`

export const OptionButton = styled.button`
  color: ${themeGet('colors.graySecondary')};
  &:hover {
    color: ${themeGet('colors.green')};
  }
`

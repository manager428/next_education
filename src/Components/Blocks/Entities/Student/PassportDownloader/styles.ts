import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Element, Flex } from 'Components/UI'

export const Container = styled(Flex)`
  max-width: 842px;
  height: 595px;
  width: 100%;
  padding: 28px 32px;
  flex-wrap: wrap;
  position: relative;
  background-color: #f7faff;

  background-image: url(${props => props.backgroundImage});
  background-size: 100%;
  background-repeat: no-repeat;
`

export const HeaderGradient = styled('div')`
  background: linear-gradient(
    180deg,
    #49ceb1 0%,
    #49ceb1 22.92%,
    #ffa08c 78.13%,
    #ffa08c 100%
  );
  width: 6px;
  height: 42px;
`

export const PageContainer = styled('div')`
  position: absolute;
  bottom: 14px;
  right: 14px;
  background: #f7faff;
  opacity: 0.9;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  padding: 4px;
`

export const GoBackButton = styled('button')`
  width: 110px;
  color: ${themeGet('colors.green')};
  border: 1px solid ${themeGet('colors.green')};
  cursor: pointer;
  padding: 12px 9px;
  border-radius: 5px;
`

export const VisitedBlock = styled(Flex)`
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 12px;
`

export const VisitedCounterBlock = styled(Element)`
  color: ${themeGet('colors.green')};
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
`

export const CountriesColumn = styled(Flex)`
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`

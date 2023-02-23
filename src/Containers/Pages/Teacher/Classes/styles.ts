import styled, { css } from 'styled-components'

import { Element, Flex } from 'Components/UI'

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
    margin-right: 0;
  }

  ${props =>
    props.active &&
    css`
      color: #49ceb1;
    `};
`
export const Content = styled(Flex)`
  width: 100%;
  min-height: 200px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
`

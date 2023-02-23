import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Background = styled.div<{ image?: string }>`
  background-image: url('/static/images/main_bg.svg');
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-repeat: repeat;
    `}
`

export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
  flex: 1;
`

export const Content = styled(Flex)`
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`

export const RelativeCont = styled(Flex)`
  position: relative;
`

export const LoadMore = styled.button`
  cursor: pointer;
  width: 220px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  display: block;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: none;
  margin: 0 auto;
  background-color: #6e46ff;
  overflow-anchor: none;
  &:hover {
    opacity: 0.8;
  }
`

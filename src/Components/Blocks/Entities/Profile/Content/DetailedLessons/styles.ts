import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 630px;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  margin: 0;
  padding: 0;
`

export const Tab = styled(Flex).attrs({
  as: 'button',
})<{
  active?: boolean
}>`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #828282;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  margin-right: 20px;
  outline: 0px;
  border: 0px;
  box-shadow: none;

  ${props =>
    props.active &&
    css`
      color: #49ceb1;
    `}
`

export const BackButton = styled(Flex).attrs({
  as: 'button',
})`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background: #d3dae8;
  border-radius: 5px;
  padding: 3px 9px;
  cursor: pointer;
  outline: 0px;
`

export const RelativeContainer = styled(Flex)`
  position: relative;
`

export const LoadMore = styled.button`
  cursor: pointer;
  width: 220px;
  height: 40px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #fff;
  display: block;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: none;
  margin: 0 auto;
  background-color: #6e46ff;
  &:hover {
    opacity: 0.8;
  }
`

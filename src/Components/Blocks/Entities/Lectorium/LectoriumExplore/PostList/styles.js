import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 40px;
  min-height: 500px;
  align-content: flex-start;
`

export const Text = styled.span`
  font-size: 16px;
  line-height: 22px;
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
  &:hover {
    opacity: 0.8;
  }
`

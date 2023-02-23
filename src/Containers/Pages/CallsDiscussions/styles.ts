import styled from 'styled-components'

import { Flex } from 'Components/UI'

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
  max-width: 848px;
  margin: 0 auto;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
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
  background-color: ${props => props.color || '#6E46FF'};
  font-family: 'Nunito Sans', 'sans-serif';
  &:hover {
    opacity: 0.8;
  }
`

export const Relative = styled(Flex)`
  position: relative;
`

import styled from 'styled-components'

import SimpleBar from 'simplebar-react'

import { Flex } from 'Components/UI'

export const Container = styled(SimpleBar)`
  background: #f7faff;
  width: 330px;
  border-radius: 10px;
  padding: 20px 17px;
  box-sizing: border-box;
  margin-left: 50px;
  flex-wrap: wrap;
  max-height: 1088px;

  @media (max-width: 1023px) {
    display: none;
  }
  .simplebar-content {
    margin: 0 auto;
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;
    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid #d3dae8;
    }
  }
`

export const Title = styled(Flex).attrs({ as: 'span' })`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  width: 100%;
`

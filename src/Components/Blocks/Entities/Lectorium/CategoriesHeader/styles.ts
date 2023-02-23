import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  //background: #e9f1fc;
  border-radius: 20px;
  margin: 20px auto 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding-bottom: 0px;
  }
`

export const Category = styled.a<{
  bold?: boolean
  highlighted?: boolean
}>`
  font-size: 14px;
  line-height: 18px;
  padding: 11px 20px;
  color: #333333;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 720px) {
    line-height: 14px;
  }
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${props =>
    props.highlighted &&
    css`
      background: rgba(110, 70, 255, 0.2);
    `}
`

export const Title = styled(Flex).attrs({
  as: 'h1',
})`
  margin: 0;
  width: 100%;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  justify-content: center;
`

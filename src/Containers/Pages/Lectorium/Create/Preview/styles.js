import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 980px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px;
`

export const LastStep = styled(Flex)`
  border: 2px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`
export const Title = styled(Flex).attrs({
  as: 'h2',
})`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
`

export const Description = styled(Flex)`
  font-size: 16px;
  line-height: 24px;
  width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 14px;
  color: #828282;
`

export const LoaderWrapper = styled(Flex)`
  width: 100%;
  margin-top: 20px;
  position: relative;
  height: 40px;
`

export const Button = styled.a`
  outline: 0;
  border: 0;
  border-radius: 5px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  background-color: rgb(189, 189, 189);
  text-decoration: none;
  width: 160px;
  display: flex;

  &:visited,
  &:focus,
  &:active {
    color: white;
  }
`

import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  background: #ffffff;
  border-radius: 20px;
  width: 400px;
  padding: 20px;
  position: absolute;
  top: 40%;
  margin-top: -183px;
  left: 50%;
  margin-left: -200px;
  flex-wrap: wrap;
  filter: drop-shadow(0px 6px 16px rgba(42, 47, 79, 0.26));
  z-index: 9999;
`
export const Title = styled.h3`
  width: 100%;
  margin: 0;
  text-align: center;
  color: #333333;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
`

export const TagsContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 22px;
`

export const Tag = styled(Flex)<{
  active: boolean
  highlighted: boolean
}>`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  ${props =>
    props.highlighted &&
    css`
      border: 1px solid #ffa08c;
      color: #ffa08c;
    `}

  ${props =>
    props.active &&
    css`
      border: 1px solid #49ceb1;
      color: #49ceb1;
    `}
`

export const InformContainer = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: #49ceb1;
`

export const FormButton = styled.button<{ active?: boolean }>`
  border: none;
  background: #d3dae8;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.active &&
    css`
      background: #49ceb1;
    `};
`

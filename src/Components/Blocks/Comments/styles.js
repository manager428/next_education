import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
`

export const FormWrapper = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  z-index: 1;
  @media screen and (max-width: 350px) {
    margin: 0 10px;
  }
  .editor-wrapper {
    border-color: ${props => props.color || '8de1d1'};
  }
`

export const Title = styled.span`
  font-style: normal;
  font-weight: 600;

  line-height: 34px;
  color: ${props => (props.color ? props.color : '#49ceb1')};
  width: 100%;
`
export const Description = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #828282;
`

export const SubmitButton = styled(Flex).attrs({ as: 'button' })`
  background: ${props => props.color || '#6E46FF'};
  border-radius: 5px;
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 260px;
  color: white;
  font-family: 'Nunito Sans';
  cursor: pointer;
  font-weight: 500;
  @media screen and (max-width: 350px) {
    width: 130px;
    margin: 0 auto;
  }
  ${props =>
    (props.disabled || props.gray) &&
    css`
      background-color: #d3dae8;
    `}
`

export const CommentInputWrapper = styled(Flex)`
  width: 600px;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  @media (max-width: 720px) {
    width: 660px;
  }
  @media (max-width: 610px) {
    width: 400px;
  }
  @media (max-width: 350px) {
    width: 315px;
  }
`

export const ErrorsContainer = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #ffa08c;
  text-align: center;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 6px;
  min-height: 20px;
  justify-content: center;
  position: relative;
`

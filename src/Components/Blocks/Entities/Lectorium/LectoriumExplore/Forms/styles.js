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
`

export const Title = styled(Flex)`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: ${props => (props.color ? props.color : '#6E46FF')};
  width: 100%;
`
export const Description = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #828282;
`

export const SubmitButton = styled(Flex)`
  background: #6e46ff;
  border-radius: 5px;
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 260px;
  color: white;
  font-family: 'Nunito Sans';
  cursor: pointer;
  font-weight: 500;

  ${props =>
    (props.disabled || props.gray) &&
    css`
      background-color: #d3dae8;
    `}
`

export const SuccessMessage = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  text-align: center;
  margin-top: 20px;
`

export const ErrorMessage = styled(SuccessMessage)`
  color: rgb(235, 87, 87);
`

export const LoaderContainer = styled(Flex)`
  position: relative;
  z-index: 100;
`

export const FieldsWrapper = styled(Flex)`
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

export const CommentInputWrapper = styled(Flex)`
  width: 600px;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
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

  &:not(:empty) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

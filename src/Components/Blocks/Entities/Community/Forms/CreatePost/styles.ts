import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const ErrorsContainer = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #ffa08c;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  min-height: 20px;
  justify-content: center;
  position: relative;
`

export const FormWrapper = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  z-index: 1;
`

export const Title = styled(Flex).attrs({ as: 'span' })<{ color?: string }>`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: ${props => (props.color ? props.color : '#49ceb1')};
  width: 100%;
  text-align: center;
`

export const SubmitButton = styled(Flex).attrs({
  as: 'button',
  type: 'submit',
})<{ gray?: boolean }>`
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
    props.gray &&
    css`
      background-color: rgb(189, 189, 189);
    `}
`

export const SuccessMessage = styled.span`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  text-align: center;
  margin-top: 20px;
`

import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  position: relative;
`

export const Header = styled(Flex)`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  .progress-line {
    border-radius: 20px;
    width: 100%;
    margin-top: 20px;
  }
`

export const QuestionContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Title = styled(Flex).attrs({
  as: 'h2',
})`
  padding: 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  width: 100%;
  color: #333333;
  margin: 0 30%;
  margin-bottom: 0px;
  text-align: center;
`

export const Description = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #828282;
  width: 100%;
`

export const Answer = styled(Flex)`
  background: #f3f5f9;
  border-radius: 20px;
  width: 100%;
  color: #333333;
  font-size: 18px;
  line-height: 22px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: rgba(110, 70, 255, 0.2);
  }

  ${props =>
    props.selected &&
    css`
      background: rgba(110, 70, 255, 0.2);
    `};

  ${props =>
    props.orange &&
    css`
      background: #ffd0c6 !important;
    `};
`

export const MultipleAnswer = styled(Flex)`
  width: 100%;
  align-items: center;
  align-content: center;
`

export const Button = styled(Flex).attrs({
  as: 'button',
})`
  outline: 0px;
  border: 0px;
  background: #6e46ff;
  border-radius: 5px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Nunito Sans';
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;

  ${props =>
    (props.disabled || props.gray) &&
    css`
      background-color: rgb(189, 189, 189);
    `}
`

export const SubmitMessage = styled(Flex)`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;

  color: ${props => (props.correct ? '#6E46FF' : '#FFA08C')};
`

export const RepeatContainer = styled(Flex)`
  border: 2px solid #6e46ff;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  padding: 14px 0px 20px 0px;
  flex-wrap: wrap;
  justify-content: center;
`

export const RepeatDescription = styled(Flex)`
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  flex-wrap: wrap;
  color: #828282;
  justify-content: center;
  text-align: center;
`

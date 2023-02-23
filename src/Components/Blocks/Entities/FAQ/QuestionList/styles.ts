import styled from 'styled-components'

import { linkIconGlyph, minusIconGlyph, plusIconGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const QuestionLinkIcon = styled(Icon).attrs<any>({
  icon: linkIconGlyph,
  size: 16,
})<any>`
  cursor: pointer;
  display: none;
`

export const Answer = styled(Flex)`
  padding-left: 50px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const AnswerContent = styled(Flex)`
  border-left: 2px solid #49ceb1;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 20px;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Nunito Sans', sans-serif;
  color: #828282;

  img {
    margin: 14px 0;
    width: 75% !important;
  }

  a {
    font-size: 14px;
    line-height: 18px;
    color: #071d40;
    text-decoration: none;
    &:active,
    &:focus,
    &:visited {
      color: #071d40;
    }
  }
`

export const Button = styled.a`
  background: #49ceb1;
  border-radius: 5px;
  height: 26px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  padding: 10px;
  color: white !important;
`

export const QuestionContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 40px;

  &:hover {
    ${QuestionLinkIcon} {
      display: block !important;
    }
  }
`

export const QuestionTitle = styled.span`
  margin-left: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  margin-right: 5px;
`

export const QuestionOpenIcon = styled(Icon).attrs<{ isOpen?: boolean }>(
  props => ({
    icon: props.isOpen ? minusIconGlyph : plusIconGlyph,
    size: 16,
    fill: '#49CEB1',
  }),
)<any>`
  flex-shrink: 0;
  cursor: pointer;
`

export const QuestionListContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const QuestionListTitle = styled(Flex)`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  width: 100%;
  justify-content: flex-start;
`

export const List = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
`

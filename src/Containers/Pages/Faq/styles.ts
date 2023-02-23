import styled, { css } from 'styled-components'

import { minusIconGlyph, plusIconGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Background = styled.div<{ image?: string }>`
  background-image: url('/static/images/main_bg.svg');
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-repeat: repeat;
    `}
`

export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
`

export const Title = styled(Flex).attrs({
  as: 'h1',
})`
  text-align: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #49ceb1;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 0;
`

export const SearchBlock = styled(Flex)`
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`

export const SearchTitle = styled(Flex)`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #071d40;
  width: 100%;
  justify-content: center;
`

export const CommentResponseError = styled.div`
  margin-top: 10px;
  font-size: 14px;
  line-height: 18px;
  color: rgb(255, 160, 140);
`

export const Content = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Section = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const SectionTitle = styled(Flex).attrs({
  as: 'h2',
})`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #071d40;
  width: 100%;
  justify-content: center;
`

export const SectionDescription = styled(Flex)`
  font-size: 16px;
  line-height: 24px;
  color: #071d40;
  justify-content: center;
  width: 100%;
`

export const SectionImages = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const SectionImageCont = styled(Flex)<{ center?: boolean }>`
  max-width: 470px;
  width: 100%;
  flex-wrap: wrap;

  ${props =>
    props.center &&
    css`
      max-width: 70%;
      width: 100%;
      margin: 0 auto;
    `}

  > div {
    align-self: flex-end;
  }
  .preview {
    object-fit: cover;
    width: 100%;
    height: 300px;
    border: 2px solid #d3dae8;
    box-sizing: border-box;
    border-radius: 5px;
  }
`

export const VideoWrap = styled(Flex)`
  width: 100%;
  height: 387px;
  font-size: 0;
  text-align: center;
  margin: 0 auto;
  position: relative;

  &:before {
    content: '';
    width: 1px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    margin-left: -1px;
  }
  video {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
`

export const SectionImageTitle = styled(Flex)`
  width: 100%;
  justify-content: center;
  font-size: 14px;
  line-height: 18px;
  color: #071d40;
`

export const CommentsWrapper = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const RelatedQuestionsWrap = styled(Flex)`
  background: #f7faff;
  border-radius: 10px;
  padding: 20px 17px;
  width: 330px;
  flex-wrap: wrap;
`

export const RelatedTitle = styled(Flex)`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #071d40;
  width: 100%;
  justify-content: center;
`

export const RelatedQuestion = styled(Flex).attrs({ as: 'a' })`
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d3dae8;
  &:nth-last-of-type {
    border-bottom: 0;
  }
`
export const RelatedQuestionTitle = styled(Flex)`
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: #071d40;
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

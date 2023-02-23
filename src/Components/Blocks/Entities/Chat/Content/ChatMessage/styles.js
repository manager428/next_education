import styled, { css } from 'styled-components'

import { editedMessageIconGlyph } from 'Assets/svg/chat'

import { Flex, Icon } from 'Components/UI'

export const Name = styled(Flex)`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  margin-bottom: 7px;
`
export const Message = styled(Flex)`
  font-size: 16px;
  color: #4f4f4f;
  background: #f3f5f9;
  border-radius: 20px 20px 20px 2px;
  padding: 10px 14px;
  display: inline-block;
  text-align: ${props => (props.incoming ? 'left' : 'right')};
  word-break: break-word;
  white-space: pre-wrap;
  line-height: 22px;
`

export const MessageWrap = styled(Flex)`
  position: relative;
  align-items: flex-end;
  display: ${props => (!props.incoming ? 'flex' : 'block')};
  flex-direction: column;
  margin-left: 14px;
  ${props =>
    props.incoming &&
    css`
      align-items: flex-start;
    `}

  .react-contextmenu-wrapper {
    position: relative;
  }
`

export const Time = styled(Flex)`
  color: #bdbdbd;
  margin-top: 6px;
`

export const Container = styled(Flex)`
  width: 100%;
  margin-bottom: 14px;
  justify-content: flex-start;
  ${props =>
    !props.incoming &&
    css`
      justify-content: flex-end;

      ${Message} {
        background: #49ceb1;
        border-radius: 20px 20px 2px 20px;
        color: #ffffff;
        text-align: left;
      }
      ${Time} {
        justify-content: flex-end;
      }
    `}
`

export const MessageWrapper = styled(Flex)`
  max-width: 70%;
`
export const StoryWrapper = styled(Flex)`
  width: 100%;
  margin-bottom: 20px;
  ${props =>
    !props.incoming &&
    css`
      justify-content: flex-end;
    `}
`

export const StoryInnerWrap = styled(Flex)`
  flex-direction: column;
  ${props =>
    props.incoming
      ? css`
          padding-left: 10px;
          border-left: 4px solid #e0e0e0;
          margin-left: 54px;
        `
      : css`
          border-right: 4px solid #e0e0e0;
          padding-right: 10px;
          align-items: flex-end;
        `}
`

export const StoryTitle = styled.div`
  color: #828282;
  margin-bottom: 10px;
`

export const StoryImage = styled.div`
  width: 120px;
  height: 215px;
  background-image: url(${props => props.story});
  background-size: cover;
  border-radius: 15px;
`

export const Avatar = styled.img`
  flex-shrink: 0;
  ${props =>
    props.fromBot !== undefined && props.fromBot
      ? css`
          width: 40px;
          height: 52px;
          align-self: flex-end;
        `
      : css`
          width: 40px;
          height: 40px;
          border-radius: 50%;
        `}
`

export const EditMessageIcon = styled(Icon).attrs({
  glyph: editedMessageIconGlyph,
  size: 16,
  fill: '#49CEB1',
})`
  position: absolute;
  bottom: 0;
  ${props =>
    props.incoming
      ? css`
          right: -25px;
        `
      : css`
          left: -25px;
        `}
`

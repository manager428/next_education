import styled, { css } from 'styled-components'

import SimpleBar from 'simplebar-react'

import {
  chatGlyph,
  descriptionGlyph,
  downloadGlyph,
  locationGlyph,
  maxUsersGlyph,
  studentsLevelGlyph,
  tagsGlyph,
  teachersGlyph,
  timeStartGlyph,
} from 'Assets/svg/calls'
import { deleteIconGlyph, editPencilGlyph } from 'Assets/svg/common'

import { Flex, Icon, Modal as ModalBase } from 'Components/UI'

import 'simplebar/dist/simplebar.min.css'

const modalContentHeight = '680px'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  display: flex;
  padding: 0 !important;
  max-width: 100% !important;
  /* width: 100%; */
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  border: 0 !important;
  margin: 0;

  &.view-call-modal {
    background-color: transparent !important;
  }

  .Modal {
    //background-color: transparent !important;
    border-radius: 0px !important;
    box-shadow: none !important;
    //margin: 0;
  }
`

export const Wrapper = styled(Flex)`
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  background-color: unset;
  justify-content: center;
  border: 0 !important;
  box-shadow: none !important;
`

export const ScrollContent = styled(SimpleBar)`
  max-height: 470px;
  min-height: 470px;
  height: 100%;

  .simplebar-track.simplebar-vertical {
    width: 6px;
  }

  .simplebar-content {
    padding: 6px 0px !important;
    padding-right: 15px !important;
    padding-left: 6px !important;
    height: fit-content;

    :after,
    :before {
      content: '';
    }
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;

    &:before {
      background: #d3dae8;
      opacity: 1;
      border: 0px solid #d3dae8;
      width: 6px;
      left: 0px;
    }
  }
`

export const EditCallScrollContent = styled(SimpleBar)`
  max-height: 642px;
  min-height: 642px;
  height: 100%;
  width: 100%;
  .simplebar-track.simplebar-vertical {
    width: 6px;
  }
  .simplebar-placeholder {
    display: none;
  }

  .simplebar-content {
    padding: 6px 0px !important;
    padding-right: 15px !important;
    padding-left: 6px !important;
    height: fit-content;
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;

    &:before {
      background: #d3dae8;
      opacity: 1;
      border: 0px solid #d3dae8;
      width: 6px;
      left: 0px;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 622px;
  min-height: ${modalContentHeight};
  position: relative;
  background-color: white;
  border-radius: 20px;
  width: 100%;

  padding: 30px 20px;
`

export const InnerContent = styled(Flex)`
  overflow-y: auto;
  height: 100%;
  max-height: 642px;
  width: 100%;
`

export const ChatContainer = styled(Flex)`
  margin-left: 30px;
  background-color: white;
  max-width: 330px;
  width: 100%;
  flex-wrap: wrap;
  border-radius: 20px;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  min-height: ${modalContentHeight};
`

export const CallTitle = styled(Flex)`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  padding-bottom: 4px;
  border-bottom: 2px solid #d3dae8;
  color: #071d40;
`

export const DetailsContent = styled(Flex)`
  width: 100%;
  height: 100%;
  position: relative;
`

export const TagsIcon = styled(Icon).attrs({
  icon: tagsGlyph,
  size: 20,
})``

export const TeachersIcon = styled(Icon).attrs({
  icon: teachersGlyph,
  size: 20,
})`
  fill: #d3dae8;
`

export const DescriptionIcon = styled(Icon).attrs({
  icon: descriptionGlyph,
  size: 20,
})``

export const StatisticIcon = styled(Icon).attrs({
  icon: studentsLevelGlyph,
  size: 14,
})``

export const TimeIcon = styled(Icon).attrs({
  icon: timeStartGlyph,
  size: 16,
})``

export const LocationIcon = styled(Icon).attrs({
  icon: locationGlyph,
  size: 16,
})``

export const MaxUsersGlyph = styled(Icon).attrs({
  icon: maxUsersGlyph,
  size: 20,
})``

export const SectionTitle = styled(Flex)`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #071d40;
`

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const DescriptionTitle = styled(Flex)`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #071d40;
`

export const DescriptionContent = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #071d40;
  width: 100%;
  margin-top: 6px;
  overflow-y: auto;
  word-break: break-word;
`

export const Tag = styled(Flex)`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 18px;
  color: #49ceb1;
  margin-right: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
`

export const AttachmentGlyph = styled(Icon).attrs({
  icon: downloadGlyph,
  size: 15,
  fill: '#D3DAE8',
})`
  margin-left: 10px;
`

export const DownloadAttachment = styled.a`
  border: 2px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 10px;
  color: #071d40;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  height: 34px;
  width: 190px;
  justify-content: center;
  box-shadow: none;
  padding: 0;
  background-color: white;
  cursor: pointer;
  text-decoration: none;
`

export const Footer = styled(Flex)`
  margin-top: auto;
  width: 100%;
  flex-wrap: wrap;
`

export const FooterMessage = styled(Flex)<{ align?: string }>`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #071d40;
  justify-content: flex-end;
  margin-top: 25px;

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
`

export const EditIcon = styled(Icon).attrs({
  icon: editPencilGlyph,
  size: 16,
})`
  fill: #8de1d1;
`

export const EditCallButton = styled(Flex).attrs({
  as: 'button',
})`
  color: #8de1d1;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border: 0px;
  box-shadow: none;
  background-color: transparent;
  align-items: center;
  cursor: pointer;
`

export const FormButton = styled(Flex).attrs({ as: 'button' })<{
  active?: boolean
}>`
  border: none;
  background: #d3dae8;
  border-radius: 5px;
  height: 40px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 14px;
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

export const EnterCallButton = styled.a`
  border: none;
  background: #ffa08c;
  border-radius: 5px;
  height: 40px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 14px;
  font-family: 'Nunito Sans', sans-serif;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`

export const ErrorsContainer = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #ffa08c;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  min-height: 20px;
  position: relative;
`

export const ChatTabs = styled(Flex)`
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.14);
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  padding: 16px 20px;
`

export const ChatTab = styled(Flex).attrs({
  as: 'button',
})<{ active?: boolean }>`
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
  box-shadow: none;
  background-color: white;
  border: 0px;
  align-items: center;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: #49ceb1;
    `}
`

export const ParticipantIcon = styled(Icon).attrs({
  icon: teachersGlyph,
  size: 24,
})<{ active?: boolean }>`
  fill: #bdbdbd;

  ${props =>
    props.active &&
    css`
      fill: #49ceb1;
    `}
`

export const ChatIcon = styled(Icon).attrs({
  icon: chatGlyph,
  size: 24,
})<{ active?: boolean }>`
  fill: #bdbdbd;

  ${props =>
    props.active &&
    css`
      fill: #49ceb1;
    `}
`

export const DeleteButton = styled(Icon).attrs({
  icon: deleteIconGlyph,
  size: 18,
})`
  cursor: pointer;
  fill: #ffa08c;
`

export const ParticipantContainer = styled(Flex)`
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  .delete-wrapper {
    display: none;
  }

  &:hover {
    .delete-wrapper {
      display: flex;
    }
  }
`

export const ParticipantAvatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`

export const ParticipantName = styled.a`
  width: 100%;
  color: #071d40;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  display: flex;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    margin-right: 10px;
  }
`

export const ParticipantNameWithoutLink = styled(Flex)`
  ${ParticipantName};

  span {
    margin-right: 10px;
  }
`

export const Location = styled(Flex)`
  width: 100%;
  color: #bdbdbd;
  font-size: 14px;
  line-height: 18px;
`

export const ParticipantsScroll = styled(SimpleBar)`
  overflow-y: auto;
  max-height: 492px;
  height: 100%;
  width: 100%;

  .simplebar-horizontal {
    display: none !important;
  }

  .simplebar-track.simplebar-vertical {
    width: 6px;
  }

  .simplebar-content {
    box-sizing: border-box;
    max-height: 487px;
    height: 100%;
    padding: 20px !important;

    :before,
    :after {
      display: none;
    }
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
    right: 15px;
    top: 20px !important;
    bottom: 20px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;

    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid #d3dae8;
      width: 4px;
      left: 0px !important;
    }
  }
`

export const ParticipantsTitle = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #828282;
  width: 100%;
  margin-bottom: 10px;
`

export const BrowserMessage = styled(Flex)`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  justify-content: center;

  a {
    margin-left: 5px;
    color: #5f9ee1;
    text-decoration: underline;
  }
`

export const CallImage = styled(Flex).attrs({ as: 'img' })`
  object-fit: cover;
  border-radius: 10px;
`

export const CopyLinkButton = styled(Flex).attrs({
  as: 'button',
})`
  padding: 6px 8px;
  text-align: center;
  background-color: #6e46ff;
  box-shadow: none;
  border-radius: 5px;
  border: 0px;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
  box-sizing: border-box;
  cursor: pointer;

  &:active {
    opacity: 0.7;
    transform: translateY(1px);
  }
`

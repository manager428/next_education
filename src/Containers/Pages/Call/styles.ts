import styled, { css } from 'styled-components'

import {
  downloadGlyph,
  locationGlyph,
  maxUsersGlyph,
  studentsLevelGlyph,
  teachersGlyph,
} from 'Assets/svg/calls'

import { Flex, Icon } from 'Components/UI'

export const Background = styled.div`
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
`

export const Container = styled(Flex)`
  max-width: 980px;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
  margin: 30px auto 0;
  background-color: transparent;
  position: relative;
  min-height: 570px;
  padding-bottom: 40px;
`

export const Content = styled(Flex)`
  flex-grow: 1;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
`

export const Sidebar = styled(Flex)`
  width: 330px;
  flex-shrink: 0;
  flex-wrap: wrap;

  color: #071d40;
`

export const ZoomContainer = styled(Flex)<{ visible?: boolean }>`
  display: none;
  z-index: 17000;
  ${({ visible }) =>
    visible &&
    css`
      display: block;
    `}
`

export const JitsiInfo = styled(Flex)`
  width: 100%;
  font-style: italic;
  font-size: 14px;
  line-height: 20px;
`

export const CallDescription = styled(Flex)`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #071d40;
  flex-wrap: wrap;

  > div > p:first-of-type {
    margin-top: 0px !important;
  }
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

export const CallType = styled(Flex)`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`

export const CallTitle = styled(Flex)`
  width: 100%;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
`

export const CallDate = styled(Flex)`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
`

export const StatisticIcon = styled(Icon).attrs({
  icon: studentsLevelGlyph,
  size: 14,
})``

export const LocationIcon = styled(Icon).attrs({
  icon: locationGlyph,
  size: 16,
})``

export const MaxUsersIcon = styled(Icon).attrs({
  icon: maxUsersGlyph,
  size: 20,
})``

export const TeachersIcon = styled(Icon).attrs({
  icon: teachersGlyph,
  size: 20,
})`
  fill: #d3dae8;
`

export const AttachmentGlyph = styled(Icon).attrs({
  icon: downloadGlyph,
  size: 15,
  fill: '#D3DAE8',
})`
  margin-left: 10px;
`

export const SectionTitle = styled(Flex)`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #071d40;

  span {
    margin-right: 5px;
  }
`

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 10px;
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

export const ErrorsContainer = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #ffa08c;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  min-height: 20px;
  justify-content: center;
  position: relative;
  align-items: center;
  align-self: center;
`

export const NativeLink = styled.a`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 25px;
  font-size: 14px;
  line-height: 18px;
  color: #49ceb1;
  justify-content: center;
  box-shadow: none;
  background-color: white;
  padding: 6px 10px;
  cursor: pointer;
`

export const HotkeysTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  color: #071d40;
`

export const Hotkey = styled(Flex)`
  font-size: 14px;
  line-height: 20px;
  color: #071d40;
`

import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import {
  callCalendarGlyph,
  ChatIconGlyph,
  FaqGlyph,
  FriendsGlyph,
  LogoSmall,
  NotificationIconGlyph,
  novakidRocket,
  teacherForumGlyph,
  teacherFriendsGlyph,
} from 'Assets/svg/common'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import { device } from 'Constants/media'

export const Container = styled(Flex)`
  width: 100%;
  justify-content: center;
  padding: 18px 0;
  background-color: #fff;
  box-shadow: 0 4px 10px #f3f5f9;
  position: sticky;
  top: 0;
  z-index: 99999999;
  min-height: 90px;

  @media (hover: none) {
    a:after {
      display: none;
    }
  }

  @media ${device.tablet} {
    min-height: auto;
    padding: 14px 0;
  }
`

export const Inner = styled(Flex)`
  max-width: 1160px;
  min-height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 32px;

  @media (max-width: 350px) {
    padding: 0 14px;
  }

  @media ${device.tablet} {
    min-height: auto;
  }
`

export const HomeLogoSmall = styled(Icon).attrs({
  icon: novakidRocket,
  width: 53,
  height: 48,
})`
  @media (max-width: 719px) {
    width: 32px;
    height: 28px;
  }
  @media (max-width: 350px) {
    width: 32px;
    height: 28px;
  }

  object-fit: contain;
`

export const HomeLogoSmallest = styled(Icon).attrs({
  icon: LogoSmall,
  width: 120,
  height: 32,
})`
  object-fit: contain;
`

export const HomeLogo = styled(Icon).attrs({
  icon: LogoSmall,
  width: 182,
  height: 38,
})`
  object-fit: contain;
`

export const NavLink = styled.a<{ selected?: boolean }>`
  color: ${themeGet('colors.graySecondary')};
  font-size: 18px;
  line-height: 23px;
  text-decoration: none;
  position: relative;
  &:hover {
    color: #6e46ff;
    :after {
      content: '';
      width: 100%;
      border-bottom: 2px solid #6e46ff;
      bottom: -6px;
      left: 0px;
      position: absolute;
    }
  }

  @media ${device.tablet} {
    padding-bottom: 0px;
  }

  ${props =>
    props.selected &&
    css`
      color: #6e46ff;
      :after {
        content: '';
        width: 100%;
        border-bottom: 2px solid #6e46ff;
        bottom: -6px;
        left: 0px;
        position: absolute;
      }
    `}
`

export const LinkWrapper = styled(Flex).attrs({
  as: 'a',
})`
  cursor: pointer;
  display: flex;
`

export const SignInLink = styled(LinkWrapper)`
  margin-left: 20px;
  text-align: center;
  color: ${themeGet('colors.orange')};
  text-decoration: none;
  font-size: 18px;
  line-height: 23px;

  @media ${device.tablet} {
    font-size: 16px;
  }
`

export const SignUpLink = styled(SignInLink)`
  margin-left: 20px;
  border: 1px solid ${themeGet('colors.orange')};
  border-radius: 100px;
  text-align: center;
  padding: 4px 10px;
  justify-content: center;
  flex-shrink: 0;

  @media ${device.tablet} {
    font-size: 16px;
    padding: 4px 10px;
    line-height: 24px;
  }
`

export const FaqLink = styled(Icon).attrs({
  icon: FaqGlyph,
  width: 30,
  height: 30,
})``

export const CallCalendarIcon = styled(Icon).attrs(
  (props: { highlighted?: boolean }) => ({
    icon: callCalendarGlyph,
    fill: props.highlighted ? '#49CEB1' : '#828282',
    width: 28,
    height: 30,
  }),
)<{ highlighted?: boolean }>`
  margin-left: 12px;

  @media screen and (max-width: 400px) {
    margin-left: 12px;
    width: 15.6px;
    height: 15.6px;
  }
  @media screen and (max-width: 350px) {
    margin-left: 12px;
    width: 15.6px;
    height: 15.6px;
  }
`

export const TeacherForumIcon = styled(Icon).attrs(
  (props: { highlighted?: boolean }) => ({
    icon: teacherForumGlyph,
    fill: props.highlighted ? '#49CEB1' : '#828282',
    width: 36,
    height: 36,
  }),
)<{ highlighted?: boolean }>``

export const FriendsIcon = styled(Icon).attrs(
  (props: { highlighted?: boolean }) => ({
    icon: FriendsGlyph,
    width: 40,
    height: 28,
    fill: props.highlighted ? '#49CEB1' : '#828282',
  }),
)<{
  highlighted?: boolean
}>`
  margin-left: 12px;

  @media screen and (max-width: 719px) {
    display: none;
  }
`

export const ChatIcon = styled(Icon).attrs(
  (props: { highlighted?: boolean }) => ({
    icon: ChatIconGlyph,
    width: 34,
    height: 28,
    fill: props.highlighted ? '#49CEB1' : '#828282',
  }),
)<{ highlighted?: boolean }>`
  margin-left: 12px;

  @media screen and (max-width: 719px) {
    margin-left: 15.6px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 12px;
    width: 15.6px;
    height: 15.6px;
  }
  @media screen and (max-width: 350px) {
    margin-left: 12px;
    width: 15.6px;
    height: 15.6px;
  }
`

export const NotificationIcon = styled(Icon).attrs(
  (props: { highlighted?: boolean }) => ({
    icon: NotificationIconGlyph,
    width: 24,
    height: 28,
    marginLeft: 12,
    fill: props.highlighted ? '#49CEB1' : '#828282',
  }),
)<{ highlighted?: boolean }>`
  margin-left: 12px;

  @media screen and (max-width: 719px) {
    margin-left: 15.6px;
  }

  @media screen and (max-width: 350px) {
    margin-left: 12px;
    width: 15.6px;
    height: 15.6px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 12px;
    width: 15.6px;
    height: 15.6px;
  }
`

export const TeacherFriendsIcon = styled(Icon).attrs(
  (props: { highlighted?: boolean }) => ({
    icon: teacherFriendsGlyph,
    width: 38,
    height: 38,
    fill: props.highlighted ? '#49CEB1' : '#828282',
  }),
)<{ highlighted?: boolean }>``

export const ActionLink = styled(Flex).attrs({
  as: 'a',
})<{ highlighted?: boolean }>`
  background-repeat: no-repeat;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: ${themeGet('colors.graySecondary')};
  text-decoration: none;
  margin-left: 12px;

  @media screen and (max-width: 719px) {
    display: none;
  }
  ${props =>
    props.highlighted &&
    css`
      color: ${themeGet('colors.green')};
    `}
`

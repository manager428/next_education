import styled, { css } from 'styled-components'

import { emptyNotificationsArt } from 'Assets/svg/notifications'

import { Flex, Icon } from 'Components/UI'

export const Background = styled(Flex)`
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
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 980px;
  margin: 40px auto 0;
  padding-bottom: 40px;
`

export const Content = styled(Flex)`
  width: 738px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  min-height: 700px;
`

export const Sidebar = styled(Flex)`
  align-self: flex-start;
  border: 2px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffffff;
  width: 222px;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 16px;
`

export const SidebarLink = styled.a<{ active?: boolean }>`
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  padding: 8px 14px;
  background: transparent;

  ${props =>
    props.active &&
    css`
      background: #6e46ff;
      color: #ffffff;
    `};
`

export const NoNotifications = styled(Icon).attrs({
  icon: emptyNotificationsArt,
  width: 612,
  height: 400,
})``

export const Title = styled(Flex)`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #071d40;
  justify-content: center;
  width: 100%;
`

export const CallFilter = styled.a<{ active?: boolean }>`
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  background: transparent;
  margin-right: 20px;
  text-decoration: none;

  ${props =>
    props.active &&
    css`
      color: #6e46ff;
    `};
`

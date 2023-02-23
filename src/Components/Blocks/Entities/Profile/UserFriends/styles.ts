import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`
export const FriendsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 320px;
  overflow: hidden;
  margin-top: 6px;
  width: 100%;
`
export const ViewAllLink = styled.a`
  text-decoration: none;
`
export const FriendItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14px;
  color: #333333;
  text-decoration: none;
  width: calc(100% / 3);
  &:hover {
    opacity: 0.8;
  }
`
export const FriendName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  margin-top: 8px;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Dot = styled.div`
  display: inline-block;
  width: 4px;
  height: 4px;
  background: ${themeGet('colors.primary')};
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
`

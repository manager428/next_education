import styled from 'styled-components'

import { closeIconGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f3f5f9;
  border-radius: 14px 0px 0px 0px;
  transition: all 0.3s ease;
  max-width: 340px;

  .simplebar-content {
    padding-right: 20px !important;
    padding-left: 20px !important;
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
      border-radius: 4px;
      border: 1px solid #d3dae8;
    }
  }
`

export const CloseButton = styled(Icon).attrs({
  icon: closeIconGlyph,
  size: 24,
})`
  position: absolute;
  top: 14px;
  right: 26px;
  cursor: pointer;
  fill: #bdbdbd;

  &:hover {
    fill: #d3dae8;
  }
`

export const AvatarContainer = styled(Flex)`
  width: 100%;
  margin-top: 14px;
  font-family: 'Nunito Sans';
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`

export const Avatar = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  object-fit: cover;
`

export const Name = styled(Flex)`
  font-weight: 500;
  font-size: 20px;
  color: #333333;
  margin-top: 14px;
  width: 100%;
  text-align: center;
`
export const EnglishLevel = styled(Flex)`
  font-weight: 400;
  font-size: 20px;
  color: #828282;
  margin-top: 8px;
`

export const Section = styled(Flex)`
  width: 100%;
  background: #ffffff;
  border-radius: 14px;
  padding: 10px 14px;
  font-family: 'Nunito Sans';
  align-items: flex-start;
  flex-wrap: wrap;

  img {
    width: 100%;
  }
`

export const SectionTitle = styled(Flex)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  margin-bottom: 6px;
`

export const ListTitle = styled(Flex)`
  font-weight: bold;
  font-size: 16px;
  color: #333333;
`

export const ListDescription = styled(Flex)`
  display: inline-block;
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
`

export const ReadMoreButton = styled(Flex)`
  color: #49ceb1;
  font-size: 14px;
  line-height: 18px;
  margin-top: 5px;
  cursor: pointer;
`

export const CharacterName = styled(Flex)`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  color: #333333;
  width: 100%;
`

export const CharacterAge = styled(Flex)`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #828282;
  margin-top: 8px;
  width: 100%;
`

export const GroupAvatarContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  flex-wrap: wrap;
  font-family: 'Nunito Sans';
  margin-bottom: 20px;
`

export const GroupUsersContainer = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  font-family: 'Nunito Sans', sans-serif;
`

export const User = styled(Flex)`
  width: 100%;
  align-items: flex-start;
`

export const UserName = styled(Flex)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
`

export const TeacherRole = styled(Flex)`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 15px;
  color: #49ceb1;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  padding: 4px 8px;
  position: absolute;
  right: 0;
  top: 0;
`

export const UserContentWrapper = styled(Flex)`
  display: flex;
  flex-grow: 1;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 9px;
  flex-direction: column;
  justify-content: space-between;
  min-height: 50px;
  position: relative;
`

export const UserCountry = styled(Flex)`
  color: #bdbdbd;
  font-size: 14px;
  width: 100%;
  margin-top: 5px;
`
export const UserGroupAvatarWrapper = styled(Flex)`
  position: relative;
  widht: 40px;
  height: 40px;
  margin-right: 18px;
`

export const UserGroupAvatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

export const OnlineIndicator = styled.div<{
  online?: boolean
}>`
  margin-left: 7px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  width: 8px;
  height: 8px;
  top: -1px;
  right: 0px;
  position: absolute;
  background-color: ${props => (props.online ? '#49CEB1' : '#FFA08C')};
`

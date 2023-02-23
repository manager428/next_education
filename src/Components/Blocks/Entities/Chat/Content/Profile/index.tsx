import React, { useState } from 'react'

import SimpleBarReact from 'simplebar-react'

import get from 'lodash/get'
import isNil from 'lodash/isNil'
import map from 'lodash/map'

import { groupAvatarGlyph } from 'Assets/svg/chat'

import { Flex, Icon } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { CHAT_USERS_TYPE } from 'Constants/chat'

import _ from 'Services/I18n'

import { getCharacterSource } from 'Utils/character'
import { getMaxBlockHeight } from 'Utils/chat'

import {
  Avatar,
  AvatarContainer,
  CharacterAge,
  CharacterName,
  CloseButton,
  Container,
  EnglishLevel,
  GroupAvatarContainer,
  GroupUsersContainer,
  ListDescription,
  ListTitle,
  Name,
  OnlineIndicator,
  ReadMoreButton,
  Section,
  SectionTitle,
  TeacherRole,
  User,
  UserContentWrapper,
  UserCountry,
  UserGroupAvatar,
  UserGroupAvatarWrapper,
  UserName,
} from './styles'

const Profile: React.FC<any> = React.memo(
  ({ onCloseClick, isLoading, selectedUserProfile, type }) => {
    const [isReadMore, toggleReadMore] = useState(false)

    const fullName = get(selectedUserProfile, 'user.full_name', '')
    const englishLevel = get(selectedUserProfile, 'user.english_level', '')
    const avatar = get(selectedUserProfile, 'user.avatar', '')
    const country = get(selectedUserProfile, 'user.country', '')
    const bio = get(selectedUserProfile, 'user.bio', '')

    const interests = get(selectedUserProfile, 'user.basic_interests', '')
    const parsedInterests = isNil(interests) ? [] : interests.split(', ')

    const character = get(selectedUserProfile, 'monster')
    const characterSource = getCharacterSource(character)
    const characterName = get(character, 'name')
    const characterAge = get(character, 'age')

    const handleReadMore = () => {
      toggleReadMore(!isReadMore)
    }

    const renderProfileDescription = description => {
      if (isReadMore) return description

      return description.length > 100 ? (
        <Flex flexWrap="wrap">
          `{description.substring(0, 100)}...`
          <ReadMoreButton onClick={handleReadMore}>
            {!isReadMore && _('buttons.readMore')}
          </ReadMoreButton>
        </Flex>
      ) : (
        <>{description}</>
      )
    }

    const renderUserProfile = () => (
      <Flex
        flexWrap="wrap"
        height="100%"
        justifyContent="center"
        pb={20}
        width={1}
      >
        <AvatarContainer mb="14px">
          <Avatar src={avatar} />
          <Name>{fullName}</Name>
          <EnglishLevel>{englishLevel}</EnglishLevel>
        </AvatarContainer>

        <Section mb="14px">
          <Flex alignItems="center">
            <ListTitle>{_('general.country')}: </ListTitle>
            <ListDescription> {country}</ListDescription>
          </Flex>
        </Section>

        {!isNil(bio) && bio.length > 0 && (
          <Section mb="14px">
            <SectionTitle>{_('general.about')}</SectionTitle>
            <Flex color="#828282" fontSize="18px">
              {renderProfileDescription(bio)}
            </Flex>
          </Section>
        )}

        <Section mb="14px">
          <SectionTitle>{_('general.interests')}</SectionTitle>
          <Flex flexWrap="wrap">
            {map(parsedInterests, item => (
              <Flex
                color="#828282"
                fontSize="16px"
                key={item}
                lineHeight="22px"
                mr="10px"
              >
                # {item}
              </Flex>
            ))}
          </Flex>
        </Section>

        {characterName && (
          <Section>
            <CharacterName>{characterName}</CharacterName>
            <CharacterAge>{characterAge} days old</CharacterAge>
            <img alt="character" src={characterSource?.src} />
          </Section>
        )}
      </Flex>
    )

    const renderTeacherProfile = () => (
      <Flex flexWrap="wrap" height="100%" justifyContent="center" width={1}>
        <AvatarContainer mb="14px">
          <Avatar src={avatar} />
          <Flex flexGrow={1} justifyContent="center" mt="14px;">
            <TeacherRole style={{ position: 'static' }}>Teacher</TeacherRole>
          </Flex>
          <Name>{fullName}</Name>
          <EnglishLevel>{englishLevel}</EnglishLevel>
        </AvatarContainer>
        <Section mb="14px">
          <Flex alignItems="center">
            <ListTitle>{_('general.country')}: </ListTitle>
            <ListDescription>{country}</ListDescription>
          </Flex>
        </Section>
      </Flex>
    )

    const renderGroupProfile = () => (
      <Flex flexWrap="wrap" height="100%" justifyContent="center" width={1}>
        <GroupAvatarContainer>
          <Icon icon={groupAvatarGlyph} size={124} />
          <Name>{selectedUserProfile?.name} Chat</Name>
        </GroupAvatarContainer>
        <GroupUsersContainer>
          {map(selectedUserProfile?.students, user => {
            const name = get(user, 'full_name', '')
            const countryName = get(user, 'country', '')
            const isOnline =
              get(user, 'user_online_status', 'offline') === 'online'
            const userAvatar = get(user, 'avatar', '')

            return (
              <User key={user.id} mb={24}>
                <UserGroupAvatarWrapper>
                  <UserGroupAvatar src={userAvatar} />
                  <OnlineIndicator online={isOnline} />
                </UserGroupAvatarWrapper>
                <UserContentWrapper>
                  <UserName>{name}</UserName>
                  <UserCountry>{countryName}</UserCountry>
                </UserContentWrapper>
              </User>
            )
          })}
        </GroupUsersContainer>
      </Flex>
    )

    return (
      <Container>
        {isLoading ? (
          <Flex
            alignItems="center"
            flex={1}
            flexDirection="column"
            justifyContent="center"
          >
            <Loader />
          </Flex>
        ) : (
          <SimpleBarReact style={{ maxHeight: `${getMaxBlockHeight()}px` }}>
            <Flex onClick={() => onCloseClick()}>
              <CloseButton />
            </Flex>

            {type === CHAT_USERS_TYPE.TEACHER && renderTeacherProfile()}

            {(type === CHAT_USERS_TYPE.PENPAL ||
              type === CHAT_USERS_TYPE.FRIEND) &&
              renderUserProfile()}

            {type === CHAT_USERS_TYPE.CLASS && renderGroupProfile()}
          </SimpleBarReact>
        )}
      </Container>
    )
  },
)

export default Profile

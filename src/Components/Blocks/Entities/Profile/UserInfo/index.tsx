import React from 'react'

import Link from 'next/link'

import { Element } from 'Components/UI'

import {
  Avatar,
  Name,
  SettingsIcon,
  TextField,
  Wrap,
} from 'Components/Blocks/Entities/Profile/UserInfo/styles'

import { PRIVATE_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

import { Props } from './types'

const UserInfo: React.FC<Props> = ({
  country,
  fullname,
  avatar,
  englishLevel,
  userRole,
  hasSettings,
}) => (
  <Wrap padding="8px 0px" width={1}>
    {hasSettings && (
      <Link href={PRIVATE_PATHS.SETTINGS} passHref>
        <a>
          <SettingsIcon />
        </a>
      </Link>
    )}

    <Avatar as="img" mb="14px" src={avatar} />

    {userRole && (
      <Element color={theme.colors.green} fontSize="16px">
        {userRole}
      </Element>
    )}

    <Name mt="14px">{fullname}</Name>

    {country && <TextField mt="14px">{country}</TextField>}

    {englishLevel && <TextField mt="14px"> {englishLevel}</TextField>}
  </Wrap>
)

export default UserInfo

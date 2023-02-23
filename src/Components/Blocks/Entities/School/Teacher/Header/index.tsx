import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import map from 'lodash/map'

import { Element, Flex, Loader } from 'Components/UI'

import { SCHOOL_PATHS } from 'Constants/paths'

import useLocationQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'
import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'

import { theme } from 'Theme'

import { Avatar, BackButton, StyledLink } from './styles'

const LINKS = [
  {
    label: 'Students',
    path: (teacherId: number) => SCHOOL_PATHS.TEACHER_STUDENTS(teacherId),
  },
  {
    label: 'Classrooms',
    path: (teacherId: number) => SCHOOL_PATHS.TEACHER_CLASSROOMS(teacherId),
  },
]

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  const router = useRouter()
  const locationParams = useLocationQueryParams()

  const teacherId = locationParams.teacherId ? +locationParams.teacherId : 0

  const { data, isLoading, error } = useSwrRequest<IProfileResponse>({
    url: PROFILE_API_PATHS.details(teacherId),
  })

  function handleGoBack(e) {
    e.preventDefault()
    router.back()
  }

  function renderLinks() {
    const links = map(LINKS, link => (
      <Link href={link.path(teacherId)} key={link.label} passHref>
        <StyledLink active={router.asPath === link.path(teacherId)}>
          {link.label}
        </StyledLink>
      </Link>
    ))

    return (
      <Flex mt={28} width={1}>
        {links}
      </Flex>
    )
  }

  if (error) {
    return (
      <Flex
        alignSelf="center"
        color={theme.colors.red}
        justifyContent="center"
        margin="0 auto"
        width={1}
      >
        {map(error?.data?.errors, err => err).join(' ')}
      </Flex>
    )
  }

  return (
    <Flex width={1}>
      {isLoading ? (
        <Loader />
      ) : (
        <Flex flexWrap="wrap" justifyContent="space-between" width={1}>
          <Flex alignItems="center">
            <Avatar src={data?.profile?.avatar} />
            <Element
              color={theme.colors.green}
              fontSize="20px"
              fontWeight={600}
              ml="14px"
            >
              {data?.profile?.full_name}
            </Element>

            <Element fontSize="20px" fontWeight={600} ml="14px">
              {title}
            </Element>
          </Flex>
          <Flex alignItems="center">
            <BackButton
              color={theme.colors.graySecondary}
              width="100px"
              onClick={handleGoBack}
            >
              Go Back
            </BackButton>
          </Flex>

          {renderLinks()}
        </Flex>
      )}
    </Flex>
  )
}

export default Header

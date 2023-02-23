import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import map from 'lodash/map'

import { Tab } from 'Containers/Pages/School/Manage/styles'

import { Flex } from 'Components/UI'

import { SCHOOL_PATHS } from 'Constants/paths'

const LINKS = [
  {
    label: 'Overview',
    path: SCHOOL_PATHS.MANAGE,
  },
  {
    label: 'Teachers',
    path: SCHOOL_PATHS.TEACHERS,
  },
  {
    label: 'Classrooms',
    path: SCHOOL_PATHS.CLASSROOMS,
  },
  {
    label: 'Students',
    path: SCHOOL_PATHS.STUDENTS,
  },
]

const ManageLinks = () => {
  const router = useRouter()

  function renderManageLinks() {
    const links = map(LINKS, link => (
      <Link href={link.path} key={link.label} passHref>
        <Tab active={router.pathname === link.path}>{link.label}</Tab>
      </Link>
    ))

    return <Flex width={1}>{links}</Flex>
  }

  return renderManageLinks()
}

export default ManageLinks

import React, { useCallback, useRef } from 'react'

import Link from 'next/link'

import map from 'lodash/map'

import { dialogueIconGlyph } from 'Assets/svg/calls'
import { phoneGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

import {
  Button,
  Container,
  Inner,
  LinkButton,
  RelativeContainer,
  Tab,
} from 'Components/Blocks/Entities/Calls/Header/styles'

import { CALL_ENUM, CALL_TABS } from 'Constants/calls'
import { PRIVATE_PATHS } from 'Constants/paths'

type Props = {
  selected: string
  onSelectTab: (tab: string) => void
  onSelectCall: (call: CALL_ENUM) => void
}

const Header: React.FC<Props> = ({ selected, onSelectTab, onSelectCall }) => {
  const ref = useRef(null)

  const handleShowDropdown = useCallback(() => {
    onSelectCall(CALL_ENUM.GROUP_CALLS)
  }, [])

  const renderTabs = useCallback(
    () =>
      map(CALL_TABS, (tab, index) => (
        <Tab
          green={selected === tab.value}
          key={tab.label}
          mr={index === CALL_TABS.length - 1 ? 0 : 22}
          onClick={() => onSelectTab(tab.value)}
        >
          {tab.label}
        </Tab>
      )),
    [selected],
  )

  return (
    <Container>
      <Inner>
        <Flex>{renderTabs()}</Flex>
        <Flex ml={50}>
          <Link href={PRIVATE_PATHS.TEACHER_FORUM} passHref>
            <LinkButton>
              <Icon
                height={16}
                icon={dialogueIconGlyph}
                width={18}
                wrapperStyles={{ mr: '12px' }}
              />
              Meet other Teachers
            </LinkButton>
          </Link>

          <RelativeContainer ml={20} ref={ref}>
            <Button color="#49CEB1" onClick={handleShowDropdown}>
              <Icon
                fill="#49CEB1"
                height={16}
                icon={phoneGlyph}
                width={16}
                wrapperStyles={{ mr: '12px' }}
              />
              Create New Call
            </Button>
          </RelativeContainer>
        </Flex>
      </Inner>
    </Container>
  )
}

export default Header

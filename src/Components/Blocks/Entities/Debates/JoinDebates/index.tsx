import React, { useCallback, useState } from 'react'

import {
  CreateButton,
  DebatesLogo,
  Description,
  Relative,
  Title,
} from 'Containers/Pages/Debates/styles'

import { Flex } from 'Components/UI'

import { NotAllowedAction, SignIn } from 'Components/Blocks/Popups'

import useRole from 'Hooks/useRole'

import { useScopedI18n } from 'Services/I18n'

type Props = {
  onCreate: () => void
}

const JoinDebates: React.FC<Props> = ({ onCreate }) => {
  const s = useScopedI18n('debates')
  const { isParent, isLoggedIn, isSchoolAdmin } = useRole()

  const [isShowSignIn, setShowSignIn] = useState(false)
  const [isShowAccessPopup, setShowAccessPopup] = useState(false)

  const handleCreate = useCallback(() => {
    if (isParent || isSchoolAdmin) {
      setShowAccessPopup(true)
      return
    }

    if (isLoggedIn) {
      onCreate()
    } else {
      setShowSignIn(true)
    }
  }, [isLoggedIn, isParent])

  return (
    <Flex alignItems="flex-start" justifyContent="space-between" width={1}>
      <Relative flexWrap="wrap" width={500}>
        <Title width={1}>{s('joinDebates')}</Title>
        <Description mt={16} width={1}>
          {s('description')}
        </Description>

        <CreateButton mt={38} onClick={handleCreate}>
          + {s('createButton')}
        </CreateButton>

        {isShowAccessPopup && (
          <NotAllowedAction
            left="40%"
            top="75%"
            onClose={() => setShowAccessPopup(false)}
          />
        )}

        {isShowSignIn && (
          <SignIn
            isOpen={isShowSignIn}
            left="40%"
            top="75%"
            onClose={() => setShowSignIn(false)}
          />
        )}
      </Relative>
      <Flex>
        <DebatesLogo />
      </Flex>
    </Flex>
  )
}

export default JoinDebates

import React, { useCallback, useRef, useState } from 'react'

import { Button } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'

import { useScopedI18n } from 'Services/I18n'

import {
  Container,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  RequestButton,
  WhiteButtonText,
  Wrap,
} from './styles'

type Props = {
  onResetPassword: () => void
  onDeleteChild: () => void
}

const OwnStudentMenu: React.FC<Props> = ({
  onResetPassword,
  onDeleteChild,
}) => {
  const s = useScopedI18n('profile.sidebar')
  const ref = useRef(null)

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  useOutsideClick({ ref, onClick: () => setIsMenuVisible(false) })

  const handleResetClick = useCallback(() => {
    onResetPassword()
    setIsMenuVisible(false)
  }, [])

  const handleDeleteChildClick = useCallback(() => {
    onDeleteChild()
    setIsMenuVisible(false)
  }, [])

  const handleToggleMenu = useCallback(() => {
    setIsMenuVisible(prevState => !prevState)
  }, [isMenuVisible])

  return (
    <Wrap>
      <Container ref={ref}>
        <RequestButton>{s('yourChild')}</RequestButton>
        <MenuButton onClick={handleToggleMenu}>
          <MenuIcon />
        </MenuButton>

        {isMenuVisible && (
          <Menu>
            <MenuItem onClick={handleResetClick}>{s('resetPassword')}</MenuItem>
            <MenuItem onClick={handleDeleteChildClick}>
              {s('deleteChildAccount')}
            </MenuItem>
          </Menu>
        )}
      </Container>

      <Button green mt="14px" onClick={handleResetClick}>
        <WhiteButtonText>{s('changePassword')}</WhiteButtonText>
      </Button>
    </Wrap>
  )
}

export default OwnStudentMenu

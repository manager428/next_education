import React, { useEffect, useRef, useState } from 'react'
import usePortal from 'react-useportal'
import PropTypes from 'prop-types'

import Link from 'next/link'

import { AUTH_PATHS } from 'Constants/paths'

import { useScopedI18n } from 'Services/I18n'

import { Logo, Title, Wrapper } from './styles'

const SignIn = ({
  isOpen,
  top,
  left,
  right,
  bottom,
  onClose,
  position,
  portal,
}) => {
  const s = useScopedI18n('modals.signIn')
  const { Portal } = usePortal()
  const [isVisible, setVisible] = useState(isOpen)
  const wrapperRef = useRef(null)

  const useOutsideClick = () => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (wrapperRef && !wrapperRef.current?.contains(event.target)) {
          setVisible(false)
          onClose()
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])
  }
  useOutsideClick(wrapperRef)

  if (!isVisible) return null

  const renderComponent = () => (
    <Wrapper
      bottom={bottom}
      left={left}
      position={position}
      ref={wrapperRef}
      right={right}
      top={top}
    >
      <Title>
        {s('please')}{' '}
        <Link href={AUTH_PATHS.SIGN_IN} passHref>
          <a>{s('signIn')}</a>
        </Link>{' '}
        {s('toContinue')}
      </Title>
      <Logo />
    </Wrapper>
  )

  if (portal) {
    return <Portal>{renderComponent()}</Portal>
  }

  return renderComponent()
}

SignIn.defaultProps = {
  portal: false,
  position: 'absolute',
  top: 'auto',
  left: 'auto',
  right: 'auto',
  bottom: 'auto',

  onClose: () => null,
}

SignIn.propTypes = {
  portal: PropTypes.bool,
  position: PropTypes.string,
  bottom: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  left: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  onClose: PropTypes.func,
}

export default SignIn

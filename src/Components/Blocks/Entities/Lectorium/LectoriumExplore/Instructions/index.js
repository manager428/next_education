import React, { useState } from 'react'
import PropTypes from 'prop-types'

import InnerHTML from 'dangerously-set-html-content'

import { SignIn } from 'Components/Blocks/Popups'

import _ from 'Services/I18n'

import { Button, ButtonWrapper, Container, Content, Title } from './styles'

const Instructions = ({ passed, description, onRead, isLogged, title }) => {
  const [isShowSignIn, setShowSignIn] = useState(false)

  const handleCloseSignIn = () => {
    setShowSignIn(false)
  }

  const handleRead = () => {
    if (!isLogged) {
      setShowSignIn(true)
      return
    }
    onRead()
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <InnerHTML html={description} />
      </Content>
      <ButtonWrapper justifyContent="center" width={1}>
        {passed ? (
          <Button active>{_('buttons.gotIt')}</Button>
        ) : (
          <>
            <Button onClick={handleRead}>{_('buttons.gotIt')}</Button>
            {isShowSignIn && (
              <SignIn
                isOpen
                left="390px"
                top="55px"
                onClose={handleCloseSignIn}
              />
            )}
          </>
        )}
      </ButtonWrapper>
    </Container>
  )
}

Instructions.propTypes = {
  description: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  passed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onRead: PropTypes.func.isRequired,
}
export default Instructions

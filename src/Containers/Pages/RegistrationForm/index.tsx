import React from 'react'

import { createGlobalStyle } from 'styled-components'

import { ContactForm } from 'Components/Blocks/Forms'
import Head from 'Components/Blocks/Head'

import { Background, Container } from './styles'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: unset;
  }
`
const RegistrationForm: React.FC = () => (
  <Background>
    <Head description="Registration Form" title="Registration Form | iDialogue">
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1"
        name="viewport"
      />
    </Head>

    <GlobalStyle />

    <Container>
      <ContactForm />
    </Container>
  </Background>
)
export default RegistrationForm

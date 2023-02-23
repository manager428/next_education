import React, { useCallback } from 'react'

import { NextPage } from 'next'

import Footer from 'Containers/Pages/Landing/Footer'
import {
  EnglishForEducators,
  RussianForEducators,
} from 'Containers/Pages/Landing/Languages'
import { Container } from 'Containers/Pages/Landing/styles'

import Header from 'Components/Blocks/Entities/Landing/Header'
import Head from 'Components/Blocks/Head'

import useLocale from 'Hooks/useLocale'

const ForEducators: NextPage = () => {
  const locale = useLocale()

  const renderLandingByLanguage = useCallback(() => {
    switch (locale) {
      case 'ru':
        return <RussianForEducators />
      default:
        return <EnglishForEducators />
    }
  }, [locale])

  return (
    <Container>
      <Head description="For Educators" title="iDialogue | For Educators" />

      <Header />

      {renderLandingByLanguage()}

      <Footer />
    </Container>
  )
}

export default ForEducators

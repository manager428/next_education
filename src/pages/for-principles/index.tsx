import React, { useCallback } from 'react'

import { NextPage } from 'next'

import Footer from 'Containers/Pages/Landing/Footer'
import {
  EnglishForPrinciles,
  RussianForPrinciples,
} from 'Containers/Pages/Landing/Languages'
import { Container } from 'Containers/Pages/Landing/styles'

import Header from 'Components/Blocks/Entities/Landing/Header'
import Head from 'Components/Blocks/Head'

import useLocale from 'Hooks/useLocale'

const ForPrinciples: NextPage = () => {
  const locale = useLocale()

  const renderLandingByLanguage = useCallback(() => {
    switch (locale) {
      case 'ru':
        return <RussianForPrinciples />
      default:
        return <EnglishForPrinciles />
    }
  }, [locale])

  return (
    <Container>
      <Head description="For Principles" title="iDialogue | For Principles" />

      <Header />

      {renderLandingByLanguage()}

      <Footer />
    </Container>
  )
}

export default ForPrinciples

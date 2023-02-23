import React, { useCallback } from 'react'

import { NextPage } from 'next'

import Footer from 'Containers/Pages/Landing/Footer'
import {
  EnglishForParents,
  RussianForParents,
} from 'Containers/Pages/Landing/Languages'
import { Container } from 'Containers/Pages/Landing/styles'

import Header from 'Components/Blocks/Entities/Landing/Header'
import Head from 'Components/Blocks/Head'

import useLocale from 'Hooks/useLocale'

const ForParents: NextPage = () => {
  const locale = useLocale()

  const renderLandingByLanguage = useCallback(() => {
    switch (locale) {
      case 'ru':
        return <RussianForParents />
      default:
        return <EnglishForParents />
    }
  }, [locale])

  return (
    <Container>
      <Head description="For Parents" title="iDialogue | For Parents" />

      <Header />

      {renderLandingByLanguage()}

      <Footer />
    </Container>
  )
}

export default ForParents

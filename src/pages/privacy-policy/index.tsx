import React, { useCallback } from 'react'

import { NextPage } from 'next'

import { Container } from 'Containers/Pages/Landing/styles'
import { English, Russian } from 'Containers/Pages/PrivacyPolicy'

import Head from 'Components/Blocks/Head'

import useLocale from 'Hooks/useLocale'

const Privacy: NextPage = () => {
  const locale = useLocale()

  const renderByLanguage = useCallback(() => {
    switch (locale) {
      case 'ru':
        return <Russian />
      default:
        return <English />
    }
  }, [locale])

  return (
    <Container>
      <Head description="Privacy Policy" title="iDialogue | Privacy Policy" />

      {renderByLanguage()}
    </Container>
  )
}

export default Privacy

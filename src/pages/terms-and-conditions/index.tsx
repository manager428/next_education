import React, { useCallback } from 'react'

import { NextPage } from 'next'

import { Container } from 'Containers/Pages/Landing/styles'
import { English, Russian } from 'Containers/Pages/TermsAndConditions'

import Head from 'Components/Blocks/Head'

import useLocale from 'Hooks/useLocale'

const TermsAndConditions: NextPage = () => {
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
      <Head description="Terms and Conditions" title="Terms and Conditions" />

      {renderByLanguage()}
    </Container>
  )
}

export default TermsAndConditions

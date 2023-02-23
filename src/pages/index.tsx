import React, { useCallback } from 'react'

import { NextPage, NextPageContext } from 'next'
import Router from 'next/router'

import { ogLandingImage } from 'Assets/images/og'

import Footer from 'Containers/Pages/Landing/Footer'
import { English, Russian } from 'Containers/Pages/Landing/Languages'
import { Container } from 'Containers/Pages/Landing/styles'

import Header from 'Components/Blocks/Entities/Landing/Header'
import FollowUs from 'Components/Blocks/FollowUs'
import Head from 'Components/Blocks/Head'

import { MEDIA_SIZES } from 'Constants/media'
import { PRIVATE_PATHS } from 'Constants/paths'

import useLocale from 'Hooks/useLocale'

import Cookie, { CookiesKeys } from 'Services/Cookies'

import { Media } from 'Theme'

const Landing: NextPage = () => {
  const locale = useLocale()

  const renderLandingByLanguage = useCallback(() => {
    switch (locale) {
      case 'ru':
        return <Russian />
      default:
        return <English />
    }
  }, [locale])

  return (
    <Container>
      <Head
        description="An award-winning platform connecting students from 160 countries for cultural exchange and collaboration. It enables educators to engage and motivate students in online, blended, and face-to-face courses by providing them with tools to conduct cultural exchanges, collaborate with other classrooms globally, and complement classes with virtual field trips and live sessions with guest speakers."
        ogImage={ogLandingImage.src}
        title="iDialogue | Collaborative Learning Platform"
      >
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1"
          name="viewport"
        />
      </Head>

      <Header />

      {renderLandingByLanguage()}

      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <FollowUs />
      </Media>

      <Footer />
    </Container>
  )
}

Landing.getInitialProps = async (ctx: NextPageContext) => {
  // Redirect auth users to /home

  const auth = Cookie.getCookie(ctx, CookiesKeys.auth)

  if (auth && ctx.res) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: PRIVATE_PATHS.HOME })
      ctx.res.end()
    } else {
      await Router.push(PRIVATE_PATHS.HOME)
    }
  }

  return { auth }
}

export default Landing

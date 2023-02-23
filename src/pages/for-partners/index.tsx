import React from 'react'

import { NextPage } from 'next'

import Footer from 'Containers/Pages/Landing/Footer'
import ForPartnersContainer from 'Containers/Pages/Landing/ForPartners'
import { Container } from 'Containers/Pages/Landing/styles'

import Header from 'Components/Blocks/Entities/Landing/Header'
import Head from 'Components/Blocks/Head'

const ForPartners: NextPage = () => (
  <Container>
    <Head description="For Partners" title="iDialogue | For Partners" />

    <Header />

    <ForPartnersContainer />

    <Footer />
  </Container>
)

export default ForPartners

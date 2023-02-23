import React, { useState } from 'react'

import { useRouter } from 'next/router'

import { Flex, SearchInput } from 'Components/UI'

import { List } from 'Components/Blocks/Entities/Teacher/PublicFriends'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { BackButton, Background, Container } from './styles'

const TeacherPublicFirends: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  function handleGoBack(e) {
    e.preventDefault()
    router.back()
  }

  return (
    <Background>
      <Head description="Teacher Friends" title="Teacher Friends" />

      <Container pb={60} pt={28}>
        <Flex
          alignItems="center"
          justifyContent="center"
          position="relative"
          width={1}
        >
          <Flex maxWidth="360px" width={1}>
            <SearchInput
              placeholder="Search..."
              onChange={value => setSearchValue(value)}
            />
          </Flex>
          <BackButton onClick={handleGoBack}>Go Back</BackButton>
        </Flex>

        <Flex width={1}>
          <List search={searchValue} />
        </Flex>
      </Container>
      <Footer />
    </Background>
  )
}

export default TeacherPublicFirends

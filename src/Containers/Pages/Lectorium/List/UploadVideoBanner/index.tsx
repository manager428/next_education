import React from 'react'

import Link from 'next/link'

import { Flex } from 'Components/UI'

import { PRIVATE_PATHS } from 'Constants/paths'

import { useScopedI18n } from 'Services/I18n'

import { Button, Container, Description, Logo, Title } from './styles'

const UploadVideoBanner: React.FC = () => {
  const s = useScopedI18n('lectorium')

  return (
    <Container>
      <Flex flexWrap="wrap">
        <Title>{s('title')}</Title>
        <Description>{s('description')}</Description>
        <Link href={PRIVATE_PATHS.LECTORIUM_CREATE} passHref>
          <Button>{s('uploadButton')}</Button>
        </Link>
      </Flex>
      <Flex flexShrink={0} width={200}>
        <Logo />
      </Flex>
    </Container>
  )
}

export default UploadVideoBanner

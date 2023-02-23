import React from 'react'

import Link from 'next/link'

import { Container } from 'Containers/Pages/Auth/styles'
import { Button, Logo, Title } from 'Containers/Pages/Auth/Success/styles'

import { Flex } from 'Components/UI'

import { PRIVATE_PATHS } from 'Constants/paths'

const Success: React.FC = () => (
  <Flex backgroundColor="#f7faff" flex=" 1 0 auto" flexWrap="wrap" width={1}>
    <Container>
      <Flex justifyContent="space-between" mt={42} width={1}>
        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          flexShrink={0}
          flexWrap="wrap"
          justifyContent="center"
          maxWidth={390}
          mt={192}
          width={1}
        >
          <Title width={1}>
            Thank You <br /> for Joining Us!
          </Title>
          <Link href={PRIVATE_PATHS.HOME} passHref>
            <Button>Let&apos;s start</Button>
          </Link>
        </Flex>
        <Flex mt={54}>
          <Logo />
        </Flex>
      </Flex>
    </Container>
  </Flex>
)

export default Success

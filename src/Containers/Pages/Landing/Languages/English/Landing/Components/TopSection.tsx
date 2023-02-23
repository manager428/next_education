import React from 'react'

import Link from 'next/link'

import { landingImage1 } from 'Assets/images/landing'

import {
  InnerContainer,
  TopBlock,
  TopImageBlock,
  TopText,
  TopTitle,
} from 'Containers/Pages/Landing/Languages/English/Landing/styles'
import { NavButton, Section } from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { AUTH_PATHS } from 'Constants/paths'

const TopSection = () => (
  <InnerContainer p="0px 16px">
    {/* Top section */}
    <Section justifyContent="space-between" pb={32}>
      <TopBlock flexGrow={1} flexWrap="wrap">
        <TopTitle>
          Learn With the World,
          <br />
          <span>Not Just About It!</span>
        </TopTitle>
        <TopText width={1}>
          The leading platform for collaborative global learning. We connect
          students with exciting learning activities, virtual adventures, the
          world&apos;s leading experts, and friends from 150 countries!
        </TopText>

        <Flex mt={22} width={1}>
          <Link href={AUTH_PATHS.SIGN_UP} passHref>
            <NavButton minwidth="160px">GET STARTED</NavButton>
          </Link>

          <Link href={AUTH_PATHS.SIGN_IN} passHref>
            <NavButton minwidth="160px" ml="40px" variant="transparent">
              LOGIN
            </NavButton>
          </Link>
        </Flex>
      </TopBlock>

      <TopImageBlock>
        <Image layout="fill" priority src={landingImage1} />
      </TopImageBlock>
    </Section>
  </InnerContainer>
)

export default TopSection

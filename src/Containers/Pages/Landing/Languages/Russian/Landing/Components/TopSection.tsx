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
        <TopTitle fontSize="32px" fontWeight="700" lineHeight="42px">
          <span>Интерактивная платформа</span>
          <br />
          для совместного обучения
          <br />и межкультурного общения.
        </TopTitle>
        <TopText fontSize="20px" lineHeight="30px" width={1}>
          Мы объединяем детей и подростков со всего мира для онлайн-занятий и
          изучения английского языка через виртуальные путешествия, игры,
          мастер-классы с экспертами, дискуссионные клубы и конкурсы.
        </TopText>

        <Flex mt={22} width={1}>
          <Link href={AUTH_PATHS.SIGN_UP} passHref>
            <NavButton minwidth="160px">НАЧАТЬ</NavButton>
          </Link>

          <Link href={AUTH_PATHS.SIGN_IN} passHref>
            <NavButton minwidth="160px" ml="40px" variant="transparent">
              ЛОГИН
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

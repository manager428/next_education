import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { landingLaptop2 } from 'Assets/images/landing'

import { NavButton } from 'Containers/Pages/Landing/styles'

import { Flex } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import {
  Container,
  InnerContainer,
  Section,
  TopBlock,
  TopImageBlock,
  TopText,
} from '../styles'

const LIST = [
  {
    text: 'Увлекательные уроки на английском языке',
    emoji: '🦄',
  },
  {
    text: 'Занятия с носителями английского языка',
    emoji: '🇺🇸',
  },
  {
    text: 'Игровая детская программа',
    emoji: '🥳',
  },
  {
    text: 'Виртуальные путешествия',
    emoji: '✈️',
  },
  {
    text: 'Друзья из разных стран',
    emoji: '🤝',
  },
]

const TopSection = () => (
  <Container
    backgroundColor="#FFE9E3"
    justifyContent="center"
    pb={60}
    pt={60}
    width={1}
  >
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <InnerContainer>
        <Section alignItems="center" justifyContent="space-between" pb={32}>
          <TopImageBlock mt="17px">
            <Image
              height={280}
              layout="fixed"
              placeholder="blur"
              src={landingLaptop2}
              width={486}
            />
          </TopImageBlock>
          <TopBlock flexGrow={1} flexWrap="wrap" maxWidth={480}>
            <TopText
              color="#071D40"
              fontSize="32px"
              fontWeight={800}
              lineHeight="42px"
              mt={15}
            >
              Ваш ребенок полюбит английский за 30 минут!
            </TopText>

            <Flex flexDirection="column" mt="23px" width={1}>
              {LIST.map((item, ind) => (
                <Flex
                  alignItems="center"
                  color="#071D40"
                  fontSize={18}
                  // eslint-disable-next-line react/no-array-index-key
                  key={ind}
                  lineHeight="18px"
                  mb="16px"
                >
                  <Flex
                    alignContent="center"
                    alignItems="center"
                    fontSize="24px"
                    height={24}
                    mr="14px"
                    width={24}
                  >
                    {item.emoji}
                  </Flex>
                  {item.text}
                </Flex>
              ))}
            </Flex>

            <Link href="#contact" passHref>
              <NavButton fontWeight="700" minwidth="160px">
                Записаться на пробное занятие
              </NavButton>
            </Link>
          </TopBlock>
        </Section>
      </InnerContainer>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <InnerContainer>
        <Section alignItems="flex-start" justifyContent="center">
          <TopImageBlock alignSelf="center" mr="20px">
            <Image
              height={216}
              layout="fixed"
              placeholder="blur"
              src={landingLaptop2}
              width={374}
            />
          </TopImageBlock>
          <TopBlock flexGrow={1} flexWrap="wrap" maxWidth="302px">
            <TopText
              color="#071D40"
              fontSize={28}
              fontWeight={800}
              lineHeight="33px"
              mt="14px"
            >
              Ваш ребенок полюбит английский за 30 минут!
            </TopText>

            <Flex flexDirection="column" mt="23px" width={1}>
              {LIST.map((item, ind) => (
                <Flex
                  alignItems="center"
                  color="#071D40"
                  fontSize="16px"
                  // eslint-disable-next-line react/no-array-index-key
                  key={ind}
                  lineHeight="18px"
                  mb="16px"
                >
                  <Flex
                    alignContent="center"
                    alignItems="center"
                    fontSize="16px"
                    height={24}
                    mr="14px"
                    width={24}
                  >
                    {item.emoji}
                  </Flex>
                  {item.text}
                </Flex>
              ))}
            </Flex>

            <Link href="#contact" passHref>
              <NavButton fontWeight={700} minwidth="160px">
                Записаться на пробное занятие
              </NavButton>
            </Link>
          </TopBlock>
        </Section>
      </InnerContainer>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <InnerContainer>
        <Section
          alignItems="center"
          justifyContent="center"
          margin="0 auto"
          maxWidth="280px"
        >
          <TopBlock
            flexGrow={1}
            flexWrap="wrap"
            justifyContent="center"
            width={1}
          >
            <TopText
              color="#071D40"
              fontSize={24}
              fontWeight={800}
              justifyContent="center"
              lineHeight="28px"
              mt="14px"
              textAlign="center"
              width={1}
            >
              Ваш ребенок полюбит английский за 30 минут!
            </TopText>

            <Flex flexDirection="column" mt="23px" width={1}>
              {LIST.map((item, ind) => (
                <Flex
                  alignItems="center"
                  color="#071D40"
                  fontSize={16}
                  // eslint-disable-next-line react/no-array-index-key
                  key={ind}
                  lineHeight="18px"
                  mb="16px"
                  width={1}
                >
                  <Flex
                    alignContent="center"
                    alignItems="center"
                    fontSize="16px"
                    height={16}
                    mr="14px"
                    width={16}
                  >
                    {item.emoji}
                  </Flex>
                  {item.text}
                </Flex>
              ))}
            </Flex>

            <Link href="#contact" passHref>
              <NavButton fontWeight="700" minwidth="160px" textAlign="center">
                Записаться на пробное занятие
              </NavButton>
            </Link>
          </TopBlock>

          <TopImageBlock alignSelf="center" mt="28px">
            <Image
              height={166}
              layout="fixed"
              placeholder="blur"
              src={landingLaptop2}
              width={288}
            />
          </TopImageBlock>
        </Section>
      </InnerContainer>
    </Media>
  </Container>
)

export default TopSection

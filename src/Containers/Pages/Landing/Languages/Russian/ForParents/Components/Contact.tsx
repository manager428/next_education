import React from 'react'

import { Title } from 'Containers/Pages/Landing/styles'

import { Element, Flex } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import BookForm from './BookForm'

import { Container } from '../styles'

const LIST = [
  {
    emoji: '❤️',
    text: 'Увлечем ребенка английским',
  },
  {
    emoji: '🎓️',
    text: 'Проведем полноценный урок',
  },
  {
    emoji: '🏅',
    text: 'Определим уровень знаний',
  },
  {
    emoji: '🎯️',
    text: 'Дадим рекомендации по изучению',
  },
]

const Contact = () => (
  <Flex flexWrap="wrap" id="contact" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={60}
        pt={60}
        width={1}
      >
        <Container>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Title
              fontSize="32px"
              fontWeight="800"
              justifyContent="center"
              width={1}
            >
              Вы в одном шаге от увлекательных приключений
            </Title>
            <Element
              fontSize="22px"
              lineHeight="22px"
              mt="28px"
              textAlign="center"
              width={1}
            >
              Запишитесь на бесплатное занятие
            </Element>
          </Flex>

          <Flex mt="32px">
            <Flex alignSelf="center" flexWrap="wrap">
              <Element fontSize="22px" fontWeight="600" lineHeight="22px">
                На бесплатном вводном занятии мы:
              </Element>

              <Flex flexWrap="wrap" mt="20px" width={1}>
                {LIST.map(item => (
                  <Flex
                    fontSize="22px"
                    key={item.emoji}
                    lineHeight="22px"
                    mb="20px"
                    width={1}
                  >
                    <Element fontSize="20px" mr="10px">
                      {item.emoji}
                    </Element>{' '}
                    {item.text}
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex flexShrink={0} maxWidth={424} width={1}>
              <BookForm key={Math.random()} />
            </Flex>
          </Flex>
        </Container>
      </Container>
    </Media>

    <Media lessThan={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={60}
        pt={60}
        width={1}
      >
        <Container pl="20px" pr="20px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Media at={MEDIA_SIZES.TABLET}>
              <Title
                fontSize="24px"
                fontWeight="800"
                justifyContent="center"
                width={1}
              >
                Вы в одном шаге от увлекательных приключений
              </Title>
            </Media>
            <Media at={MEDIA_SIZES.MOBILE}>
              <Title
                fontSize="18px"
                fontWeight="800"
                justifyContent="center"
                width={1}
              >
                Вы в одном шаге от увлекательных приключений
              </Title>
            </Media>

            <Element
              fontSize="18px"
              lineHeight="18px"
              mt="28px"
              textAlign="center"
              width={1}
            >
              Запишитесь на бесплатное занятие
            </Element>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center" mt="32px">
            <Flex alignSelf="center" flexWrap="wrap" justifyContent="center">
              <Element fontSize="16px" fontWeight="600" lineHeight="18px">
                На бесплатном вводном занятии мы:
              </Element>
              <Flex flexWrap="wrap" jusityContent="center" mt="20px" width={1}>
                {LIST.map(item => (
                  <Flex
                    fontSize="16px"
                    justifyContent="center"
                    key={item.emoji}
                    lineHeight="16px"
                    mb="20px"
                    width={1}
                  >
                    <Element fontSize="20px" mr="10px">
                      {item.emoji}
                    </Element>{' '}
                    {item.text}
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex flexShrink={0} maxWidth={424} width={1}>
              <BookForm key={Math.random()} />
            </Flex>
          </Flex>
        </Container>
      </Container>
    </Media>
  </Flex>
)

export default Contact

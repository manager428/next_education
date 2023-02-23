import React from 'react'

import map from 'lodash/map'

import {
  priceBasicGlyph,
  pricePlusGlyph,
  pricePremiumGlyph,
} from 'Assets/svg/landing'

import { Element, Flex, Icon } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Card, Container, Inner } from './styles'

const PAY_OPTIONS = [
  {
    title: 'Занятия в мини группе',
    price: 'От 350Р',
    icon: priceBasicGlyph,
  },
  {
    title: 'Индивидуальные занятия',
    price: 'От 650Р',
    icon: pricePlusGlyph,
  },
  {
    title: 'Безлимитный абонемент',
    price: 'От 9700 / месяц',
    icon: pricePremiumGlyph,
  },
]

const Pricing = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container backgroundColor="white" id="pricing" pb={60} pt={60}>
        <Inner maxWidth={980}>
          <Element
            as="h2"
            color="#071D40"
            fontSize={36}
            fontWeight={800}
            textAlign="center"
            width={1}
          >
            Гибкая система оплаты
          </Element>

          <Flex mt={32} width={1}>
            <Flex flexWrap="wrap" width={380}>
              {map(PAY_OPTIONS, (option, index) => (
                <Card
                  key={option.title}
                  mt={index === PAY_OPTIONS.length ? 0 : 28}
                  padding="20px"
                >
                  <Flex>
                    <Icon icon={option.icon} size={64} />
                  </Flex>
                  <Flex
                    alignItems="center"
                    flex={1}
                    flexGrow={1}
                    flexWrap="wrap"
                    ml={20}
                  >
                    <Element fontSize="20px" fontWeight={600} width={1}>
                      {option.title}
                    </Element>
                    <Element fontSize="22px" fontWeight={800} mt="10px">
                      {option.price}
                    </Element>
                  </Flex>
                </Card>
              ))}
            </Flex>
            <Flex
              flex={1}
              flexDirection="column"
              flexGrow={1}
              flexWrap="wrap"
              ml={94}
              pt="25px"
            >
              <Flex fontSize="22px" lineHeight="22px" mb="20px">
                С любым пакетом абсолютно бесплатно вы получаете:
              </Flex>

              <Flex
                alignItems="center"
                fontSize="22px"
                fontWeight="22px"
                lineHeight="29px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  💭
                </Element>
                Дискуссионные клубы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="22px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🌏
                </Element>{' '}
                Виртуальные туры
              </Flex>
              <Flex
                alignItems="center"
                fontSize="22px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  ⏰
                </Element>{' '}
                Гибкое расписание
              </Flex>
              <Flex
                alignItems="center"
                fontSize="22px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🤝️️
                </Element>{' '}
                Друзья из 150 стран
              </Flex>
              <Flex
                alignItems="center"
                fontSize="22px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🗣
                </Element>{' '}
                Разговорные клубы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="22px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🐒
                </Element>{' '}
                Игровые вечера
              </Flex>
              <Flex
                alignItems="center"
                fontSize="22px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🎓
                </Element>{' '}
                Мастер классы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="22px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🔐
                </Element>{' '}
                Безопасная и удобная платформа
              </Flex>
              <Flex
                alignItems="center"
                fontSize="22px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🎁
                </Element>{' '}
                Соревнования и призы
              </Flex>
            </Flex>
          </Flex>
        </Inner>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container backgroundColor="#F7FAFF" id="pricing" pb={60} pt={60}>
        <Inner maxWidth={704}>
          <Element
            as="h2"
            color="#071D40"
            fontSize={24}
            fontWeight={800}
            lineHeight="24px"
            textAlign="center"
            width={1}
          >
            Гибкая система оплаты
          </Element>

          <Flex mt={28} width={1}>
            <Flex alignContent="flex-start" flexWrap="wrap" width={340}>
              {map(PAY_OPTIONS, (option, index) => (
                <Card
                  key={option.title}
                  mt={index === PAY_OPTIONS.length ? 0 : 28}
                  padding="14px"
                >
                  <Flex>
                    <Icon icon={option.icon} size={54} />
                  </Flex>
                  <Flex
                    alignItems="center"
                    flex={1}
                    flexGrow={1}
                    flexWrap="wrap"
                    ml={20}
                  >
                    <Element fontSize="18px" fontWeight={600} width={1}>
                      {option.title}
                    </Element>
                    <Element fontSize="22px" fontWeight={600} mt="10px">
                      {option.price}
                    </Element>
                  </Flex>
                </Card>
              ))}
            </Flex>
            <Flex
              flex={1}
              flexDirection="column"
              flexGrow={1}
              flexWrap="wrap"
              ml={94}
              pt="25px"
            >
              <Flex fontSize="16px" lineHeight="16px" mb="20px">
                С любым пакетом абсолютно бесплатно вы получаете:
              </Flex>

              <Flex
                alignItems="center"
                fontSize="16px"
                fontWeight="22px"
                lineHeight="29px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  💭
                </Element>
                Дискуссионные клубы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🌏
                </Element>{' '}
                Виртуальные туры
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  ⏰
                </Element>{' '}
                Гибкое расписание
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🤝️️
                </Element>{' '}
                Друзья из 150 стран
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🗣
                </Element>{' '}
                Разговорные клубы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🐒
                </Element>{' '}
                Игровые вечера
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🎓
                </Element>{' '}
                Мастер классы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🔐
                </Element>{' '}
                Безопасная и удобная платформа
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🎁
                </Element>{' '}
                Соревнования и призы
              </Flex>
            </Flex>
          </Flex>
        </Inner>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container backgroundColor="#F7FAFF" id="pricing" pb={60} pt={60}>
        <Inner maxWidth={288}>
          <Element
            as="h2"
            color="#071D40"
            fontSize={18}
            fontWeight={800}
            lineHeight="24px"
            textAlign="center"
            width={1}
          >
            Гибкая система оплаты
          </Element>

          <Flex flexWrap="wrap" mt={0} width={1}>
            <Flex
              flex={1}
              flexDirection="column"
              flexGrow={1}
              flexWrap="wrap"
              mt={20}
              pt="0px"
            >
              <Flex
                fontSize="16px"
                lineHeight="18px"
                mb="20px"
                textAlign="center"
              >
                С любым пакетом абсолютно бесплатно вы получаете:
              </Flex>

              <Flex
                alignItems="center"
                fontSize="16px"
                fontWeight="22px"
                lineHeight="29px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  💭
                </Element>
                Дискуссионные клубы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🌏
                </Element>{' '}
                Виртуальные туры
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  ⏰
                </Element>{' '}
                Гибкое расписание
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🤝️️
                </Element>{' '}
                Друзья из 150 стран
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🗣
                </Element>{' '}
                Разговорные клубы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🐒
                </Element>{' '}
                Игровые вечера
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🎓
                </Element>{' '}
                Мастер классы
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🔐
                </Element>{' '}
                Безопасная и удобная платформа
              </Flex>
              <Flex
                alignItems="center"
                fontSize="16px"
                lineHeight="26px"
                mt="16px"
                width={1}
              >
                <Element fontSize="20px" mr="10px">
                  🎁
                </Element>{' '}
                Соревнования и призы
              </Flex>
            </Flex>

            <Flex alignContent="flex-start" flexWrap="wrap" width={1}>
              {map(PAY_OPTIONS, (option, index) => (
                <Flex flexWrap="wrap" key={option.title}>
                  <Card
                    mt={index === PAY_OPTIONS.length ? 0 : 28}
                    padding="14px"
                  >
                    <Flex>
                      <Icon icon={option.icon} size={54} />
                    </Flex>
                    <Flex
                      alignItems="center"
                      flex={1}
                      flexGrow={1}
                      flexWrap="wrap"
                      ml={20}
                    >
                      <Element fontSize="16px" fontWeight={600} width={1}>
                        {option.title}
                      </Element>
                      <Element fontSize="16px" fontWeight={800} mt="10px">
                        {option.price}
                      </Element>
                    </Flex>
                  </Card>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Inner>
      </Container>
    </Media>
  </Flex>
)

export default Pricing

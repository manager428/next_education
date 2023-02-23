import React, { useState } from 'react'

import map from 'lodash/map'

import {
  priceBasicGlyph,
  pricePlusGlyph,
  pricePremiumGlyph,
  rightArrowGlyph,
} from 'Assets/svg/landing'

import {
  Card,
  CheckboxWrapper,
  ChoosePlanLink,
  Container,
  Inner,
} from 'Containers/Pages/Landing/Languages/English/ForParents/Components/Pricing/styles'

import { Checkbox, Element, Flex, Icon } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

const PAY_OPTIONS = [
  {
    title: 'One Day Trial',
    price: '$9',
    icon: priceBasicGlyph,
    link: 'https://buy.stripe.com/3cs5n29JKh2F7wAcN3',
  },
  {
    title: 'One Week',
    price: '$29 / week',
    icon: pricePlusGlyph,
    link: 'https://buy.stripe.com/3csbLqcVW27L5os4gw',
  },
  {
    title: 'One Month',
    price: '$89 / month',
    icon: pricePremiumGlyph,
    link: 'https://buy.stripe.com/9AQ7vaf44bIl2cg3cr',
    percent: '23%',
  },
]

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(PAY_OPTIONS[0])

  return (
    <Flex flexWrap="wrap" width={1}>
      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Container id="pricing">
          <Inner maxWidth={980}>
            <Element
              as="h2"
              color="#071D40"
              fontSize={36}
              fontWeight={600}
              textAlign="center"
              width={1}
            >
              Your pass to{' '}
              <Element as="span" color={theme.colors.green}>
                unlimited
              </Element>{' '}
              adventures
            </Element>

            <Flex mt={32} width={1}>
              <Flex flexWrap="wrap" width={380}>
                {map(PAY_OPTIONS, (option, index) => {
                  const isSelected = selectedPlan.title === option.title
                  return (
                    <Card
                      key={option.title}
                      mt={index === PAY_OPTIONS.length ? 0 : 28}
                      padding="20px"
                      selected={isSelected}
                      onClick={() => setSelectedPlan(option)}
                    >
                      <Flex
                        alignContent="center"
                        alignItems="center"
                        width={20}
                      >
                        <CheckboxWrapper>
                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                          {/* @ts-ignore */}
                          <Checkbox
                            checked={isSelected}
                            id={`parent-pricing-${index}`}
                            onChange={() => setSelectedPlan(option)}
                          />
                        </CheckboxWrapper>
                      </Flex>
                      <Flex ml={20}>
                        <Icon icon={option.icon} size={64} />
                      </Flex>
                      <Flex
                        alignItems="center"
                        flex={1}
                        flexGrow={1}
                        flexWrap="wrap"
                        ml={20}
                      >
                        <Element fontSize="22px" fontWeight={600} width={1}>
                          {option.title}
                        </Element>
                        <Element fontSize="28px" fontWeight={600} mt="10px">
                          {option.price}
                        </Element>
                      </Flex>
                    </Card>
                  )
                })}

                <ChoosePlanLink
                  fontSize={18}
                  href={selectedPlan.link}
                  mt={28}
                  padding="12px"
                >
                  Choose Plan
                  <Icon
                    fill="white"
                    icon={rightArrowGlyph}
                    size={15}
                    wrapperStyles={{ ml: '10px' }}
                  />
                </ChoosePlanLink>
              </Flex>
              <Flex
                flex={1}
                flexDirection="column"
                flexGrow={1}
                flexWrap="wrap"
                ml={94}
                pt="25px"
              >
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
                  Access to 100 hours of interactive learning activities
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
                  Friends from 150 countries
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="22px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🇺🇸
                  </Element>{' '}
                  Moderated discussion clubs
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="22px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    ✈️
                  </Element>{' '}
                  Virtual field trips
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="22px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🎤
                  </Element>{' '}
                  Power Hours with experts
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="22px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    📃
                  </Element>{' '}
                  International Certificates
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
                  Flexible schedule
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="22px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🔒
                  </Element>{' '}
                  Safe Platform
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
                  Bonuses and Prizes
                </Flex>
              </Flex>
            </Flex>
          </Inner>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.TABLET}>
        <Container id="pricing">
          <Inner maxWidth={704}>
            <Element
              as="h2"
              color="#071D40"
              fontSize={24}
              fontWeight={600}
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Your pass to{' '}
              <Element as="span" color={theme.colors.green}>
                unlimited
              </Element>{' '}
              adventures
            </Element>

            <Flex mt={28} width={1}>
              <Flex alignContent="flex-start" flexWrap="wrap" width={340}>
                {map(PAY_OPTIONS, (option, index) => {
                  const isSelected = selectedPlan.title === option.title
                  return (
                    <Card
                      key={option.title}
                      mt={index === PAY_OPTIONS.length ? 0 : 28}
                      padding="14px"
                      selected={isSelected}
                      onClick={() => setSelectedPlan(option)}
                    >
                      <Flex
                        alignContent="center"
                        alignItems="center"
                        width={20}
                      >
                        <CheckboxWrapper>
                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                          {/* @ts-ignore */}
                          <Checkbox
                            checked={isSelected}
                            id={`parent-pricing-${index}`}
                            onChange={() => setSelectedPlan(option)}
                          />
                        </CheckboxWrapper>
                      </Flex>
                      <Flex ml={20}>
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
                  )
                })}

                <ChoosePlanLink
                  fontSize={16}
                  href={selectedPlan.link}
                  mt={28}
                  padding={14}
                >
                  Choose Plan
                  <Icon
                    fill="white"
                    icon={rightArrowGlyph}
                    size={15}
                    wrapperStyles={{ ml: '10px' }}
                  />
                </ChoosePlanLink>
              </Flex>
              <Flex
                flex={1}
                flexDirection="column"
                flexGrow={1}
                flexWrap="wrap"
                ml={94}
                pt="25px"
              >
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
                  Access to 100 hours of interactive learning activities
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
                  Friends from 150 countries
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🇺🇸
                  </Element>{' '}
                  Moderated discussion clubs
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    ✈️
                  </Element>{' '}
                  Virtual field trips
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🎤
                  </Element>{' '}
                  Power Hours with experts
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    📃
                  </Element>{' '}
                  International Certificates
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
                  Flexible schedule
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🔒
                  </Element>{' '}
                  Safe Platform
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
                  Bonuses and Prizes
                </Flex>
              </Flex>
            </Flex>
          </Inner>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.MOBILE}>
        <Container id="pricing">
          <Inner maxWidth={288}>
            <Element
              as="h2"
              color="#071D40"
              fontSize={18}
              fontWeight={600}
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Your pass to{' '}
              <Element as="span" color={theme.colors.green}>
                unlimited
              </Element>{' '}
              adventures
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
                  alignItems="center"
                  fontSize="16px"
                  fontWeight="22px"
                  lineHeight="29px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    💭
                  </Element>
                  Access to 100 hours of interactive learning activities
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
                  Friends from 150 countries
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🇺🇸
                  </Element>{' '}
                  Moderated discussion clubs
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    ✈️
                  </Element>{' '}
                  Virtual field trips
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🎤
                  </Element>{' '}
                  Power Hours with experts
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    📃
                  </Element>{' '}
                  International Certificates
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
                  Flexible schedule
                </Flex>
                <Flex
                  alignItems="center"
                  fontSize="16px"
                  lineHeight="26px"
                  mt="16px"
                  width={1}
                >
                  <Element fontSize="20px" mr="10px">
                    🔒
                  </Element>{' '}
                  Safe Platform
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
                  Bonuses and Prizes
                </Flex>
              </Flex>

              <Flex alignContent="flex-start" flexWrap="wrap" width={1}>
                {map(PAY_OPTIONS, (option, index) => {
                  const isSelected = selectedPlan.title === option.title

                  return (
                    <Flex flexWrap="wrap" key={option.title}>
                      <Card
                        mt={index === PAY_OPTIONS.length ? 0 : 28}
                        padding="14px"
                        selected={isSelected}
                        onClick={() => setSelectedPlan(option)}
                      >
                        <Flex
                          alignContent="center"
                          alignItems="center"
                          width={20}
                        >
                          <CheckboxWrapper>
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/* @ts-ignore */}
                            <Checkbox
                              checked={isSelected}
                              id={`parent-pricing-${index}`}
                              onChange={() => setSelectedPlan(option)}
                            />
                          </CheckboxWrapper>
                        </Flex>
                        <Flex ml={20}>
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
                    </Flex>
                  )
                })}

                <ChoosePlanLink
                  fontSize={16}
                  href={selectedPlan.link}
                  mt={28}
                  padding={14}
                >
                  Choose Plan
                  <Icon
                    fill="white"
                    icon={rightArrowGlyph}
                    size={15}
                    wrapperStyles={{ ml: '10px' }}
                  />
                </ChoosePlanLink>
              </Flex>
            </Flex>
          </Inner>
        </Container>
      </Media>
    </Flex>
  )
}

export default Pricing

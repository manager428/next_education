import React, { useState } from 'react'

import Link from 'next/link'

import {
  priceBasicGlyph,
  pricePlusGlyph,
  pricePremiumGlyph,
  rightArrowGlyph,
} from 'Assets/svg/landing'

import { Element, Flex, Icon } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

import { Card, ChoosePlanLink, Container, Inner, Separator } from './styles'
import useRender from './useRender'

const PAYMENT_LINKS = {
  trial: 'https://buy.stripe.com/3cs5n2g887s55oscMZ',
  standart: 'https://buy.stripe.com/28o9DibRS13HaIM00e',
  premium: 'https://forms.gle/NZDn8Va8hDbYN5oC9',
}

const Pricing = () => {
  const { renderTrial, renderStandart, renderPremium } = useRender()

  const [isActiveDetails, setActiveDetails] = useState({
    trial: true,
    standart: false,
    premium: false,
  })

  const handleToggleDetails = section => e => {
    e.preventDefault()

    setActiveDetails(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }))
  }

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
              Гибкая ценовая политика
            </Element>

            <Flex justifyContent="space-between" mt={40} width={1}>
              <Card maxWidth={300} padding={20}>
                <Flex minHeight="100px" width={1}>
                  <Icon icon={priceBasicGlyph} size={76} />
                  <Flex flexGrow={1} flexWrap="wrap" ml={18}>
                    <Element fontSize="16px" width={1}>
                      1 месяц
                    </Element>
                    <Element fontSize={24} mt="10px">
                      $150 / месяц
                    </Element>
                    <Element fontSize="14px" mt="10px" width={1}>
                      до 100 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {renderTrial()}

                <Link href={PAYMENT_LINKS.trial} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>

              <Card maxWidth={300} padding={20}>
                <Flex minHeight="100px" width={1}>
                  <Icon icon={pricePlusGlyph} size={76} />
                  <Flex flexGrow={1} flexWrap="wrap" ml={18}>
                    <Element fontSize={18} width={1}>
                      Standard
                    </Element>
                    <Element fontSize={24} mt="10px">
                      $1800 / год
                    </Element>
                    <Element fontSize="14px" mt="10px" width={1}>
                      До 30 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {renderStandart()}

                <Link href={PAYMENT_LINKS.standart} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>

              <Card maxWidth={300} padding={20}>
                <Flex minHeight="100px" width={1}>
                  <Icon icon={pricePremiumGlyph} size={76} />
                  <Flex flexGrow={1} flexWrap="wrap" ml={18}>
                    <Element fontSize={18} width={1}>
                      Premium
                    </Element>
                    <Element fontSize={18} mt="10px">
                      Индивидуальный тариф
                    </Element>
                    <Element fontSize="14px" mt="10px" width={1}>
                      до 100 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {renderPremium()}

                <Link href={PAYMENT_LINKS.premium} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>
            </Flex>
          </Inner>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.TABLET}>
        <Container id="pricing">
          <Inner maxWidth={735}>
            <Element
              as="h2"
              color="#071D40"
              fontSize={22}
              fontWeight={600}
              textAlign="center"
              width={1}
            >
              Гибкая ценовая политика
            </Element>

            <Flex justifyContent="space-between" mt={40} width={1}>
              <Card maxWidth={232} padding={14}>
                <Flex minHeight="78px" width={1}>
                  <Icon icon={priceBasicGlyph} size={60} />
                  <Flex flexGrow={1} flexWrap="wrap" ml="10px">
                    <Element
                      fontSize={14}
                      fontWeight={600}
                      lineHeight="14px"
                      width={1}
                    >
                      1 месяц
                    </Element>
                    <Element
                      fontSize={18}
                      fontWeight={600}
                      lineHeight="18px"
                      mt="8px"
                    >
                      $150 / месяц
                    </Element>
                    <Element fontSize={12} lineHeight="8px" mt="8px" width={1}>
                      до 300 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {renderTrial()}

                <Link href={PAYMENT_LINKS.trial} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>

              <Card maxWidth={232} padding={14}>
                <Flex minHeight="78px" width={1}>
                  <Icon icon={pricePlusGlyph} size={60} />
                  <Flex flexGrow={1} flexWrap="wrap" ml="10px">
                    <Element fontSize={14} lineHeight="14px" width={1}>
                      Standard
                    </Element>
                    <Element fontSize={18} lineHeight="18px" mt="8px">
                      $1800 / год
                    </Element>
                    <Element fontSize={12} lineHeight="12px" mt="8px" width={1}>
                      До 30 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {renderStandart()}

                <Link href={PAYMENT_LINKS.standart} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>

              <Card maxWidth={232} padding={14}>
                <Flex minHeight="78px" width={1}>
                  <Icon icon={pricePremiumGlyph} size={60} />
                  <Flex flexGrow={1} flexWrap="wrap" ml="10px">
                    <Element fontSize={14} lineHeight="14px" width={1}>
                      Premium
                    </Element>
                    <Element fontSize={18} lineHeight="18px" mt="8px">
                      Индивидуальный тариф
                    </Element>
                    <Element
                      fontSize="12px"
                      lineHeight="12px"
                      mt="8px"
                      width={1}
                    >
                      до 50 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {renderPremium()}

                <Link href={PAYMENT_LINKS.premium} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>
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
              Гибкая ценовая политика
            </Element>

            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              mt={40}
              width={1}
            >
              <Card mb={20} padding={14}>
                <Flex width={1}>
                  <Icon icon={priceBasicGlyph} size={60} />
                  <Flex flexGrow={1} flexWrap="wrap" ml="10px">
                    <Element
                      fontSize={14}
                      fontWeight={600}
                      lineHeight="14px"
                      width={1}
                    >
                      1 месяц
                    </Element>
                    <Element
                      fontSize={18}
                      fontWeight={600}
                      lineHeight="18px"
                      mt="8px"
                    >
                      $150 / месяц
                    </Element>
                    <Element fontSize={12} lineHeight="8px" mt="8px" width={1}>
                      до 5 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {isActiveDetails.trial && renderTrial()}

                <Flex justifyContent="center" mb={14} width={1}>
                  <Element
                    as="button"
                    color={theme.colors.green}
                    fontSize={16}
                    type="button"
                    onClick={handleToggleDetails('trial')}
                  >
                    {isActiveDetails.trial ? 'Спрятать' : 'Показать больше'}
                  </Element>
                </Flex>

                <Link href={PAYMENT_LINKS.trial} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>

              <Card mb={20} padding={14}>
                <Flex width={1}>
                  <Icon icon={pricePlusGlyph} size={60} />
                  <Flex flexGrow={1} flexWrap="wrap" ml="10px">
                    <Element fontSize={14} lineHeight="14px" width={1}>
                      Standard
                    </Element>
                    <Element fontSize={18} lineHeight="18px" mt="8px">
                      $1800 / год
                    </Element>
                    <Element fontSize={12} lineHeight="12px" mt="8px" width={1}>
                      До 30 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {isActiveDetails.standart && renderStandart()}

                <Flex justifyContent="center" mb={14} width={1}>
                  <Element
                    as="button"
                    color={theme.colors.green}
                    fontSize={16}
                    type="button"
                    onClick={handleToggleDetails('standart')}
                  >
                    {isActiveDetails.standart ? 'Спрятать' : 'Показать больше'}
                  </Element>
                </Flex>

                <Link href={PAYMENT_LINKS.standart} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>

              <Card padding={14}>
                <Flex width={1}>
                  <Icon icon={pricePremiumGlyph} size={60} />
                  <Flex flexGrow={1} flexWrap="wrap" ml="10px">
                    <Element
                      fontSize={14}
                      fontWeight={600}
                      lineHeight="14px"
                      width={1}
                    >
                      Premium
                    </Element>
                    <Element
                      fontSize={18}
                      fontWeight={600}
                      lineHeight="18px"
                      mt="8px"
                    >
                      Индивидуальный тариф
                    </Element>
                    <Element
                      fontSize="12px"
                      lineHeight="12px"
                      mt="8px"
                      width={1}
                    >
                      до 50 студентов
                    </Element>
                  </Flex>
                </Flex>

                <Separator mb={20} mt={20} />

                {isActiveDetails.premium && renderPremium()}

                <Flex justifyContent="center" mb={14} width={1}>
                  <Element
                    as="button"
                    color={theme.colors.green}
                    fontSize={16}
                    type="button"
                    onClick={handleToggleDetails('premium')}
                  >
                    {isActiveDetails.premium ? 'Спрятать' : 'Показать больше'}
                  </Element>
                </Flex>

                <Link href={PAYMENT_LINKS.premium} passHref>
                  <ChoosePlanLink rel="noreferrer noopener" target="_blank">
                    <Flex alignItems="center" justifyContent="center">
                      Выбрать тариф
                      <Icon
                        fill="white"
                        icon={rightArrowGlyph}
                        size={15}
                        wrapperStyles={{ ml: '10px' }}
                      />
                    </Flex>
                  </ChoosePlanLink>
                </Link>
              </Card>
            </Flex>
          </Inner>
        </Container>
      </Media>
    </Flex>
  )
}

export default Pricing

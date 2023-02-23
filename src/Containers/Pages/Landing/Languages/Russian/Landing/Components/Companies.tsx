import React from 'react'

import {
  companyAwsImage,
  companyEuImage,
  companyGsvImage,
  companyMcImage,
} from 'Assets/images/landing'

import {
  CompanyContainer,
  Container,
  Title,
} from 'Containers/Pages/Landing/Languages/English/Landing/styles'
import { Section } from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Companies = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={80} pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth={748}>
          <Flex justifyContent="center" width={1}>
            <Title>Вы в хорошей компании</Title>
          </Flex>
          <CompanyContainer>
            <Image height={80} src={companyMcImage} width={114} />
            <Image height={80} src={companyAwsImage} width={80} />
            <Image height={80} src={companyEuImage} width={172} />
            <Image height={80} src={companyGsvImage} width={166} />
          </CompanyContainer>
        </Section>
      </Container>
    </Media>

    <Media lessThan={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" p="40px 16px" width={1}>
        <Section justifyContent="space-between" maxWidth={340}>
          <Flex justifyContent="center" width={1}>
            <Title>Вы в хорошей компании</Title>
          </Flex>
          <CompanyContainer>
            <Image height={60} src={companyMcImage} width={85} />
            <Image height={60} src={companyAwsImage} width={60} />
            <Image height={60} src={companyEuImage} width={129} />
            <Image height={60} src={companyGsvImage} width={124} />
          </CompanyContainer>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Companies

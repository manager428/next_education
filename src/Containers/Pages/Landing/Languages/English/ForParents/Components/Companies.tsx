import React from 'react'

import {
  companyBethel,
  companyBright,
  companyEducation,
  companyFisco,
  companySchool,
  companyUnivercity,
} from 'Assets/images/landing'

import {
  CompanyContainer,
  Container,
  Section,
  Title,
} from 'Containers/Pages/Landing/Languages/English/ForParents/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Companies = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={80}
        pt={60}
        width={1}
      >
        <Section justifyContent="center" maxWidth={748}>
          <Flex justifyContent="center" width={1}>
            <Title>
              Your kids are in a <span>great</span> company
            </Title>
          </Flex>
          <CompanyContainer>
            <Image height={80} src={companyEducation} width={72} />
            <Image height={80} src={companyBright} width={130} />
            <Image height={80} src={companyBethel} width={80} />
            <Image height={80} src={companyFisco} width={70} />
            <Image height={80} src={companyUnivercity} width={70} />
            <Image height={80} src={companySchool} width={82} />
          </CompanyContainer>
        </Section>
      </Container>
    </Media>

    <Media lessThan={MEDIA_SIZES.TABLET}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        p="40px 16px"
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={340}>
          <Flex justifyContent="center" width={1}>
            <Title>You’re in good company</Title>
          </Flex>
          <CompanyContainer>
            <Image height={60} src={companyEducation} width={54} />
            <Image height={60} src={companyBright} width={98} />
            <Image height={60} src={companyBethel} width={60} />
            <Image height={60} src={companyFisco} width={52} />
            <Image height={60} src={companyUnivercity} width={52} />
            <Image height={60} src={companySchool} width={62} />
          </CompanyContainer>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Companies

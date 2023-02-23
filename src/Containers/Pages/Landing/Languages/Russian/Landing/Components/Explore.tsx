import React from 'react'

import {
  companiesLogo,
  educationLogo,
  familiesLogo,
  teachersLogo,
} from 'Assets/images/landing/explore-connect-discover'
import { rightArrowGlyph } from 'Assets/svg/landing'

import {
  Container,
  Section,
  Text,
  Title,
} from 'Containers/Pages/Landing/Languages/Russian/Landing/styles'

import { Flex, Icon, Image, Link } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'
import { LANDING_PATHS } from 'Constants/paths'

import { Media, theme } from 'Theme'

const ExploreItem = ({
  logo,
  title,
  description,
  link,
  width = '212px',
}: {
  logo: string
  title: string
  description: string
  link: string
  width?: string
}) => (
  <Flex flexShrink={0} flexWrap="wrap" width={width}>
    <Image height="160px" src={logo} width="160px" />

    <Text
      fontSize="28px"
      fontWeight={500}
      lineHeight="28px"
      mt={14}
      textAlign="start"
      width={1}
    >
      {title}
    </Text>

    <Text fontSize="16px" lineHeight="22px" mt={14} textAlign="start">
      {description}
    </Text>

    <Link href={link} mt="14px">
      <Flex
        alignItems="center"
        color={theme.colors.green}
        fontSize="20px"
        fontWeight="600"
      >
        Подробнее{' '}
        <Icon
          fill={theme.colors.green}
          icon={rightArrowGlyph}
          size={15}
          wrapperStyles={{ ml: '5px' }}
        />
      </Flex>
    </Link>
  </Flex>
)

const Explore = () => (
  <Container
    backgroundColor="white"
    justifyContent="center"
    pb={60}
    pt={60}
    width={1}
  >
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Flex justifyContent="center" width={1}>
        <Title>Подключайся. Изучай. Узнавай</Title>
      </Flex>

      <Section justifyContent="space-between" margin="0 auto" maxWidth={980}>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          mt={40}
          width={1}
        >
          <ExploreItem
            description="Edutainment & New Friends"
            link={LANDING_PATHS.PARENTS}
            logo={familiesLogo.src}
            title="Родители"
          />

          <ExploreItem
            description="Tools to spark curiosity"
            link={LANDING_PATHS.EDUCATORS}
            logo={teachersLogo.src}
            title="Учителя"
          />

          <ExploreItem
            description="Ecosystem to promote diversity"
            link={LANDING_PATHS.PRINCIPLES}
            logo={educationLogo.src}
            title="Школы"
            width="230px"
          />

          <ExploreItem
            description="CSR and loyalty programs"
            link={LANDING_PATHS.PARTNERS}
            logo={companiesLogo.src}
            title="Компании"
          />
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Flex justifyContent="center" width={1}>
        <Title>Подключайся. Изучай. Узнавай</Title>
      </Flex>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={704}>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          mt={28}
          width={1}
        >
          <ExploreItem
            description="Edutainment & New Friends"
            link={LANDING_PATHS.PARENTS}
            logo={familiesLogo.src}
            title="Families"
            width="180px"
          />

          <ExploreItem
            description="Tools to spark curiosity"
            link={LANDING_PATHS.EDUCATORS}
            logo={teachersLogo.src}
            title="Teachers"
            width="180px"
          />

          <ExploreItem
            description="Ecosystem to promote diversity"
            link={LANDING_PATHS.PRINCIPLES}
            logo={educationLogo.src}
            title="Educators"
            width="180px"
          />

          <ExploreItem
            description="CSR and loyalty programs"
            link={LANDING_PATHS.PARTNERS}
            logo={companiesLogo.src}
            title="Companies"
            width="180px"
          />
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Flex justifyContent="center" width={1}>
        <Title>Подключайся. Изучай. Узнавай</Title>
      </Flex>
      <Section justifyContent="center" margin="0 auto" maxWidth={320}>
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
          justifyContent="center"
          mt={28}
          width={1}
        >
          <ExploreItem
            description="Edutainment & New Friends"
            link={LANDING_PATHS.PARENTS}
            logo={familiesLogo.src}
            title="Families"
            width="180px"
          />

          <ExploreItem
            description="Tools to spark curiosity"
            link={LANDING_PATHS.EDUCATORS}
            logo={teachersLogo.src}
            title="Teachers"
            width="180px"
          />

          <ExploreItem
            description="Ecosystem to promote diversity"
            link={LANDING_PATHS.PRINCIPLES}
            logo={educationLogo.src}
            title="Educators"
            width="180px"
          />

          <ExploreItem
            description="CSR and loyalty programs"
            link={LANDING_PATHS.PARTNERS}
            logo={companiesLogo.src}
            title="Companies"
            width="180px"
          />
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default Explore

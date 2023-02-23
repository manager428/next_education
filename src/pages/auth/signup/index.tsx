import React from 'react'

import { createGlobalStyle } from 'styled-components'

import Link from 'next/link'

import map from 'lodash/map'
import take from 'lodash/take'
import takeRight from 'lodash/takeRight'

import {
  parentLogo,
  schoolLogo,
  studentsLogo,
  teacherLogo,
} from 'Assets/images/auth'

import {
  Background,
  Description,
  FormContainer,
  Item,
  ItemTitle,
  Logo,
  SubTitle,
  Title,
} from 'Containers/Pages/Auth/styles'

import { Flex } from 'Components/UI'

import Head from 'Components/Blocks/Head'

import { MEDIA_SIZES } from 'Constants/media'
import { AUTH_PATHS } from 'Constants/paths'

import useLocale from 'Hooks/useLocale'

import { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const SignUp: React.FC = () => {
  const locale = useLocale()
  const s = useScopedI18n('auth')

  const BLOCKS = [
    {
      title: s('school'),
      description: '',
      logo: schoolLogo,
      route: AUTH_PATHS.SIGN_UP_SCHOOL,
    },
    {
      title: s('teacher'),
      description: '',
      logo: teacherLogo,
      route: AUTH_PATHS.SIGN_UP_TEACHER,
    },
    {
      title: s('student'),
      description: '',
      logo: studentsLogo,
      route: AUTH_PATHS.SIGN_UP_STUDENT,
    },
    {
      title: s('parent'),
      description: '',
      logo: parentLogo,
      route: AUTH_PATHS.SIGN_UP_PARENT,
    },
  ]

  return (
    <Background>
      <Head description="Sign up at iDialogue" title="Sign Up" />
      <GlobalStyle />

      <FormContainer flexWrap="wrap">
        <>
          <Title>{s('signUp')}</Title>
          <SubTitle>{s('title')}</SubTitle>

          <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
            <Flex justifyContent="space-between" mt={40} width={1}>
              {map(BLOCKS, (item, index) => (
                <Link href={item.route} key={index + locale} passHref>
                  <Item>
                    <Logo
                      alt={item.title}
                      height="130px"
                      src={item.logo}
                      width="180px"
                    />
                    <ItemTitle mt="24px">{item.title}</ItemTitle>
                    <Description>{item.description}</Description>
                  </Item>
                </Link>
              ))}
            </Flex>
          </Media>

          <Media at={MEDIA_SIZES.TABLET}>
            <Flex justifyContent="space-between" mt={40} width={1}>
              {map(BLOCKS, (item, index) => (
                <Link href={item.route} key={index} passHref>
                  <Item>
                    <Logo
                      alt={item.title}
                      height="86px"
                      src={item.logo}
                      width="120px"
                    />

                    <ItemTitle mt="24px">{item.title}</ItemTitle>
                    <Description>{item.description}</Description>
                  </Item>
                </Link>
              ))}
            </Flex>
          </Media>

          <Media at={MEDIA_SIZES.MOBILE}>
            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              mt={40}
              width={1}
            >
              <Flex justifyContent="center" width={1}>
                {map(take(BLOCKS, 2), (item, index) => (
                  <Link href={item.route} key={index} passHref>
                    <Item>
                      <Logo
                        alt={item.title}
                        height="86px"
                        src={item.logo}
                        width="120px"
                      />

                      <ItemTitle mt="24px">{item.title}</ItemTitle>
                      <Description>{item.description}</Description>
                    </Item>
                  </Link>
                ))}
              </Flex>

              <Flex justifyContent="center" width={1}>
                {map(takeRight(BLOCKS, 2), (item, index) => (
                  <Link href={item.route} key={index} passHref>
                    <Item>
                      <Logo
                        alt={item.title}
                        height="86px"
                        src={item.logo}
                        width="120px"
                      />

                      <ItemTitle mt="24px">{item.title}</ItemTitle>
                      <Description>{item.description}</Description>
                    </Item>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Media>
        </>
      </FormContainer>
    </Background>
  )
}

export default SignUp

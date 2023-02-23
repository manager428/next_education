import styled from 'styled-components'

import Image from 'next/image'

import { registrationSuccess } from 'Assets/images/auth'

import { Flex } from 'Components/UI'

export const Title = styled(Flex).attrs({
  as: 'h1',
})`
  font-weight: 600;
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const Button = styled.a`
  background: #6e46ff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  padding: 9px 10px;
  margin-top: 26px;
  width: 220px;
  justify-content: center;
  align-content: center;
  color: white;
  text-align: center;
  text-decoration: none;
`

export const Logo = styled(Image).attrs({
  src: registrationSuccess,
  width: 558,
  height: 500,
  layout: 'fixed',
  alt: 'logo',
})``

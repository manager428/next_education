import styled from 'styled-components'

import Image from 'next/image'

import { createLectoriumImage } from 'Assets/images/lectorium'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  margin-top: 40px;
`

export const Title = styled(Flex)`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  width: 100%;
`

export const Description = styled(Flex)`
  font-size: 16px;
  line-height: 24px;
  margin-top: 14px;
  width: 100%;
`

export const Button = styled.a`
  background: #49ceb1;
  border-radius: 5px;
  width: 240px;
  height: 40px;
  color: white;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 38px;
  font-size: 16px;
`

export const Logo = styled(Image).attrs({
  src: createLectoriumImage,
  width: 200,
  height: 200,
  alt: 'create lectorium',
  layout: 'fixed',
})``

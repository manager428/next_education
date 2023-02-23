import styled from 'styled-components'

import Image from 'next/image'

import { notFoundImage } from 'Assets/images/common'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  max-width: 640px;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  padding-bottom: 60px;
`

export const Title = styled(Flex).attrs({
  as: 'h1',
})`
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  width: 100%;
  justify-content: center;
`

export const SubTitle = styled(Flex)`
  font-size: 18px;
  line-height: 28px;
  color: #828282;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
`

export const NotFoundImage = styled(Image).attrs({
  src: notFoundImage,
  width: 530,
  height: 430,
  layout: 'fixed',
})`
  margin-top: 20px;
  width: 530px;
  height: 430px;
  object-fit: cover;
  margin-bottom: 40px;
`

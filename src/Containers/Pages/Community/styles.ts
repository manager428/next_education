import styled from 'styled-components'

import Image from 'next/image'

import { communityImage } from 'Assets/images/community'

import { Flex } from 'Components/UI'

export const Background = styled.div`
  background-image: url('/static/images/main_bg.svg');
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`
export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-bottom: 60px;
  padding-top: 60px;
`

export const Illustration = styled(Image).attrs({
  src: communityImage,
  width: 330,
  height: 220,
  layout: 'fixed',
})`
  object-fit: contain;
`

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #333333;
  margin-top: 27px;
  margin-bottom: 14px;
`

export const Description = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
`

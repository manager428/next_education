import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { Flex } from 'Components/UI'

export const BackButton = styled(Flex).attrs({
  as: 'button',
})`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${themeGet('colors.graySecondary')};
  border: 1px solid ${themeGet('colors.graySecondary')};
  border-radius: 5px;
  padding: 6px 4px;
  cursor: pointer;
  outline: 0;
  justify-content: center;
`

export const Avatar = styled(Image).attrs({
  width: 40,
  height: 40,
  objectFit: 'cover',
})`
  border-radius: 100px;
`

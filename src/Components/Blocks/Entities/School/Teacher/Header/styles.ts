import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { Element, Flex } from 'Components/UI'

const activeCss = css`
  color: #49ceb1;
`
export const Avatar = styled(Image).attrs({
  width: 40,
  height: 40,
  objectFit: 'cover',
})`
  border-radius: 100px;
`

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

export const StyledLink = styled(Element).attrs({
  as: 'a',
})<{ active?: boolean }>`
  font-size: 16px;
  line-height: 16px;
  color: ${themeGet('colors.graySecondary')};
  cursor: pointer;
  margin-right: 24px;
  position: relative;

  &:last-of-type {
    margin-right: 0px;
  }

  :hover {
    ${activeCss}
  }

  ${props => props.active && activeCss};
`

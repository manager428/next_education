import styled from 'styled-components'
import { position } from 'styled-system'

import Image from 'next/image'

import { pleaseSignInLogo } from 'Assets/images/popup'

import { Flex } from 'Components/UI'

export const Wrapper = styled(Flex)`
  position: absolute;
  background-color: white;
  padding: 15px 12px;
  flex-wrap: wrap;
  width: 200px !important;
  height: 234px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  z-index: 99999999;

  left: ${props => `${props.left}`};
  top: ${props => `${props.top}`};
  right: ${props => `${props.right}`};
  bottom: ${props => `${props.bottom}`};

  ${position};
`

export const Title = styled.div`
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  color: #333333;
  text-align: center;
  justify-content: center;

  a {
    color: #2d9cdb;
    text-gdecoration: none;
  }
`

export const Logo = styled(Image).attrs({
  src: pleaseSignInLogo,
  width: 185,
  height: 200,
  layout: 'fixed',
})`
  object-fit: contain;
`

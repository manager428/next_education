import styled from 'styled-components'

import { playVideoGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const VideoWrapper = styled(Flex)`
  position: relative;
  width: 610px;
  height: 370px;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
  > div {
    width: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    outline: 0px;
  }

  iframe {
    width: 100% !important;
    height: 100% !important;
  }
`

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PlayIconWrap = styled(Flex)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background-color: transparent;
`

export const PlayIcon = styled(Icon).attrs({
  icon: playVideoGlyph,
  width: 86,
  height: 86,
  fill: '#6E46FF',
})`
  cursor: pointer;
  position: absolute;
  left: calc(50% - 43px);
  top: calc(50% - 43px);
`

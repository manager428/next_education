import React from 'react'

import styled from 'styled-components'

import { mapMarkerGlyph } from 'Assets/svg/common'

import { Icon } from 'Components/UI'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  user-select: none;
  transform: translate(-50%, -50%);
`

const Marker: React.FC<{ lat: number; lng: number }> = () => (
  <Wrapper>
    <Icon icon={mapMarkerGlyph} size={50} />
  </Wrapper>
)

export default Marker

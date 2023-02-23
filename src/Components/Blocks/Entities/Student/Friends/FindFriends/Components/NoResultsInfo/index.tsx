import React from 'react'

import { noResultsGlyph } from 'Assets/svg/teachers'

import { Element, Icon } from 'Components/UI'

import { Container } from './styles'

const NoResultsInfo: React.FC = () => (
  <Container
    alignItems="center"
    flexWrap="wrap"
    justifyContent="center"
    width={260}
  >
    <Element fontSize="16px" fontWeight={600} lineHeight="22px">
      Sorry, we couldn&apos;t find any results.
    </Element>

    <Element fontSize="16px" lineHeight="22px" mb={14} mt={14}>
      Please, try another search!
    </Element>

    <Icon height={140} icon={noResultsGlyph} width={133} />
  </Container>
)

export default NoResultsInfo

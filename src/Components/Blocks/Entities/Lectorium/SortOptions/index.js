import React from 'react'
import PropTypes from 'prop-types'

import map from 'lodash/map'

import {
  Container,
  Option,
} from 'Components/Blocks/Entities/Lectorium/SortOptions/styles'

const SORT_OPTIONS = [
  {
    label: 'LATEST',
    value: 'latest',
    type: 'order',
  },
  {
    label: 'MOST POPULAR',
    value: 'popular',
    type: 'order',
  },
  { label: 'SHORT VIDEO', value: 'short', type: 'duration' },
  { label: 'LONG VIDEO', value: 'long', type: 'duration' },
]

const OWN_VIDEOS_SORT_OPTIONS = [
  ...SORT_OPTIONS,
  { label: 'PRIVATE', value: 'private', type: 'privacy' },
  { label: 'UNDER REVIEW', value: 'new', type: 'status' },
]

const SortOptions = ({ onChange, selectedValue, color, isExtended }) => (
  <Container>
    {map(isExtended ? OWN_VIDEOS_SORT_OPTIONS : SORT_OPTIONS, opt => (
      <Option
        active={selectedValue === opt.value ? 1 : 0}
        color={color}
        key={opt.value}
        mr={40}
        onClick={() => onChange(opt)}
      >
        {opt.label}
      </Option>
    ))}
  </Container>
)

SortOptions.defaultProps = {
  color: '#6E46FF',
}
SortOptions.propTypes = {
  color: PropTypes.string,
  selectedValue: PropTypes.string.isRequired,
  isExtended: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SortOptions

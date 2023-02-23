import React from 'react'
import PropTypes from 'prop-types'

import map from 'lodash/map'

import {
  Container,
  Option,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/SortOptions/styles'

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

const SortOptions = ({ onChange, selectedValue, color }) => (
  <Container>
    {map(SORT_OPTIONS, opt => (
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
  onChange: PropTypes.func.isRequired,
}

export default SortOptions

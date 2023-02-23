import React from 'react'

import map from 'lodash/map'

import { CategoriesList, Category } from './styles'

type CategoryType = {
  label: string
  value: string
}

type Props = {
  onSelect: (value: CategoryType) => void
  data: CategoryType[]
  selectedCategory: string
}

const Categories: React.FC<Props> = ({ onSelect, data, selectedCategory }) => (
  <CategoriesList>
    {map(data, (cat: CategoryType) => (
      <Category
        active={selectedCategory === cat.value}
        key={cat.value}
        onClick={() => onSelect(cat)}
      >
        {cat.label}
      </Category>
    ))}
  </CategoriesList>
)

export default Categories

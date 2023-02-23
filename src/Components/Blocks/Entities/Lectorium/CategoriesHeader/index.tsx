import React, { useMemo } from 'react'

import Link from 'next/link'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import { USER_ROLES } from 'Constants/ids'
import { LECTORIUM_CATEGORIES } from 'Constants/lectorium'
import { PUBLIC_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'

import { Category, Container, Title } from './styles'

type Props = {
  selectedCategory: string
}

const CategoriesHeader: React.FC<Props> = ({ selectedCategory }) => {
  const me = useMe()
  const role = me?.role

  const categories = useMemo(() => {
    const initialCategories = map(LECTORIUM_CATEGORIES, category => ({
      ...category,
      bold: false,
    }))

    let CATEGORIES = [
      { label: 'ALL', value: '', bold: false },
      ...initialCategories,
    ]

    if (role === USER_ROLES.teacher) {
      CATEGORIES.splice(1, 0, {
        label: 'Your Lessons',
        value: 'own_video',
        bold: true,
      })
    }

    if (role === USER_ROLES.student) {
      CATEGORIES = [
        { label: 'ALL', value: '', bold: false },
        {
          label: 'by Your Teacher',
          value: 'teacher',
          bold: true,
        },
        ...initialCategories,
      ]
    }

    return CATEGORIES
  }, [role])

  const renderCategories = () =>
    map(categories, cat => {
      const toPath =
        cat.value === ''
          ? PUBLIC_PATHS.LECTORIUM
          : `${PUBLIC_PATHS.LECTORIUM}?category=${cat.value}`

      return (
        <Link href={toPath} key={cat.value} passHref scroll={false}>
          <Category
            bold={!!cat?.bold}
            highlighted={cat.value === selectedCategory}
          >
            {cat.label}
          </Category>
        </Link>
      )
    })

  const title = get(
    filter(categories, cat => cat.value === selectedCategory),
    '[0].label',
  )

  return (
    <Flex flexWrap="wrap" mt={40} width={1}>
      <Title>{title}</Title>
      <Container>{renderCategories()}</Container>
    </Flex>
  )
}

export default CategoriesHeader

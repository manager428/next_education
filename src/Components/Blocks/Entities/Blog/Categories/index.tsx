import React, { useCallback } from 'react'

import Link from 'next/link'

import map from 'lodash/map'

import { Flex } from 'Components/UI'

import {
  BLOG_CATEGORIES,
  BLOG_CATEGORIES_LABELS,
  BLOG_CATEGORIES_OPTIONS,
} from 'Constants/blog'
import { PUBLIC_PATHS } from 'Constants/paths'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import { Category, CategoryTitle } from './styles'

type Option = {
  label: string
  value: string
}

const OPTIONS = [...BLOG_CATEGORIES_OPTIONS]

const Categories: React.FC = () => {
  const params = useRouterQueryParams()
  const catId = params.id as BLOG_CATEGORIES

  const renderCategories = useCallback(
    () =>
      map(OPTIONS, (cat: Option) => {
        const isActive = cat.value === catId || (!catId && cat.value === 'all')

        const categoryLink =
          cat.value === 'all'
            ? PUBLIC_PATHS.BLOG
            : PUBLIC_PATHS.BLOG_CATEGORY(cat.value)

        return (
          <Link href={categoryLink} key={cat.value} passHref scroll={false}>
            <Category highlighted={isActive ? 1 : 0} mr={26}>
              {cat.label}
            </Category>
          </Link>
        )
      }),
    [catId],
  )

  return (
    <Flex flexWrap="wrap" mb={24} mt={40} width={1}>
      <Flex justifyContent="flex-start" width={1}>
        {renderCategories()}
      </Flex>
      {catId && catId !== 'all' && (
        <CategoryTitle mt={40} width={1}>
          {BLOG_CATEGORIES_LABELS[catId]} Posts
        </CategoryTitle>
      )}
    </Flex>
  )
}

export default Categories

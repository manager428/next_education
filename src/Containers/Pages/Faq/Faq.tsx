import React, { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import filter from 'lodash/filter'
import get from 'lodash/get'
import includes from 'lodash/includes'
import map from 'lodash/map'
import upperFirst from 'lodash/upperFirst'

import { ogFaqImage } from 'Assets/images/og'

import { Flex, SearchInput } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import Categories from 'Components/Blocks/Entities/FAQ/Categories'
import QuestionList from 'Components/Blocks/Entities/FAQ/QuestionList'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { PUBLIC_PATHS } from 'Constants/paths'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import FAQ_API_PATHS from 'Services/Api/requests/faq/paths'

import {
  Background,
  Container,
  Content,
  SearchBlock,
  SearchTitle,
  Title,
} from './styles'

const FAQ: React.FC<{ initialData: any }> = ({ initialData }) => {
  const params = useRouterQueryParams() as {
    role: string
    category?: string
    openId?: string
  }
  const router = useRouter()

  const [category, setCategory] = useState<{ value: string } | null>({
    value: 'all',
  })

  const [searchValue, setSearchValue] = useState('')

  const URL = FAQ_API_PATHS.list(params.role)

  const { data, isLoading } = useSwrRequest({
    url: URL,
    options: { fallbackData: initialData },
  })

  useEffect(() => {
    if (params?.category) {
      setCategory({ value: params.category })
    }
  }, [params?.category])

  const handleSearch = (value: string) => {
    setSearchValue(value.toLowerCase())

    if (category) {
      setCategory({ value: 'all' })
    }
  }

  const handleSelectCategory = async (value: { value: string }) => {
    const selectedCategory = get(value, 'value', '')

    setCategory(value)

    router.push(PUBLIC_PATHS.FAQ(params.role, selectedCategory), undefined, {
      shallow: true,
    })
  }

  const getFilteredQuestions = useCallback(() => {
    if (searchValue.length > 0) {
      return filter(data?.posts, item =>
        includes(get(item, 'title', '').toLowerCase(), searchValue),
      )
    }

    if (
      (!category && searchValue.length === 0) ||
      get(category, 'value') === 'all'
    ) {
      return data?.posts || []
    }

    return filter(data?.posts, item => {
      const questionCategories = get(item, 'category.machine_name', '')

      return questionCategories === get(category, 'value')
    })
  }, [data, category, searchValue])
  const filteredQuestions = getFilteredQuestions()
  const categories = [
    { id: 0, machine_name: 'all', name: 'All' },
    ...data?.categories,
  ]

  return (
    <Background>
      <Head
        description="Faq page with all main answers"
        ogImage={ogFaqImage.src}
        title="Faq"
      />
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Title>FAQ - {params?.role?.toUpperCase()}</Title>
            <SearchBlock>
              <SearchTitle mt={14}>Have any questions?</SearchTitle>
              <Flex maxWidth={500} mt={30} width={1}>
                <SearchInput placeholder="" onChange={handleSearch} />
              </Flex>
            </SearchBlock>
            <Content mt={30}>
              <Categories
                data={map(categories, cat => ({
                  value: get(cat, 'machine_name', ''),
                  label: get(cat, 'name', ''),
                  id: get(cat, 'id'),
                }))}
                selectedCategory={get(category, 'value', '')}
                onSelect={handleSelectCategory}
              />

              <QuestionList
                category={upperFirst(get(category, 'label'))}
                openedAnswerId={params?.openId}
                questions={filteredQuestions}
                role={params.role}
              />
            </Content>
          </>
        )}
      </Container>
      <Footer />
    </Background>
  )
}

export default FAQ

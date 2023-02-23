import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import debounce from 'lodash/debounce'
import map from 'lodash/map'

import { resetIconGlyph } from 'Assets/svg/common'

import { Flex } from 'Components/UI'

import { ENGLISH_LEVEL_OPTIONS } from 'Constants/ids'

import _ from 'Services/I18n'

import {
  Container,
  LevelSelector,
  ResetButton,
  SearchIcon,
  SearchWrap,
} from './styles'

import useWindowDimensions from '../../../Header/Hooks/useWindowSize'

const LevelOptions = [
  {
    label: 'All Videos',
    value: 'all',
  },
  ...map(ENGLISH_LEVEL_OPTIONS, it => it),
]

const SearchBar = ({ onChange }) => {
  const [searchValue, setValue] = useState('')
  const [englishLevel, setEnglishLevel] = useState(LevelOptions[0])
  const debouncedOnChange = useRef(debounce(onChange, 500))

  const handleChange = e => {
    const { value } = e.target
    setValue(value)

    debouncedOnChange.current({
      searchValue: value,
      englishLevel,
    })
  }

  const handleReset = () => {
    setValue('')

    debouncedOnChange.current({
      searchValue: '',
      englishLevel,
    })
  }

  const handleChangeLevel = value => {
    setEnglishLevel(value)

    debouncedOnChange.current({
      searchValue,
      englishLevel: value,
    })
  }

  const [isResponsive, setIsResponsive] = useState(false)

  const { width } = useWindowDimensions()
  useEffect(() => {
    if (width < 720) setIsResponsive(true)
  }, [width])

  return (
    <Container>
      {isResponsive && (
        <Flex flexGrow={1} ml={30}>
          <LevelSelector
            defaultValue={LevelOptions[0]}
            isSearchable={false}
            options={LevelOptions}
            width={113}
            onChange={handleChangeLevel}
          />
        </Flex>
      )}
      <SearchWrap>
        <SearchIcon />
        <input
          placeholder={_('general.searchHere')}
          value={searchValue}
          onChange={handleChange}
        />
        {searchValue.length > 0 && (
          <ResetButton icon={resetIconGlyph} size={14} onClick={handleReset} />
        )}
      </SearchWrap>

      {!isResponsive && (
        <Flex flexGrow={1} ml={30}>
          <LevelSelector
            defaultValue={LevelOptions[0]}
            isSearchable={false}
            options={LevelOptions}
            width={160}
            onChange={handleChangeLevel}
          />
        </Flex>
      )}
    </Container>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchBar

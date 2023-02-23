import React, { useCallback, useMemo, useRef, useState } from 'react'

import map from 'lodash/map'

import { FlagEnglish, FlagRussian } from 'Assets/svg/common'

import useLocale from 'Hooks/useLocale'
import useOutsideClick from 'Hooks/useOutsideClick'
import useRole from 'Hooks/useRole'
import { useAppDispatch } from 'Hooks/useStore'

import { setLocaleThunk } from 'Store/locale/thunks'

import { profileApi } from 'Services/Api/requests'

import { Container, Dropdown, LanguageIcon } from './styles'

const LANGUAGES = {
  ENGLISH: {
    icon: FlagEnglish,
    locale: 'en',
  },
  RUSSIAN: {
    icon: FlagRussian,
    locale: 'ru',
  },
}

const LANGUAGE_OPTIONS = [LANGUAGES.ENGLISH, LANGUAGES.RUSSIAN]

const LanguageSwitcher = () => {
  const ref = useRef(null)
  const dispatch = useAppDispatch()
  const locale = useLocale()
  const { isLoggedIn } = useRole()

  const [isOpen, setOpen] = useState(false)
  useOutsideClick({ ref, onClick: () => setOpen(false) })

  const language = locale
    ? LANGUAGE_OPTIONS.find(lang => lang.locale === locale)
    : LANGUAGES.ENGLISH

  const handleClick = useCallback(
    async selected => {
      setOpen(false)

      dispatch(setLocaleThunk({ locale: selected.locale }))

      if (isLoggedIn) {
        await profileApi.update({ language_code: selected.locale })
      }
    },
    [isLoggedIn],
  )

  const renderDropdown = useCallback(
    () =>
      map(LANGUAGE_OPTIONS, (lng, index: number) => (
        <button key={lng.locale} type="button" onClick={() => handleClick(lng)}>
          <LanguageIcon
            icon={lng.icon}
            wrapperStyles={{
              mb: index === LANGUAGE_OPTIONS.length - 1 ? '0px' : '14px',
            }}
          />
        </button>
      )),
    [],
  )

  const selectedIcon = useMemo(
    () => (
      <button type="button" onClick={() => setOpen(true)}>
        <LanguageIcon icon={language?.icon} />
      </button>
    ),
    [language],
  )

  return (
    <Container ref={ref}>
      {selectedIcon}
      {isOpen && <Dropdown>{renderDropdown()}</Dropdown>}
    </Container>
  )
}

export default LanguageSwitcher

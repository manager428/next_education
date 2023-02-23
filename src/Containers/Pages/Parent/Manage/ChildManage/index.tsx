import React, { useCallback, useMemo, useState } from 'react'

import { DateTime } from 'luxon'
import Link from 'next/link'

import get from 'lodash/get'
import map from 'lodash/map'

import { parentAddChildIcon, parentAddSpaceIcon } from 'Assets/images/parent'

import { Flex } from 'Components/UI'

import Profile from 'Components/Blocks/Entities/Parent/Child/Profile'
import { AddChildModal } from 'Components/Blocks/Entities/Parent/Modals'
import Head from 'Components/Blocks/Head'

import { LANDING_LINK } from 'Constants/parent'
import { PRIVATE_PATHS } from 'Constants/paths'

import useLocale from 'Hooks/useLocale'

import { useScopedI18n } from 'Services/I18n'

import ChildSlider from './ChildSlider'
import {
  AbsoluteContainer,
  Background,
  Button,
  Container,
  InnerWrapper,
  SettingsIcon,
  SettingsWrapper,
  SubscriptionPeriod,
  Title,
} from './styles'
import { SlideType } from './types'

type Data = {
  parent: {
    fullname: string
  }
  children: []
  payment_code: any
}

type Props = {
  data?: Data
  onRefetch: () => void
  onSelectChild: (slide: SlideType) => void
}

const ChildManage: React.FC<Props> = ({ data, onRefetch, onSelectChild }) => {
  const locale = useLocale()
  const s = useScopedI18n('parent')

  const [selectedSlide, setSelectedSlide] = useState<null | SlideType>(null)
  const [childModal, setOpenChildModal] = useState(false)

  const handleSlideClick = useCallback((selected: SlideType) => {
    setSelectedSlide(selected)

    if (selected.type === 'addNewChild') {
      setOpenChildModal(true)
    }

    if (selected.type === 'addNewSpace') {
      window.open(LANDING_LINK, '_blank')
    }

    if (!selected.type && selected.id) {
      onSelectChild(selected)
    }
  }, [])

  const handleAddChildSuccess = (): void => {
    onRefetch()
  }

  const childrenData = useMemo(() => {
    const userMaxChildren =
      data?.payment_code?.child_count === 0
        ? 99999
        : data?.payment_code?.child_count

    const freeChildCounter =
      (userMaxChildren || 1) - get(data, ['children'], []).length

    const slides: Array<SlideType> = map(data?.children, child => ({
      id: get(child, 'id'),
      title: get(child, 'full_name', ''),
      avatar: get(child, 'avatar', ''),
    }))

    if (freeChildCounter > 0) {
      slides.push({
        title: s('addChild'),
        avatar: parentAddChildIcon.src,
        type: 'addNewChild',
      })
    }

    if (freeChildCounter <= 0) {
      slides.push({
        title: s('unlockPlace'),
        avatar: parentAddSpaceIcon.src,
        type: 'addNewSpace',
      })
    }

    return slides
  }, [data, s])

  const fullName = get(data, ['parent', 'full_name'], '')

  const { days: expireDays } = DateTime.fromISO(
    get(data, ['payment_code', 'valid_until'], '').replace(/ /g, 'T'),
  )
    .minus({ days: 7 })
    .diff(DateTime.local(), ['days'])

  return (
    <Background>
      <Head description="Parent Manage" title="Parent Manage" />
      <Container>
        <AddChildModal
          isOpen={childModal}
          onClose={() => setOpenChildModal(false)}
          onSuccess={handleAddChildSuccess}
        />

        <InnerWrapper>
          <AbsoluteContainer left={14} top={14}>
            <Link href={PRIVATE_PATHS.SETTINGS} passHref>
              <SettingsWrapper>
                <SettingsIcon />
              </SettingsWrapper>
            </Link>
          </AbsoluteContainer>

          <Title>
            {s('hello')}, {fullName}!
          </Title>

          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SubscriptionPeriod mt={14} warning={expireDays <= 0}>
              {s('subscription')}{' '}
              {DateTime.fromISO(
                get(data, ['payment_code', 'valid_until'], '').replace(
                  / /g,
                  'T',
                ),
              ).toFormat('dd.MM.yy')}
            </SubscriptionPeriod>

            <a href={LANDING_LINK} rel="noopener noreferrer" target="_blank">
              <Button backgroundColor="#49CEB1" flexWrap="wrap" mt={14}>
                {s('renew')}
              </Button>
            </a>
          </Flex>

          <ChildSlider
            locale={locale}
            selected={selectedSlide}
            slides={childrenData}
            onClick={handleSlideClick}
          />
        </InnerWrapper>

        {selectedSlide?.id && <Profile userId={selectedSlide.id} />}
      </Container>
    </Background>
  )
}

export default ChildManage

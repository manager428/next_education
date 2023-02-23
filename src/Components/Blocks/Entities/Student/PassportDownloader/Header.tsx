import React from 'react'

import { useRouter } from 'next/router'

import { Button, Element, Flex } from 'Components/UI'

import _, { useScopedI18n } from 'Services/I18n'

import { theme } from 'Theme'

import { GoBackButton } from './styles'

const Header = ({
  onDownloadPdf,
  onDownloadImage,
}: {
  onDownloadPdf: () => void
  onDownloadImage: () => void
}) => {
  const router = useRouter()
  const s = useScopedI18n('digitalPassport')

  const handleBack = () => {
    router.back()
  }

  return (
    <Flex
      backgroundColor={theme.colors.greenLight}
      padding="20px 0px"
      width={1}
    >
      <Flex
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        margin="0 auto"
        maxWidth="842px"
        width={1}
      >
        <Flex alignContent="center" alignItems="center">
          <Element fontSize="18px" fontWeight={600} mr="14px">
            {s('toDownloadClick')}:
          </Element>
          <Button
            color="white"
            fontSize="16px"
            fontWeight={600}
            green
            mr="14px"
            width="160px"
            onClick={onDownloadPdf}
          >
            {s('downloadPdf')}
          </Button>

          <Button
            color="white"
            fontSize="16px"
            fontWeight={600}
            green
            width="160px"
            onClick={onDownloadImage}
          >
            {s('downloadImage')}
          </Button>
        </Flex>

        <GoBackButton onClick={handleBack}>{_('buttons.goBack')}</GoBackButton>
      </Flex>
    </Flex>
  )
}

export default Header

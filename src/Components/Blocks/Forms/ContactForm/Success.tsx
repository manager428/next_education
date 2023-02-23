import React from 'react'

import Image from 'next/image'

import successImage from 'Assets/images/gsv/success-gsv.png'

import { Element, Flex } from 'Components/UI'

import {
  HomeLogo,
  ResetSuccessForm,
  SuccessContainer,
  SuccessImageContainer,
  SuccessTextContainer,
} from 'Components/Blocks/Forms/ContactForm/styles'

const Success = ({ onAction }: { onAction: () => void }) => (
  <SuccessContainer>
    <SuccessTextContainer justifyContent="center">
      <Flex justifyContent="center" width={1}>
        <HomeLogo large />
      </Flex>

      <Element as="span" textAlign="center" width={1}>
        Thank you! <br />
        We will contact you soon
      </Element>

      <ResetSuccessForm onClick={onAction}>Go Back</ResetSuccessForm>
    </SuccessTextContainer>

    <SuccessImageContainer>
      <Image src={successImage} unoptimized />
    </SuccessImageContainer>
  </SuccessContainer>
)

export default Success

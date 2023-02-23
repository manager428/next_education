import React, { useCallback } from 'react'
import { FormRenderProps } from 'react-final-form'

import { Flex, Loader } from 'Components/UI'

import FIELDS from 'Components/Blocks/Entities/Contact/Forms/ContactForm/fields'
import {
  Container,
  FormInput,
  FormMessageInput,
  SubmitButton,
} from 'Components/Blocks/Entities/Contact/Forms/ContactForm/styles'

const useFormRenderer = ({ isLoading }: { isLoading: boolean }) => {
  const renderForm = useCallback(
    (formRenderProps: FormRenderProps) => (
      <Container>
        <Flex flexWrap="wrap" justifyContent="center">
          <Flex mt={20} width={1}>
            <FormInput name={FIELDS.NAME} noError placeholder="Name" />
          </Flex>

          <Flex mt={20} width={1}>
            <FormInput name={FIELDS.PHONE} noError placeholder="Phone Number" />
          </Flex>

          <Flex mt={20} width={1}>
            <FormInput name={FIELDS.EMAIL} noError placeholder="E-mail" />
          </Flex>

          <Flex mt={20} width={1}>
            <FormMessageInput
              height="146px"
              label="Message"
              maxContentHeight="90px"
              name={FIELDS.MESSAGE}
              noError
              placeholder="Write here..."
            />
          </Flex>

          <SubmitButton
            disabled={isLoading}
            onClick={formRenderProps.handleSubmit}
          >
            Send a Message
          </SubmitButton>

          {isLoading && <Loader />}
        </Flex>
      </Container>
    ),
    [isLoading],
  )

  return [renderForm]
}

export default useFormRenderer

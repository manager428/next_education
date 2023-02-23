import React, { useCallback } from 'react'
import { FormRenderProps } from 'react-final-form'

import Link from 'next/link'

import { Flex, Loader } from 'Components/UI'

import FIELDS from 'Components/Blocks/Forms/ContactForm/fields'
import {
  BackLink,
  ButtonsContainer,
  Container,
  FormColumn,
  FormInput,
  FormSelect,
  SubmitButton,
} from 'Components/Blocks/Forms/ContactForm/styles'

import countriesList from 'Constants/countries.json'

const useFormRenderer = ({
  isLoading,
}: {
  isLoading: boolean
  submitBook?: (form: any) => void
}) => {
  const renderForm = useCallback(
    (formRenderProps: FormRenderProps) => (
      <Container>
        <Flex flexWrap="wrap" justifyContent="space-between" mt={28}>
          <FormColumn>
            <Flex flexWrap="wrap" width={1}>
              <FormInput
                label="First name<span>*</span>"
                name={FIELDS.FIRST_NAME}
                noError
                placeholder="Enter your first name"
              />
            </Flex>
            <Flex mt={14} width={1}>
              <FormInput
                label="Last name<span>*</span>"
                name={FIELDS.LAST_NAME}
                noError
                placeholder="Enter your last name"
              />
            </Flex>
            <Flex mt={14} width={1}>
              <FormInput
                label="Role"
                name={FIELDS.ROLE}
                noError
                placeholder="Enter your role"
              />
            </Flex>
          </FormColumn>

          <FormColumn>
            <Flex width={1}>
              <FormSelect
                label="Select your country<span>*</span>"
                name={FIELDS.COUNTRY}
                noError
                options={countriesList}
                placeholder="Select your country"
                width="100%"
              />
            </Flex>
            <Flex mt={14} width={1}>
              <FormInput
                label="City"
                name={FIELDS.CITY}
                noError
                placeholder="Enter your city"
              />
            </Flex>
            <Flex mt={14} width={1}>
              <FormInput
                label="Email<span>*</span>"
                name={FIELDS.EMAIL}
                noError
                placeholder="Enter your email"
              />
            </Flex>
          </FormColumn>

          <ButtonsContainer>
            <SubmitButton
              disabled={isLoading}
              onClick={formRenderProps.handleSubmit}
            >
              REGISTER
            </SubmitButton>

            {/* <span>OR</span> */}

            {/* <SubmitButton */}
            {/*  disabled={isLoading} */}
            {/*  green */}
            {/*  onClick={() => submitBook(formRenderProps.form)} */}
            {/* > */}
            {/*  BOOK A CALL */}
            {/* </SubmitButton> */}
          </ButtonsContainer>

          <Flex justifyContent="center" mt={28} width={1}>
            <Link href="/" passHref>
              <BackLink>Go Back</BackLink>
            </Link>
          </Flex>

          {isLoading && <Loader />}
        </Flex>
      </Container>
    ),
    [isLoading],
  )

  return [renderForm]
}

export default useFormRenderer

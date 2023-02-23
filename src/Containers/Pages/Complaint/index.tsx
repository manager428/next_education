import React, { useCallback, useEffect, useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import pick from 'lodash/pick'
import some from 'lodash/some'

import { Flex, Loader } from 'Components/UI'

import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import moderatorApi from 'Services/Api/requests/moderator'

import { presenceConstraint } from 'Utils/constraints'

import {
  Background,
  Container,
  FormContainer,
  FormEditorInput,
  FormSelect,
  SubmitButton,
  Text,
} from './styles'

const FIELDS = {
  reason: 'reason',
  description: 'description',
}

type FormValues = {
  reason: {
    value: string
    label: string
  }
  description: string
}

const { Form } = withTypes<FormValues>()

const FORM_CONSTRAINS = {
  ...presenceConstraint(FIELDS.reason),
  ...presenceConstraint(FIELDS.description),
}

const REASON_OPTIONS = [
  {
    label: 'Rude sayings',
    value: 'rude_sayings',
  },
  {
    label: 'Bullying or harassment',
    value: 'bulling',
  },
  {
    label: 'Hate speech or symbols',
    value: 'hate_speech',
  },
  {
    label: 'Prohibited content',
    value: 'prohibited_content',
  },
  {
    label: 'Suicide or self injury',
    value: 'suicide',
  },
  {
    label: 'Other',
    value: 'other',
  },
]

const Complaint: React.FC = () => {
  const locationParams = useRouterQueryParams()

  const {
    user,
    userId,
    commentId,
    section,
    experienceType,
  } = pick(locationParams, [
    'user',
    'userId',
    'commentId',
    'section',
    'experienceType',
  ])

  const [isFormSent, setFormSent] = useState(false)
  const [isMissingParams, setParamsError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (
      some([user, userId, commentId, section], it => it === 'undefined' || !it)
    ) {
      setParamsError(true)
    }
  }, [])

  const handleSubmitForm = useCallback(async (values: FormValues) => {
    if (
      !userId ||
      !commentId ||
      !section ||
      Array.isArray(section) ||
      Array.isArray(experienceType)
    )
      return

    setLoading(true)

    const params = {
      user_id: +userId,
      comment_id: +commentId,
      complaint_reason: values.reason.value,
      section,
      text_reason: values.description,
      experience_type: experienceType,
    }

    if (experienceType === 'undefined' || !experienceType) {
      delete params.experience_type
    }

    try {
      await moderatorApi.addComplaint(params)
      setFormSent(true)
      setError(false)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const renderForm = useCallback(
    ({ handleSubmit }) => (
      <FormContainer>
        <Flex mt="14px" width={1}>
          <FormSelect
            name={FIELDS.reason}
            options={REASON_OPTIONS}
            placeholder="Select a reason"
            selectProps={{ isSearchable: false }}
          />
        </Flex>

        <Flex mt="14px" width={1}>
          <FormEditorInput
            height="180px"
            maxContentHeight="120px"
            name={FIELDS.description}
            placeholder="Write here..."
            styles={{
              mb: 0,
            }}
            type="textarea"
          />
        </Flex>

        <Flex justifyContent="flex-end" mt={14} width={1}>
          <SubmitButton
            disabled={isLoading}
            width="120px"
            onClick={handleSubmit}
          >
            {isLoading ? <Loader /> : 'Report'}
          </SubmitButton>
        </Flex>
      </FormContainer>
    ),
    [],
  )

  return (
    <Background>
      <Head description="Complaint" title="Complaint" />

      {isFormSent ? (
        <Container flex={1} pb={60} pt={60}>
          <FormContainer flexDirection="column" justifyContent="center">
            <Text justifyContent="center" width={1}>
              Thanks for reporting
            </Text>
            <Text justifyContent="center" mt={20} width={1}>
              Thank you for helping us keep iDialogue a safe and supportive
              community.
            </Text>
          </FormContainer>
        </Container>
      ) : (
        <Container flex={1} pb={60} pt={60}>
          {isMissingParams ? (
            <FormContainer flexDirection="column" justifyContent="center">
              <Text justifyContent="center" width={1}>
                Something going wrong (contact with support)
              </Text>
              <Text justifyContent="center" mt={20} width={1}>
                Params are invalid
              </Text>
            </FormContainer>
          ) : (
            <FormContainer
              flexDirection="column"
              justifyContent="center"
              mt={40}
            >
              <Text justifyContent="center" width={1}>
                Why are you reporting {user}?
              </Text>

              <Form
                render={renderForm}
                validate={values => validate(values, FORM_CONSTRAINS)}
                onSubmit={handleSubmitForm}
              />
            </FormContainer>
          )}

          {error && (
            <FormContainer flexDirection="column" justifyContent="center">
              <Text color="#eb5757" justifyContent="center" width={1}>
                Something going wrong, please contact with support
              </Text>
            </FormContainer>
          )}
        </Container>
      )}

      <Footer />
    </Background>
  )
}

export default Complaint

/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useMemo, useState } from 'react'
import { withTypes } from 'react-final-form'

import get from 'lodash/get'
import map from 'lodash/map'
import pickBy from 'lodash/pickBy'
import split from 'lodash/split'
import uniq from 'lodash/uniq'

import { Flex, Loader } from 'Components/UI'

import {
  Error,
  FormButton,
  Success,
} from 'Components/Blocks/Entities/Settings/Forms/styles'
import { InputField, SelectField } from 'Components/Blocks/Fields'

import { ENGLISH_LEVEL_ENUM } from 'Constants/ids'

import { profileApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

import SettingInterests from './Components/SettingInterests'

enum FIELDS {
  BIO = 'bio',
  ENGLISH_LEVEL = 'englishLevel',
  INTERESTS = 'interests',
}

type FormValues = {
  [FIELDS.BIO]: string
  [FIELDS.ENGLISH_LEVEL]: Array<{ label: string; value: string } | void>
}

const { Form } = withTypes<FormValues>()

type Props = {
  initialData: {
    interests: string
    english_level: string
    bio: string
  }
}

const AboutForm: React.FC<Props> = ({ initialData }) => {
  const s = useScopedI18n('settings')
  const [responseError, setResponseError] = useState<string[]>([])
  const [isSuccess, setSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleSubmitForm = useCallback(async values => {
    setResponseError([])
    setSuccess(false)
    setLoading(true)

    try {
      const filledValues = pickBy({
        english_level: values[FIELDS.ENGLISH_LEVEL]?.value,
        bio: values[FIELDS.BIO],
        interests: uniq(values[FIELDS.INTERESTS]),
      })

      await profileApi.update(filledValues)

      setSuccess(true)
    } catch (e) {
      const errors = get(e, ['data', 'errors']) || [
        _('error.somethingGoingWrong'),
      ]
      setResponseError(errors)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSelectInterest = (form, interests) => {
    form.change(FIELDS.INTERESTS, interests)
  }

  const initialValues = useMemo(
    () => ({
      [FIELDS.BIO]: initialData?.bio,
      [FIELDS.INTERESTS]: split(initialData?.interests, ', '),
      [FIELDS.ENGLISH_LEVEL]: initialData?.english_level
        ? [
            {
              value: initialData?.english_level,
              label: initialData?.english_level,
            },
          ]
        : [],
    }),
    [initialData],
  )

  const renderResponseErrors = () => (
    <Error>{map(responseError, err => err).join(' ')}</Error>
  )

  const renderForm = useCallback(
    ({ handleSubmit, form, values }) => {
      const selectedInterests = get(values, 'interests')

      return (
        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          width={1}
        >
          <Flex
            alignContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
            width={1}
          >
            <Flex mt={20}>
              <SelectField
                className="profile-select"
                height={null}
                label={s('fields.groupLevelLabel')}
                name={FIELDS.ENGLISH_LEVEL}
                options={[
                  { label: 'Beginner', value: ENGLISH_LEVEL_ENUM.Beginner },
                  {
                    label: 'Intermediate',
                    value: ENGLISH_LEVEL_ENUM.Intermediate,
                  },
                  { label: 'Advanced', value: ENGLISH_LEVEL_ENUM.Advanced },
                ]}
                placeholder={s('fields.groupLevelPlaceholder')}
                portal={null}
                top={null}
                width="162px"
              />
            </Flex>

            <InputField
              height="140px"
              initialValue=""
              label={s('fields.bioLabel')}
              name={FIELDS.BIO}
              noError
              placeholder={s('fields.bioLabel')}
              styles={{ mt: '20px' }}
              tip={null}
              type="textarea"
            />

            {selectedInterests && (
              <Flex mt="20px">
                <SettingInterests
                  userInterests={selectedInterests}
                  onSelect={interests => handleSelectInterest(form, interests)}
                />
              </Flex>
            )}
          </Flex>

          <Flex mt={20} width={1}>
            <FormButton gray mr={20} width="146px" onClick={() => form.reset()}>
              {_('buttons.cancel')}
            </FormButton>
            <FormButton
              as="button"
              ml={30}
              type="submit"
              width="146px"
              onClick={handleSubmit}
            >
              {_('buttons.saveChanges')}
            </FormButton>
          </Flex>

          {isLoading && <Loader />}

          {isSuccess && <Success>{s('successMessage')}</Success>}

          {renderResponseErrors()}
        </Flex>
      )
    },
    [
      responseError,
      isSuccess,
      isLoading,
      handleSelectInterest,
      handleSubmitForm,
    ],
  )

  return (
    <Flex>
      <Form
        initialValues={initialValues}
        render={renderForm}
        onSubmit={handleSubmitForm}
      />
    </Flex>
  )
}

export default AboutForm

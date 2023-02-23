import React, { useCallback, useMemo, useState } from 'react'
import { withTypes } from 'react-final-form'

import Image from 'next/image'
import validate from 'validate.js'

import { find } from 'lodash'
import get from 'lodash/get'
import map from 'lodash/map'
import pickBy from 'lodash/pickBy'

import { Flex, Loader } from 'Components/UI'

import { InputField, SelectField } from 'Components/Blocks/Fields'

import countriesList from 'Constants/countries.json'

import useMe from 'Hooks/useMe'

import { schoolApi } from 'Services/Api/requests'

import { AvatarField, EditIcon, Error, FormButton, Success } from '../styles'

enum FIELDS {
  AVATAR = 'avatar',
  SCHOOL_NAME = 'schoolName',
  SCHOOL_PRINCIPAL_NAME = 'schoolPrincipalName',
  SCHOOL_PRINCIPAL_LASTNAME = 'schoolPrincipalLastname',
  EMAIL = 'email',
  COUNTRY = 'country',
}

type FormValues = {
  [FIELDS.AVATAR]: File | string
  [FIELDS.SCHOOL_NAME]: string
  [FIELDS.SCHOOL_PRINCIPAL_NAME]: string
  [FIELDS.SCHOOL_PRINCIPAL_LASTNAME]: string
  [FIELDS.EMAIL]: string
  [FIELDS.COUNTRY]: { label: string; value: string }
}

const { Form } = withTypes<FormValues>()

const handleValidate = values =>
  validate(values, {
    [FIELDS.AVATAR]: {
      presence: true,
    },
  })

type Props = {
  initialData: {
    [FIELDS.AVATAR]: string
    [FIELDS.SCHOOL_NAME]: string
    [FIELDS.SCHOOL_PRINCIPAL_NAME]: string
    [FIELDS.SCHOOL_PRINCIPAL_LASTNAME]: string
    [FIELDS.COUNTRY]?: string
    [FIELDS.EMAIL]: string
  }
  onSuccess: (formValues: Partial<FormValues>) => void
}

const ProfileForm: React.FC<Props> = ({ initialData, onSuccess }) => {
  const [responseError, setResponseError] = useState<string[]>([])
  const [isSuccess, setSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const me = useMe()
  const schoolId = me?.school?.id ?? 0

  const handleSubmitForm = useCallback(
    async values => {
      setResponseError([])
      setSuccess(false)
      setLoading(true)

      try {
        const filledValues = pickBy({
          school_name: values[FIELDS.SCHOOL_NAME],
          logo: values[FIELDS.AVATAR],
          first_name: values[FIELDS.SCHOOL_PRINCIPAL_NAME],
          last_name: values[FIELDS.SCHOOL_PRINCIPAL_LASTNAME],
          email: values[FIELDS.EMAIL],
          country_code: values[FIELDS.COUNTRY].value,
        })

        if (typeof filledValues?.logo === 'string') delete filledValues.logo

        await schoolApi.updateSchoolProfile(schoolId, filledValues)

        onSuccess(filledValues)
        setSuccess(true)
      } catch (e) {
        const errors = get(e, ['data', 'errors']) || [
          'Something going wrong, please contact with support!',
        ]
        setResponseError(errors)
      } finally {
        setLoading(false)
      }
    },
    [onSuccess],
  )

  const handleAvatarChange = (value, onChange) => {
    const file = value.target.files[0]

    onChange(FIELDS.AVATAR, file)
  }

  const initialValues = useMemo(
    () => ({
      [FIELDS.AVATAR]: initialData?.avatar,
      [FIELDS.SCHOOL_NAME]: initialData?.[FIELDS.SCHOOL_NAME],
      [FIELDS.SCHOOL_PRINCIPAL_NAME]:
        initialData?.[FIELDS.SCHOOL_PRINCIPAL_NAME],
      [FIELDS.SCHOOL_PRINCIPAL_LASTNAME]:
        initialData?.[FIELDS.SCHOOL_PRINCIPAL_LASTNAME],
      [FIELDS.EMAIL]: initialData?.[FIELDS.EMAIL],
      [FIELDS.COUNTRY]: initialData?.country
        ? find(countriesList, country => country.label === initialData.country)
        : undefined,
    }),
    [],
  )

  const renderAvatarField = useCallback(
    (values, onChange) => {
      const avatarValue = values?.[FIELDS.AVATAR]

      const isFile = avatarValue instanceof File

      const avatarPreview = isFile
        ? URL.createObjectURL(avatarValue)
        : avatarValue

      return (
        <AvatarField>
          <Image
            alt="avatar"
            height="100px"
            src={avatarPreview}
            width="100px"
          />
          <span className="edit-block" role="button" tabIndex={0}>
            <EditIcon />
          </span>
          <input
            accept="image/*"
            name={FIELDS.AVATAR}
            type="file"
            onChange={value => handleAvatarChange(value, onChange)}
          />
        </AvatarField>
      )
    },
    [initialData],
  )

  const renderResponseErrors = () => (
    <Error>{map(responseError, err => err).join(' ')}</Error>
  )

  const renderForm = useCallback(
    ({ handleSubmit, values, form }) => (
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
          width="350px"
        >
          <Flex mb={20}>{renderAvatarField(values, form.change)}</Flex>

          <InputField
            height="40px"
            initialValue=""
            label="School name"
            name={FIELDS.SCHOOL_NAME}
            noError
            placeholder="School name"
            styles={{ mb: '14px' }}
            tip={null}
            type="text"
          />

          <InputField
            height="40px"
            label="School principal first name"
            name={FIELDS.SCHOOL_PRINCIPAL_NAME}
            noError
            placeholder="Principal First Name"
            styles={{ mb: '14px' }}
            tip={null}
            type="text"
          />

          <InputField
            height="40px"
            label="School principal last name"
            name={FIELDS.SCHOOL_PRINCIPAL_LASTNAME}
            noError
            placeholder="Principal Last Name"
            styles={{ mb: '14px' }}
            tip={null}
            type="text"
          />
        </Flex>

        <Flex
          alignContent="flex-start"
          flexDirection="column"
          flexGrow={1}
          ml={50}
          pt={120}
        >
          <InputField
            height="40px"
            label="Email"
            name={FIELDS.EMAIL}
            noError
            placeholder="Email"
            styles={{ mb: '14px' }}
            tip={null}
            type="text"
          />

          <SelectField
            className="profile-select"
            height={null}
            label="Country"
            name={FIELDS.COUNTRY}
            noError
            options={countriesList}
            placeholder="Select Country"
            portal={null}
            top={null}
          />
        </Flex>

        <Flex mt={20}>
          <FormButton gray mr={20} width="146px" onClick={() => form.reset()}>
            Cancel
          </FormButton>
          <FormButton
            as="button"
            ml={30}
            type="submit"
            width="146px"
            onClick={handleSubmit}
          >
            Save Changes
          </FormButton>
        </Flex>

        {isLoading && <Loader />}
        {isSuccess && <Success>Profile successfully updated!</Success>}
        {renderResponseErrors()}
      </Flex>
    ),
    [responseError, isSuccess, isLoading],
  )

  return (
    <Flex>
      <Form
        initialValues={initialValues}
        render={renderForm}
        validate={handleValidate}
        onSubmit={handleSubmitForm}
      />
    </Flex>
  )
}

export default ProfileForm

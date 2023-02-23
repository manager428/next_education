/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useMemo, useState } from 'react'
import { withTypes } from 'react-final-form'

import Image from 'next/image'
import validate from 'validate.js'

import { find } from 'lodash'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import map from 'lodash/map'
import pickBy from 'lodash/pickBy'

import { Flex, Loader } from 'Components/UI'

import {
  AvatarField,
  EditIcon,
  Error,
  FormButton,
  Success,
} from 'Components/Blocks/Entities/Settings/Forms/styles'
import { InputField, SelectField } from 'Components/Blocks/Fields'

import countriesList from 'Constants/countries.json'

import useRole from 'Hooks/useRole'

import { profileApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

enum FIELDS {
  AVATAR = 'avatar',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  USERNAME = 'username',
  GENDER = 'gender',
  EMAIL = 'email',
  YEAR_OF_BIRTH = 'yearOfBirth',
  COUNTRY = 'country',
}

type FormValues = {
  [FIELDS.AVATAR]: File | string
  [FIELDS.FIRST_NAME]: string
  [FIELDS.LAST_NAME]: string
  [FIELDS.USERNAME]: string
  [FIELDS.EMAIL]: string
  [FIELDS.YEAR_OF_BIRTH]: number
  [FIELDS.COUNTRY]: { label: string; value: string }
  [FIELDS.GENDER]?: { label: string; value: string }
}

const { Form } = withTypes<FormValues>()

type Props = {
  initialData: {
    avatar: string
    first_name: string
    last_name: string
    username: string
    gender: string
    country?: string
    english_level: string
    year_of_birth?: number
  }
  onSuccess: (formValues: Partial<FormValues>) => void
}

const ProfileForm: React.FC<Props> = ({ initialData, onSuccess }) => {
  const s = useScopedI18n('settings')
  const { isStudent, isParent } = useRole()

  const [responseError, setResponseError] = useState<string[]>([])
  const [isSuccess, setSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const FORM_CONSTRAINS = useMemo(() => {
    const constrains = {
      [FIELDS.FIRST_NAME]: {
        presence: {
          presence: true,
          message: `^${_('error.cantBeBlank')}`,
        },
      },
      [FIELDS.LAST_NAME]: {
        presence: {
          presence: true,
          message: `^${_('error.cantBeBlank')}`,
        },
      },
    }

    if (isStudent) {
      constrains[FIELDS.USERNAME] = {
        presence: true,
      }
    }

    return constrains
  }, [initialData, isStudent])

  const handleSubmitForm = useCallback(
    async values => {
      setResponseError([])
      setSuccess(false)
      setLoading(true)

      try {
        const formData = new FormData()

        const filledValues = pickBy({
          first_name: values[FIELDS.FIRST_NAME],
          last_name: values[FIELDS.LAST_NAME],
          username: values[FIELDS.USERNAME],
          gender: values[FIELDS.GENDER]?.value,
          avatar: values[FIELDS.AVATAR],
          country_code: values[FIELDS.COUNTRY].value,
        })

        if (typeof filledValues[FIELDS.AVATAR] === 'string')
          delete filledValues[FIELDS.AVATAR]

        forEach(filledValues, (value, index) => {
          formData.append(index, value as any)
        })

        await profileApi.update(formData)

        onSuccess(filledValues)

        setSuccess(true)
      } catch (e) {
        const errors = get(e, ['data', 'errors']) || [
          _('error.somethingGoingWrong'),
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
      [FIELDS.USERNAME]: initialData?.username,
      [FIELDS.FIRST_NAME]: initialData?.first_name,
      [FIELDS.LAST_NAME]: initialData?.last_name,
      [FIELDS.YEAR_OF_BIRTH]: initialData?.year_of_birth,
      [FIELDS.GENDER]: initialData?.gender
        ? { value: initialData?.gender, label: initialData?.gender }
        : undefined,
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
        <Flex>
          <Flex
            alignContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
            width="354px"
          >
            <Flex mb={20}>{renderAvatarField(values, form.change)}</Flex>

            <InputField
              height="40px"
              initialValue=""
              label={s('fields.firstNameLabel')}
              name={FIELDS.FIRST_NAME}
              noError
              placeholder={s('fields.firstNamePlaceholder')}
              styles={{ mb: '14px' }}
              tip={null}
              type="text"
            />

            <InputField
              height="40px"
              label={s('fields.lastNameLabel')}
              name={FIELDS.LAST_NAME}
              noError
              placeholder={s('fields.lastNamePlaceholder')}
              styles={{ mb: '14px' }}
              tip={null}
              type="text"
            />

            {!isParent && (
              <SelectField
                className="profile-select"
                height={null}
                label={s('fields.countryLabel')}
                name={FIELDS.COUNTRY}
                noError
                options={countriesList}
                placeholder={s('fields.countryPlaceholder')}
                portal={null}
                top={null}
              />
            )}
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
              label={s('fields.usernameLabel')}
              name={FIELDS.USERNAME}
              noError
              parse={value => {
                const formattedValue = value || ''
                if (formattedValue === '') return undefined

                return formattedValue.replace(/[^A-Za-z0-9_@]/gi, '')
              }}
              placeholder={s('fields.usernamePlaceholder')}
              styles={{ mb: '14px' }}
              tip={null}
              type="text"
            />

            {!isParent && (
              <SelectField
                className="profile-select"
                height={null}
                label={s('fields.genderLabel')}
                name={FIELDS.GENDER}
                noError
                options={[
                  { label: 'Male', value: 'Male' },
                  { label: 'Female', value: 'Female' },
                ]}
                placeholder={s('fields.genderPlaceholder')}
                portal={null}
                top={null}
              />
            )}

            {isStudent && (
              <InputField
                disabled
                height="40px"
                label={s('fields.yearOfBirthLabel')}
                name={FIELDS.YEAR_OF_BIRTH}
                noError
                placeholder="YYYY"
                styles={{ mt: '14px' }}
                tip={null}
                type="text"
              />
            )}
          </Flex>
        </Flex>

        <Flex mt={20}>
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
    ),
    [responseError, isSuccess, isLoading],
  )

  return (
    <Flex>
      <Form
        initialValues={initialValues}
        render={renderForm}
        validate={values => validate(values, FORM_CONSTRAINS)}
        onSubmit={handleSubmitForm}
      />
    </Flex>
  )
}

export default ProfileForm

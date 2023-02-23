import React, { useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { EditorInputField, ImageUploadField } from 'Components/Blocks/Fields'

import { DEBATES_CATEGORIES } from 'Constants/debates'
import { englishCharsRegex } from 'Constants/regex'

import { debatesApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

import { entityToOptions } from 'Utils/common'
import { presenceConstraint } from 'Utils/constraints'

import {
  Button,
  ErrorContainer,
  FormContainer,
  FormInput,
  FormSelect,
} from './styles'

enum FIELDS {
  title = 'title',
  category = 'category',
  image = 'image',
  description = 'description',
}

type FormValues = {
  [FIELDS.title]: string | undefined
  [FIELDS.category]: typeof DEBATES_CATEGORIES[number] | undefined
  [FIELDS.description]: string | undefined
  [FIELDS.image]: File | undefined
}

type Props = {
  initValues?: FormValues
  onSuccess: () => void
}

const { Form } = withTypes<FormValues>()

const INITIAL_VALUES: FormValues = {
  [FIELDS.title]: undefined,
  [FIELDS.category]: undefined,
  [FIELDS.description]: undefined,
  [FIELDS.image]: undefined,
}

const CATEGORIES_OPTIONS = entityToOptions(DEBATES_CATEGORIES, {
  withHash: true,
  uppercase: true,
})

const FORM_CONSTRAINS = {
  ...presenceConstraint(FIELDS.category),
  ...presenceConstraint(FIELDS.image),
  [FIELDS.title]: {
    presence: {
      message: `^${_('error.cantBeBlank')}`,
    },
    format: {
      pattern: englishCharsRegex,
      flags: 'm',
      message: `^${_('error.textShouldBeWrittenInEnglish')}`,
    },
  },
  [FIELDS.description]: {
    format: {
      pattern: englishCharsRegex,
      flags: 'm',
      message: `^${_('error.textShouldBeWrittenInEnglish')}`,
    },
  },
}

const CreateDebateForm: React.FC<Props> = ({ onSuccess }) => {
  const s = useScopedI18n('modals.createDebate')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmitForm = async (values: FormValues): Promise<any> => {
    setLoading(true)
    setError(null)

    const formData = new FormData()

    formData.append('title', get(values, [FIELDS.title], ''))
    formData.append('category', get(values, [FIELDS.category, 'value']))
    formData.append('content', get(values, [FIELDS.description], ''))
    formData.append('image', get(values, [FIELDS.image], ''))

    try {
      await debatesApi.create(formData)
      onSuccess()
    } catch (e) {
      const errors = map(e?.data.errors, er => er)

      setError(errors.length > 0 ? errors.join(', ') : 'Something going wrong')
    } finally {
      setLoading(false)
    }
  }

  const renderForm = ({
    handleSubmit,
  }: {
    handleSubmit: () => void
  }): React.ReactNode => (
    <FormContainer>
      <Flex mr={20} width={482}>
        <FormInput
          label={null}
          name={FIELDS.title}
          placeholder={s('fields.questionPlaceholder')}
          tip={null}
          type="text"
        />
      </Flex>
      <Flex>
        <FormSelect
          name={FIELDS.category}
          noError
          options={CATEGORIES_OPTIONS}
          placeholder={s('fields.selectPlaceholder')}
          selectProps={{ isSearchable: false }}
          width="360px"
        />
      </Flex>

      <Flex alignItems="flex-start" mt={14} width={1}>
        <Flex width={482}>
          <EditorInputField
            className="description-field"
            height="204px"
            label={null}
            maxContentHeight="142px"
            name={FIELDS.description}
            placeholder={s('fields.descriptionPlaceholder')}
            tip={null}
            type="textarea"
          />
        </Flex>
        <Flex ml={20} width={360}>
          <ImageUploadField mt={0} name={FIELDS.image} noError />
        </Flex>
      </Flex>

      <Flex justifyContent="center" mt={24} width={1}>
        {isLoading ? (
          <Loader />
        ) : (
          <Button onClick={handleSubmit}>{s('submit')}</Button>
        )}
      </Flex>
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </FormContainer>
  )

  return (
    <Flex flexWrap="wrap" width={1}>
      <Form
        initialValues={INITIAL_VALUES}
        render={renderForm}
        validate={values => validate(values, FORM_CONSTRAINS)}
        onSubmit={handleSubmitForm}
      />
    </Flex>
  )
}

export default CreateDebateForm

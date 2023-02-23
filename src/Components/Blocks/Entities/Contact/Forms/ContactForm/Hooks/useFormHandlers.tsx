import { useCallback } from 'react'

import validate from 'validate.js'

import isNil from 'lodash/isNil'
import negate from 'lodash/negate'
import pickBy from 'lodash/pickBy'

import FIELDS from 'Components/Blocks/Entities/Contact/Forms/ContactForm/fields'

import { aboutApi } from 'Services/Api/requests'

const useFormHandlers = ({ onSuccess, setLoading }) => {
  const handleResetForm = useCallback(
    form => {
      setTimeout(form.reset)
      onSuccess(true)

      form.mutators.setFieldTouched([FIELDS.NAME], false)
      form.mutators.setFieldTouched([FIELDS.EMAIL], false)
      form.mutators.setFieldTouched([FIELDS.MESSAGE], false)
      form.mutators.setFieldTouched([FIELDS.PHONE], false)
    },
    [onSuccess],
  )

  const handleSubmitForm = useCallback(async (values, form) => {
    setLoading(true)

    const variables = pickBy(values, negate(isNil))

    try {
      await aboutApi.sendContactForm({
        name: variables.name,
        message: variables.message,
        email: variables.email,
        phone: variables?.phone,
      })
      handleResetForm(form)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleValidateForm = useCallback(values => {
    const constrains = {
      [FIELDS.NAME]: {
        presence: true,
        type: 'string',
      },
      [FIELDS.EMAIL]: {
        presence: true,
        email: true,
      },
      [FIELDS.MESSAGE]: {
        presence: true,
      },
    }

    return validate(values, constrains)
  }, [])

  return {
    submitForm: handleSubmitForm,
    resetForm: handleResetForm,
    validateForm: handleValidateForm,
  }
}

export default useFormHandlers

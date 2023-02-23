import { useCallback, useEffect } from 'react'
import { openPopupWidget } from 'react-calendly'

import validate from 'validate.js'

import FIELDS from 'Components/Blocks/Forms/ContactForm/fields'

import { formsApi } from 'Services/Api/requests'

const useFormHandlers = ({ onSuccess, setLoading }) => {
  const calendlyEventListener = e => {
    function isCalendlyEvent() {
      return e.data.event && e.data.event.indexOf('calendly') === 0
    }

    if (isCalendlyEvent()) {
      if (e.data?.event === 'calendly.event_scheduled') {
        onSuccess(true)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('message', calendlyEventListener)

    return () => {
      window.removeEventListener('message', calendlyEventListener)
    }
  }, [])

  const setAllFieldsTouched = (form, value) => {
    form.mutators.setFieldTouched([FIELDS.FIRST_NAME], value)
    form.mutators.setFieldTouched([FIELDS.LAST_NAME], value)
    form.mutators.setFieldTouched([FIELDS.EMAIL], value)
    form.mutators.setFieldTouched([FIELDS.ROLE], value)
    form.mutators.setFieldTouched([FIELDS.COUNTRY], value)
  }

  const handleResetForm = useCallback(
    form => {
      setTimeout(form.reset)

      onSuccess(true)

      setAllFieldsTouched(form, false)
    },
    [onSuccess],
  )

  const handleSubmitForm = useCallback(async (values, form) => {
    setLoading(true)

    const formData = new FormData()
    formData.append('first_name', values[FIELDS.FIRST_NAME])
    formData.append('last_name', values[FIELDS.LAST_NAME])
    formData.append('email', values[FIELDS.EMAIL])
    formData.append('country', values[FIELDS.COUNTRY]?.label)

    if (values[FIELDS.ROLE]) {
      formData.append('role', values[FIELDS.ROLE])
    }

    if (values[FIELDS.CITY]) {
      formData.append('city', values[FIELDS.CITY])
    }

    try {
      await formsApi.sendBlogForm(formData)

      handleResetForm(form)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleBook = useCallback(async form => {
    const { values, valid } = form.getState()

    setAllFieldsTouched(form, true)

    if (valid) {
      openPopupWidget({
        url:
          'https://calendly.com/nataliabut/idialogue-partnership-exploration',
        prefill: {
          name: `${values[FIELDS.FIRST_NAME]} ${values[FIELDS.LAST_NAME]}`,
          email: values[FIELDS.EMAIL],
        },
      })

      await handleSubmitForm(values, form)
    }
  }, [])

  const handleValidateForm = useCallback(values => {
    const constrains = {
      [FIELDS.FIRST_NAME]: {
        presence: true,
        type: 'string',
      },
      [FIELDS.LAST_NAME]: {
        presence: true,
        type: 'string',
      },
      [FIELDS.COUNTRY]: {
        presence: true,
      },
      [FIELDS.EMAIL]: {
        presence: true,
        email: true,
      },
    }

    return validate(values, constrains)
  }, [])

  return {
    submitForm: handleSubmitForm,
    submitBook: handleBook,
    resetForm: handleResetForm,
    validateForm: handleValidateForm,
  }
}

export default useFormHandlers

import React, { useState } from 'react'
import { Form } from 'react-final-form'

import setFieldTouched from 'final-form-set-field-touched'

import useFormHandlers from './Hooks/useFormHandlers'
import useFormRenderer from './Hooks/useFormRenderer'

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const { submitForm, validateForm } = useFormHandlers({
    onSuccess: () => null,
    setLoading,
  })

  const [renderForm] = useFormRenderer({ isLoading: loading })

  return (
    <Form
      mutators={{ setFieldTouched } as any}
      render={renderForm}
      validate={validateForm}
      onSubmit={submitForm}
    />
  )
}

export default ContactForm

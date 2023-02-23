import React, { useState } from 'react'
import { Form } from 'react-final-form'

import setFieldTouched from 'final-form-set-field-touched'
import { useRouter } from 'next/router'

import { Flex } from 'Components/UI'

import useFormHandlers from './Hooks/useFormHandlers'
import useFormRenderer from './Hooks/useFormRenderer'
import { HomeLogo, Title } from './styles'
import Success from './Success'

const ContactForm: React.FC = () => {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)

  const { submitForm, validateForm, submitBook } = useFormHandlers({
    onSuccess: setSuccess,
    setLoading,
  })

  const [renderForm] = useFormRenderer({ isLoading, submitBook })

  const handleOnAction = () => {
    router.push('/')
  }

  return (
    <>
      {isSuccess ? (
        <Success onAction={handleOnAction} />
      ) : (
        <>
          <Flex justifyContent="center" width={1}>
            <HomeLogo />
          </Flex>
          <Title large>Registration form</Title>
          <Title>
            Webinar: How to support learners with ADHD in your classroom
            <br />
            16th September 12 pm CET
          </Title>
          <Form
            mutators={{ setFieldTouched } as any}
            render={renderForm}
            validate={validateForm}
            onSubmit={submitForm}
          />
        </>
      )}
    </>
  )
}

export default ContactForm

/* eslint-disable @typescript-eslint/ban-ts-comment */

import React, { useEffect, useState } from 'react'
import { withTypes } from 'react-final-form'

import { DateTime } from 'luxon'
import validate from 'validate.js'

import forEach from 'lodash/forEach'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import map from 'lodash/map'
import negate from 'lodash/negate'
import pickBy from 'lodash/pickBy'

import { Flex, Loader } from 'Components/UI'

import {
  AttachmentField,
  ImagesField,
  Input,
  SingleDatePickerField,
  StudentsPickerField,
  TagsPickerField,
  TimePickerField,
} from 'Components/Blocks/Entities/Calls/Fields'
import TeacherClassMultiSelectorField from 'Components/Blocks/Entities/Teacher/Fields/TeacherClassMultiSelector/TeacherClassMultiSelectorField'
import {
  CheckboxField,
  EditorInputField,
  SelectField,
} from 'Components/Blocks/Fields'

import { CALL_ENUM, TEACHER_NUMBER_OPTIONS } from 'Constants/calls'
import countriesList from 'Constants/countries.json'
import { ENGLISH_LEVEL_OPTIONS, STUDENTS_AGE_OPTIONS } from 'Constants/ids'

import callsApi from 'Services/Api/requests/calls'

import { presenceConstraint } from 'Utils/constraints'
import { isAfter } from 'Utils/date'

import { transformToCreateCallRequest } from './helpers'
import {
  AttachmentNotification,
  CheckboxWrapper,
  DescriptionIcon,
  EditorInputWrapper,
  ErrorContainer,
  FormButton,
  FormButtonsContainer,
  FormContainer,
  GrayText,
  SectionTitle,
  TagsIcon,
  TeachersIcon,
} from './styles'
import { FIELDS, FormValues, Props } from './types'

const INITIAL_VALUES: FormValues = {
  [FIELDS.INVITE_STUDENTS]: true,
  [FIELDS.TEACHER_CLASS_IDS]: ['all_classes'],
  [FIELDS.PUBLIC_ACCESS]: true,
  [FIELDS.FIELD_TRIP]: false,
}

const { Form } = withTypes<FormValues>()

const CreateCallForm: React.FC<Props> = ({
  initValues,
  onClose,
  type,
  isEdit,
}): React.ReactElement => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isCreateError, setCreateError] = useState<boolean>(false)
  const [initialValues, setInitialValues] = useState<FormValues | undefined>(
    INITIAL_VALUES,
  )

  useEffect(() => {
    if (isEdit) {
      setInitialValues(initValues)
    }
  }, [])

  const handleValidate = (values: FormValues): validate.ValidateJS => {
    let constrains: any = {
      ...presenceConstraint(FIELDS.TITLE),
      ...presenceConstraint(FIELDS.DATE),
      ...presenceConstraint(FIELDS.START_TIME),
      ...presenceConstraint(FIELDS.END_TIME),
      ...presenceConstraint(FIELDS.DESCRIPTION),
    }

    if (type === CALL_ENUM.GROUP_CALLS) {
      constrains = {
        ...constrains,
        ...presenceConstraint(FIELDS.STUDENTS_AGE),
        ...presenceConstraint(FIELDS.STUDENTS_LEVEL),
        ...presenceConstraint(FIELDS.NUMBER_OF_TEACHERS),
        ...presenceConstraint(FIELDS.TEACHER_CLASS_IDS),
      }

      if (values[FIELDS.FIELD_TRIP]) {
        constrains[FIELDS.COUNTRY] = {
          presence: true,
        }
      }

      if (values[FIELDS.INVITE_STUDENTS]) {
        constrains[FIELDS.TEACHER_CLASS_IDS] = {
          presence: true,
          length: {
            minimum: 1,
            tooShort: 'needs to have %{count} classes or more',
          },
        }
      }
    }

    if (type === CALL_ENUM.CLASS_CALLS) {
      constrains[FIELDS.TEACHER_CLASS_IDS] = {
        presence: true,
        length: {
          minimum: 1,
          tooShort: 'needs to have %{count} classes or more',
        },
      }
    }

    return validate(values, constrains)
  }

  const handleFormSubmit = async (values: FormValues): Promise<void> => {
    setLoading(true)

    const startDate = get(values, 'date', '')
    const parsedDate = DateTime.fromISO(startDate).toFormat('yyyy/MM/dd')
    const userTimezone = DateTime.local().zoneName
    const startTime = DateTime.fromJSDate(
      new Date(`${parsedDate} ${get(values, FIELDS.START_TIME)}`),
    ).toISO()
    const endTime = DateTime.fromJSDate(
      new Date(`${parsedDate} ${get(values, FIELDS.END_TIME)}`),
    ).toISO()

    const formData = new FormData()

    const formDataValues = pickBy(
      transformToCreateCallRequest({
        ...values,
        call_type: type,
        startTime,
        endTime,
      }),
      negate(isNil),
    )

    forEach(formDataValues, (value, index) => {
      if (index === 'tags') {
        forEach(value as string, (it: string, ind) => {
          formData.append(`tags[${ind}]`, it)
        })
      } else if (index === 'assigned_students') {
        forEach(value as string, (it: string, ind) => {
          formData.append(`assigned_students[${ind}]`, it)
        })
      } else if (index === 'teacher_classes_ids') {
        forEach(value as string, (it: string, ind) => {
          formData.append(`teacher_classes_ids[${ind}]`, it)
        })
      } else if (index === 'files') {
        forEach(value as Array<File>, (it: File, ind) => {
          formData.append(`files[${ind}]`, it)
        })
      } else if (index === 'images') {
        forEach(value as Array<File>, (it: File, ind) => {
          formData.append(`images[${ind}]`, it)
        })
      } else {
        formData.append(index, value as any)
      }
    })

    if (isEdit) {
      formData.append('id', get(initValues, 'id', ''))
    }

    formData.append('user_timezone', userTimezone)

    try {
      await callsApi.createCall(formData)
      onClose()
    } catch (e) {
      setCreateError(true)
    } finally {
      setLoading(false)
    }
  }

  const isStartTimeAfterEndTIme = (values): boolean | null => {
    const startDate = get(values, 'date')

    if (startDate) {
      const parsedDate = DateTime.fromISO(startDate).toFormat('yyyy/MM/dd')

      const startTime = DateTime.fromJSDate(
        new Date(`${parsedDate} ${get(values, 'startTime')}`),
      )

      const endTime = DateTime.fromJSDate(
        new Date(`${parsedDate} ${get(values, 'endTime')}`),
      )

      return isAfter(startTime, endTime)
    }

    return null
  }

  const renderForm = ({
    handleSubmit,
    errors,
    values,
    submitFailed,
  }): React.ReactNode => {
    const isWrongTimeSelected = isStartTimeAfterEndTIme(values) === true

    const isAttachmentsExistInEdit =
      isEdit &&
      get(values, 'files', []).length > 0 &&
      get(values, 'files[0].name') === 'Archive.zip'

    return (
      <FormContainer>
        <Flex width={1}>
          <Input name="title" placeholder="Type title here..." />
        </Flex>

        <Flex flexWrap="wrap" mt={20} width={1}>
          <Flex mr={20}>
            <SingleDatePickerField name={FIELDS.DATE} placeholder="Date" />
          </Flex>
          <Flex mr={20}>
            <TimePickerField
              name={FIELDS.START_TIME}
              placeholder="Start Time"
            />
          </Flex>
          <Flex>
            <TimePickerField name={FIELDS.END_TIME} placeholder="End Time" />
          </Flex>

          {type === CALL_ENUM.GROUP_CALLS && (
            <>
              <Flex mr={20} mt={14}>
                {/* @ts-ignore */}
                <SelectField
                  name={FIELDS.STUDENTS_AGE}
                  noError
                  options={STUDENTS_AGE_OPTIONS}
                  placeholder="Students Age"
                  selectProps={{ isSearchable: false }}
                  width="180px"
                />
              </Flex>
              <Flex mr={20} mt={14}>
                {/* @ts-ignore */}
                <SelectField
                  name={FIELDS.STUDENTS_LEVEL}
                  noError
                  options={map(ENGLISH_LEVEL_OPTIONS, level => level)}
                  placeholder="Students Level"
                  selectProps={{ isSearchable: false }}
                  width="170px"
                />
              </Flex>
              <Flex mt={14}>
                {/* @ts-ignore */}
                <SelectField
                  name={FIELDS.NUMBER_OF_TEACHERS}
                  noError
                  options={TEACHER_NUMBER_OPTIONS}
                  placeholder="Number of teachers"
                  selectProps={{ isSearchable: false }}
                  width="170px"
                />
              </Flex>
            </>
          )}
        </Flex>

        {type === CALL_ENUM.CLASS_CALLS && (
          <Flex mt={14} width={1}>
            <Flex maxWidth={240} width={1}>
              <TeacherClassMultiSelectorField
                name={FIELDS.TEACHER_CLASS_IDS}
                placeholder="Select Classrooms"
              />
            </Flex>
          </Flex>
        )}

        {type === CALL_ENUM.INDIVIDUAL_CALLS && (
          <Flex alignItems="center" mt="22px" width={1}>
            <Flex alignItems="flex-start" flexShrink={0} mr="10px" mt="4px">
              <TeachersIcon wrapperStyles={{ mr: 15, mt: '2px' }} />
              <SectionTitle>Add Student</SectionTitle>
            </Flex>
            <StudentsPickerField name={FIELDS.ASSIGNED_USERS} type="single" />
          </Flex>
        )}

        {type === CALL_ENUM.GROUP_CALLS && (
          <Flex
            alignContent="center"
            flexWrap="wrap"
            justifyContent="space-between"
            mt={14}
            width={1}
          >
            <CheckboxWrapper
              alignItems="flex-start"
              flexShrink={0}
              maxWidth="70%"
              mr="10px"
              mt="4px"
            >
              <CheckboxField
                className="checkbox"
                disabled={isEdit}
                id={FIELDS.INVITE_STUDENTS}
                label="Invite students to join the call"
                name={FIELDS.INVITE_STUDENTS}
              />
            </CheckboxWrapper>
            <GrayText>can&apos;t be changed</GrayText>

            {values?.inviteStudents && (
              <Flex mt={14} width={1}>
                <Flex maxWidth={240} width={1}>
                  <TeacherClassMultiSelectorField
                    name={FIELDS.TEACHER_CLASS_IDS}
                    placeholder="Select Classrooms"
                    selectProps={{ isDisabled: isEdit }}
                  />
                </Flex>
              </Flex>
            )}
          </Flex>
        )}

        {type === CALL_ENUM.GROUP_CALLS && (
          <Flex
            alignContent="center"
            flexWrap="wrap"
            justifyContent="space-between"
            mt={14}
            width={1}
          >
            <CheckboxWrapper
              alignItems="flex-start"
              flexShrink={0}
              mr="10px"
              mt="4px"
            >
              <CheckboxField
                className="checkbox"
                id={FIELDS.FIELD_TRIP}
                label="Field Trip"
                name={FIELDS.FIELD_TRIP}
              />
            </CheckboxWrapper>

            {values?.fieldTrip && (
              // @ts-ignore
              <SelectField
                mt={14}
                name={FIELDS.COUNTRY}
                noError
                options={countriesList}
                placeholder="Select Location"
                width="240px"
              />
            )}
          </Flex>
        )}

        {type === CALL_ENUM.GROUP_CALLS && (
          <Flex
            alignContent="center"
            justifyContent="space-between"
            mt={14}
            width={1}
          >
            <CheckboxWrapper
              alignItems="flex-start"
              flexShrink={0}
              mr="10px"
              mt="4px"
            >
              <CheckboxField
                className="checkbox"
                id={FIELDS.PUBLIC_ACCESS}
                label="Allow share call link"
                name={FIELDS.PUBLIC_ACCESS}
              />
            </CheckboxWrapper>
          </Flex>
        )}

        {type === CALL_ENUM.GROUP_CALLS && (
          <Flex mt="6px" width={1}>
            <Flex alignItems="flex-start" flexShrink={0} mr="10px" mt="4px">
              <TagsIcon wrapperStyles={{ mr: 15, mt: '2px' }} />
              <SectionTitle>Call Tags:</SectionTitle>
            </Flex>
            <TagsPickerField name={FIELDS.TAGS} />
          </Flex>
        )}

        <Flex
          flexWrap="wrap"
          mt={type === CALL_ENUM.GROUP_CALLS ? 0 : 20}
          width={1}
        >
          <Flex
            alignItems="flex-start"
            flexShrink={0}
            mr="10px"
            mt="4px"
            width={1}
          >
            <DescriptionIcon wrapperStyles={{ mr: 15, mt: '2px' }} />
            <SectionTitle>Call Description:</SectionTitle>
          </Flex>

          <EditorInputWrapper>
            {/* @ts-ignore */}
            <EditorInputField
              className="description-field"
              height={type === CALL_ENUM.GROUP_CALLS ? '124px' : '220px'}
              maxContentHeight={
                type === CALL_ENUM.GROUP_CALLS ? '60px' : '145px'
              }
              name={FIELDS.DESCRIPTION}
              noError
              placeholder="Type call description here..."
              type="textarea"
            />
          </EditorInputWrapper>
        </Flex>

        {type === CALL_ENUM.GROUP_CALLS && (
          <Flex flexWrap="wrap" mt={20} width={1}>
            <Flex
              alignItems="flex-start"
              flexShrink={0}
              mr="10px"
              mt="4px"
              width={1}
            >
              <ImagesField name={FIELDS.IMAGES} />
            </Flex>
          </Flex>
        )}

        <Flex flexWrap="wrap" mt={20} width={1}>
          <AttachmentField fileSizeInMb={20} name={FIELDS.FILES} />
          {isAttachmentsExistInEdit && (
            <AttachmentNotification mt={14}>
              All files you downloaded have been archived. You can only delete
              the entire archive with all files in it.
            </AttachmentNotification>
          )}
        </Flex>

        <FormButtonsContainer mt={20} width={1}>
          <ErrorContainer>
            {!isEmpty(errors) &&
              submitFailed &&
              'Oops! You should fill all required fields!'}

            {isWrongTimeSelected && (
              <>
                <br />
                Wrong call time selected. Check the start and end times of the
                call.
              </>
            )}

            {isCreateError && (
              <>
                <br />
                Something going wrong, please contact with support!
              </>
            )}
          </ErrorContainer>
          <FormButton mr={20} width={98} onClick={onClose}>
            Cancel
          </FormButton>
          <FormButton
            active
            disabled={isLoading}
            width={142}
            onClick={isWrongTimeSelected ? null : handleSubmit}
          >
            {isEdit ? 'Save Changes' : ' Create Call'}
          </FormButton>
          {isLoading && <Loader />}
        </FormButtonsContainer>
      </FormContainer>
    )
  }

  return (
    <Form
      initialValues={initialValues}
      render={renderForm}
      validate={handleValidate}
      onSubmit={handleFormSubmit}
    />
  )
}

export default CreateCallForm

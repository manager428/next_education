import { DateTime } from 'luxon'

import filter from 'lodash/filter'
import find from 'lodash/find'
import get from 'lodash/get'
import map from 'lodash/map'

import { CALL_ENUM, TEACHER_NUMBER_OPTIONS } from 'Constants/calls'
import countriesList from 'Constants/countries.json'
import {
  ENGLISH_LEVEL_ENUM,
  ENGLISH_LEVEL_OPTIONS,
  STUDENTS_AGE_OPTIONS,
} from 'Constants/ids'

import { ICreateCallParams } from 'Services/Api/requests/calls/interfaces'

import { FIELDS, FormValues } from './types'

export const transformToCreateCallRequest = (
  values: FormValues,
): ICreateCallParams => {
  const callType = get(values, 'call_type', '')

  return {
    title: get(values, FIELDS.TITLE, ''),
    tags:
      get(values, FIELDS.TAGS, '') === ''
        ? []
        : get(values, FIELDS.TAGS, '').split(','),
    files: get(values, FIELDS.FILES),
    images: filter(get(values, FIELDS.IMAGES), image => !!image),
    description: get(values, FIELDS.DESCRIPTION, ''),
    call_type: callType as CALL_ENUM,
    students_age: get(values, `${FIELDS.STUDENTS_AGE}.value`, 'all_ages'),
    start_time: get(values, FIELDS.START_TIME, ''),
    end_time: get(values, FIELDS.END_TIME, ''),
    teachers_number: get(values, `${FIELDS.NUMBER_OF_TEACHERS}.value`, 0),
    assigned_students: map(get(values, FIELDS.ASSIGNED_USERS, []), 'id'),
    students_level: get(
      values,
      `${FIELDS.STUDENTS_LEVEL}.value`,
      'all_levels',
    ) as ENGLISH_LEVEL_ENUM,
    teacher_classes_ids: values[FIELDS.INVITE_STUDENTS]
      ? get(values, FIELDS.TEACHER_CLASS_IDS, [])
      : undefined,
    country: values[FIELDS.FIELD_TRIP]
      ? get(values, [FIELDS.COUNTRY, 'label'], undefined)
      : undefined,
    public_access: get(values, FIELDS.PUBLIC_ACCESS, false),
    field_trip: get(values, FIELDS.FIELD_TRIP, false),
  }
}

export const transformToFormValues = (values: any): FormValues => {
  const attachment = get(values, 'attachments')
  const callType = get(values, 'call_type')

  return {
    id: get(values, 'id'),
    [FIELDS.TITLE]: get(values, 'title', ''),
    date: get(values, 'start_time'),
    [FIELDS.START_TIME]: DateTime.fromISO(get(values, 'start_time')).toFormat(
      'hh:mm a',
    ),
    [FIELDS.END_TIME]: DateTime.fromISO(get(values, 'end_time')).toFormat(
      'hh:mm a',
    ),
    [FIELDS.STUDENTS_AGE]: find(
      STUDENTS_AGE_OPTIONS,
      opt => get(values, 'students_age') === opt.value,
    ),
    [FIELDS.STUDENTS_LEVEL]: find(
      map(ENGLISH_LEVEL_OPTIONS, it => it),
      opt => get(values, 'students_level') === opt.label,
    ),
    [FIELDS.NUMBER_OF_TEACHERS]: find(
      TEACHER_NUMBER_OPTIONS,
      opt => get(values, 'teachers_number') === opt.value,
    ),
    call_type: callType,
    [FIELDS.INVITE_STUDENTS]: get(values, 'teacher_classes_ids', []).length > 0,
    [FIELDS.TEACHER_CLASS_IDS]: get(values, 'teacher_classes_ids', []),
    [FIELDS.PUBLIC_ACCESS]: get(values, 'public_access', false),
    [FIELDS.FIELD_TRIP]: get(values, 'field_trip', false),
    [FIELDS.COUNTRY]: find(
      map(countriesList, it => it),
      opt => get(values, 'country') === opt.label,
    ),
    [FIELDS.DESCRIPTION]: get(values, 'description', ''),
    [FIELDS.TAGS]: get(values, 'tags', []).join(','),
    [FIELDS.ASSIGNED_USERS]: map(
      get(values, 'participants', []),
      'author_data',
    ),
    [FIELDS.FILES]: attachment
      ? [
          {
            ...attachment,
            name: 'Archive.zip',
          },
        ]
      : undefined,
    [FIELDS.IMAGES]: map(values?.images, 'file_url'),
  }
}

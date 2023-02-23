import React, { useEffect, useState } from 'react'

import InnerHtml from 'dangerously-set-html-content'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { useRouter } from 'next/router'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { JitsiCall } from 'Components/Blocks/Entities/Calls'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { CALL_ENUM } from 'Constants/calls'
import { USER_ROLES } from 'Constants/ids'
import { PRIVATE_PATHS } from 'Constants/paths'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import { callsApi } from 'Services/Api/requests'
import { ICallsApiDetailResponse } from 'Services/Api/requests/calls/interfaces'
import _, { useScopedI18n } from 'Services/I18n'

import {
  AttachmentGlyph,
  Avatar,
  Background,
  CallDate,
  CallDescription,
  CallTitle,
  CallType,
  Container,
  Content,
  DownloadAttachment,
  ErrorsContainer,
  LocationIcon,
  MaxUsersIcon,
  SectionTitle,
  Sidebar,
  StatisticIcon,
  Tag,
  TeachersIcon,
} from './styles'

const CALL_TITLE = {
  [CALL_ENUM.GROUP_CALLS]: 'GROUP CALL',
  [CALL_ENUM.INDIVIDUAL_CALLS]: 'INDIVIDUAL CALL',
  [CALL_ENUM.CLASS_CALLS]: 'CLASS CALL',
}

const Call: React.FC = () => {
  const s = useScopedI18n('calls')
  const params = useRouterQueryParams()
  const router = useRouter()

  const [callDetails, setDetails] = useState<ICallsApiDetailResponse | null>(
    null,
  )
  const [errorMessage, setErrorMessage] = useState<[string] | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)

  const fetchData = async (withLoading = true): Promise<void> => {
    if (withLoading) {
      setLoading(true)
    }

    setErrorMessage(null)

    const id = get(params, 'id', 1) as string
    const slug = get(params, 'slug', '') as string

    try {
      const response =
        slug.length === 0 || slug === '1'
          ? await callsApi.pageDetails(+id)
          : await callsApi.pageDetailsBySlug(slug)

      const data = get(response, 'data')
      setDetails(data)
    } catch (e) {
      if (e.status === 403) {
        await router.push('/404')
      }

      setErrorMessage(
        get(e, ['data', 'errors']) || [
          'Something going wrong, please contact with support!',
        ],
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderCallDetails = (): React.ReactNode => {
    const callType = get(callDetails, 'call_type', '')
    const callTypeTitle = get(CALL_TITLE, [callType])
    const callTitle = get(callDetails, 'call_title', '')
    const time = `${DateTime.fromISO(
      get(callDetails, 'start_time', ''),
    ).toFormat('MMMM dd, hh:mm a')} - ${DateTime.fromISO(
      get(callDetails, 'end_time', ''),
    ).toFormat('hh:mm a')}`

    const location = get(callDetails, 'author_data.country')
    const studentsLevel = get(callDetails, 'students_level')
    const studentsAge = get(callDetails, 'students_age_label')
    const maxTeachers = get(callDetails, 'teachers_number')
    const allParticipants = get(callDetails, 'all_participants', [])

    return (
      <>
        <CallType>{callTypeTitle}</CallType>
        <CallTitle mt={14}>{callTitle}</CallTitle>
        <CallDate mt={14}>{time}</CallDate>

        <Flex flexWrap="wrap" mt={15} width={1}>
          <Flex
            alignItems="flex-start"
            flexShrink={0}
            mr="0px"
            mt="0px"
            width={1}
          >
            <LocationIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
            <SectionTitle>Location: {location}</SectionTitle>
          </Flex>

          {callType === CALL_ENUM.GROUP_CALLS && (
            <>
              <Flex
                alignItems="flex-start"
                flexShrink={0}
                mr="0px"
                mt="15px"
                width={1}
              >
                <StatisticIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                <SectionTitle>
                  {_('general.studentsLevel')}: {studentsLevel}
                </SectionTitle>
              </Flex>
              <Flex
                alignItems="flex-start"
                flexShrink={0}
                mr="0px"
                mt="15px"
                width={1}
              >
                <StatisticIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                <SectionTitle>
                  {_('general.studentsAge')}: {studentsAge}
                </SectionTitle>
              </Flex>
              <Flex
                alignItems="flex-start"
                flexShrink={0}
                mr="0px"
                mt="15px"
                width={1}
              >
                <MaxUsersIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                <SectionTitle>
                  {s('maxTeachers')}:{' '}
                  {maxTeachers === 0 ? 'any number' : maxTeachers}
                </SectionTitle>
              </Flex>
            </>
          )}

          <Flex
            alignItems="flex-start"
            flexShrink={0}
            mr="0px"
            mt="15px"
            width={1}
          >
            <TeachersIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
            <SectionTitle flexWrap="wrap">
              <span>{_('general.participants')}:</span>
              {map(allParticipants, part => {
                const isStudent =
                  get(part, 'author_data.role') === USER_ROLES.student

                return isStudent ? (
                  <Link
                    href={PRIVATE_PATHS.USER_PROFILE(part.author_data.id)}
                    key={part.author_data.id}
                    passHref
                  >
                    <a target="_blank">
                      <Avatar src={part.author_data.avatar} />
                    </a>
                  </Link>
                ) : (
                  <Avatar
                    key={part.author_data.id}
                    src={part.author_data.avatar}
                  />
                )
              })}
            </SectionTitle>
          </Flex>
        </Flex>
      </>
    )
  }

  const renderResponseErrors = () => map(errorMessage, err => err).join(' ')

  const description = get(callDetails, 'description')
  const callType = get(callDetails, 'call_type', '')
  const callTags = get(callDetails, 'tags', [])
  const roomName = `idialogue-calls-${get(callDetails, 'room_name')}`
  const startTime = get(callDetails, 'start_time', '')
  const isFinished = get(callDetails, 'is_finished', false)
  // const isStarted = get(callDetails, 'is_started', false)
  const callId = get(callDetails, 'id')
  const token = get(callDetails, 'youtube_stream_id')
  const serverTime = get(callDetails, 'server_time', '')
  const fileAttachment = get(callDetails, 'attachments.file_url', null)

  return (
    <Background>
      <Head description={description} title={callDetails?.title || ''} />

      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {errorMessage ? (
              <ErrorsContainer>{renderResponseErrors()}</ErrorsContainer>
            ) : (
              <>
                <Content>
                  <JitsiCall
                    isFinished={isFinished}
                    roomName={roomName}
                    serverTime={serverTime}
                    startTime={startTime}
                    token={token}
                    withoutCountDown={callId === 1}
                  />

                  <Flex mt="24px" width={1}>
                    <Flex
                      flexShrink={0}
                      flexWrap="wrap"
                      maxWidth="652px"
                      width={1}
                    >
                      <Sidebar>{renderCallDetails()}</Sidebar>

                      <CallDescription mt={20} width={1}>
                        <InnerHtml html={description || ''} />
                      </CallDescription>

                      {fileAttachment && (
                        <Flex justifyContent="flex-start" mt="15px" width={1}>
                          <Link href={fileAttachment} passHref>
                            <DownloadAttachment>
                              {s('downloadAttachment')}
                              <AttachmentGlyph />
                            </DownloadAttachment>
                          </Link>
                        </Flex>
                      )}

                      {callType === CALL_ENUM.GROUP_CALLS &&
                        callTags.length > 0 && (
                          <Flex flexWrap="wrap" mt={20} width={1}>
                            {map(callTags, tag => (
                              <Tag key={tag}>#{tag}</Tag>
                            ))}
                          </Flex>
                        )}
                    </Flex>
                  </Flex>
                </Content>
              </>
            )}
          </>
        )}
      </Container>
      <Footer />
    </Background>
  )
}

export default Call

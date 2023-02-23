import React, { useCallback, useEffect, useRef, useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'
import { DateTime } from 'luxon'
import Link from 'next/link'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import { ButtonWithConfirmation, Flex, Loader } from 'Components/UI'

import CallStatus from 'Components/Blocks/Entities/Calls/CallCard/CallStatus'
import { CreateCallForm } from 'Components/Blocks/Entities/Calls/Forms'
import { transformToFormValues } from 'Components/Blocks/Entities/Calls/Forms/СreateCallForm/helpers'
import { FormValues } from 'Components/Blocks/Entities/Calls/Forms/СreateCallForm/types'
import VideoCallChat from 'Components/Blocks/Entities/Chat/VideoCallChat'
import { TeacherClassPopup } from 'Components/Blocks/Popups'

import { CALL_ENUM } from 'Constants/calls'
import { PRIVATE_PATHS, PUBLIC_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useOutsideClick from 'Hooks/useOutsideClick'
import useRole from 'Hooks/useRole'

import { callsApi } from 'Services/Api/requests'
import { ICallsApiDetailResponse } from 'Services/Api/requests/calls/interfaces'
import _, { useScopedI18n } from 'Services/I18n'

import {
  AttachmentGlyph,
  Avatar,
  BrowserMessage,
  CallImage,
  CallTitle,
  ChatContainer,
  ChatIcon,
  ChatTab,
  ChatTabs,
  Content,
  CopyLinkButton,
  DeleteButton,
  DescriptionContent,
  DescriptionTitle,
  DetailsContent,
  DownloadAttachment,
  EditCallButton,
  EditCallScrollContent,
  EditIcon,
  EnterCallButton,
  ErrorsContainer,
  Footer,
  FooterMessage,
  FormButton,
  InnerContent,
  Location,
  LocationIcon,
  MaxUsersGlyph,
  Modal,
  ParticipantAvatar,
  ParticipantContainer,
  ParticipantIcon,
  ParticipantName,
  ParticipantNameWithoutLink,
  ParticipantsScroll,
  ParticipantsTitle,
  ScrollContent,
  SectionTitle,
  StatisticIcon,
  Tag,
  TeachersIcon,
  TimeIcon,
  Wrapper,
} from './styles'

type Props = {
  id: number | null
  isOpen: boolean
  onClose: ({
    id,
    withRefetch,
  }: {
    id: number | null
    withRefetch?: boolean
  }) => void
}

const ViewCallModal: React.FC<Props> = ({
  id,
  isOpen,
  onClose,
}): React.ReactElement => {
  const s = useScopedI18n('modals.call')
  const { isParent, isStudent, isSchoolAdmin } = useRole()
  const me = useMe()

  const ref = useRef(null)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [notFoundMessage, setNotFoundMessage] = useState<string | null>(null)
  const [isEdit, setEdit] = useState<boolean>(false)
  const [isShowTeacherClassPopup, setShowTeacherClassPopup] = useState(false)

  const [
    callDetails,
    setCallDetails,
  ] = useState<ICallsApiDetailResponse | null>(null)
  const [chatTab, setChatTab] = useState<'chat' | 'participants'>('chat')

  const [isLoading, setLoading] = useState<boolean>(true)

  useOutsideClick({ ref, onClick: () => onClose({ id, withRefetch: false }) })

  useEffect(
    () => () => {
      onClose({ id, withRefetch: false })
    },
    [onClose],
  )

  const fetchDetails = async (): Promise<any> => {
    if (!id) return

    setErrorMessage(null)
    setLoading(true)

    try {
      const response = await callsApi.details(id)
      const data = get(response, 'data')

      setCallDetails(data)

      if (get(data, 'is_finished', false)) {
        setChatTab('participants')
      }
    } catch (e) {
      const message = get(e, ['data', 'errors']) || [
        _('error.somethingGoingWrong'),
      ]

      if (message === 'Call not found') {
        setNotFoundMessage(message)
      } else {
        setErrorMessage(message)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  const handleDeleteCall = async (): Promise<any> => {
    if (!id) return
    setErrorMessage(null)
    setLoading(true)

    try {
      await callsApi.delete(id)
    } catch (e) {
      setErrorMessage(
        get(e, ['data', 'errors']) || [_('error.somethingGoingWrong')],
      )
    } finally {
      onClose({ id, withRefetch: true })
    }

    setLoading(false)
  }

  const handleToggleCallOpen = async (
    event: React.MouseEvent,
  ): Promise<any> => {
    event.preventDefault()

    if (!id) return

    setErrorMessage(null)

    const isOpenedCall = callDetails?.is_opened

    try {
      await callsApi.setOpened(id, {
        is_opened: !isOpenedCall,
      })

      const updatedCall = {
        ...callDetails,
        is_opened: !isOpenedCall,
      } as ICallsApiDetailResponse

      setCallDetails(updatedCall)
    } catch (e) {
      setErrorMessage(
        get(e, ['data', 'errors']) || [_('error.somethingGoingWrong')],
      )
    } finally {
      setLoading(false)
    }
  }

  const handleCallJoin = async (event: React.MouseEvent): Promise<any> => {
    event.preventDefault()
    if (!id) return

    setErrorMessage(null)
    setLoading(true)

    const userTimezone = DateTime.local().zoneName

    try {
      await callsApi.join(id, userTimezone)
      fetchDetails()
    } catch (e) {
      setErrorMessage(
        get(e, ['data', 'errors']) || [_('error.somethingGoingWrong')],
      )
    } finally {
      setLoading(false)
    }
  }

  const handleCallJoinWithTeacherClasses = async (
    teacherClassIds: string[],
  ) => {
    if (!id) return

    setShowTeacherClassPopup(false)
    setErrorMessage(null)
    setLoading(true)

    const userTimezone = DateTime.local().zoneName

    try {
      await callsApi.join(id, userTimezone, teacherClassIds)
      fetchDetails()
    } catch (e) {
      setErrorMessage(
        get(e, ['data', 'errors']) || [_('error.somethingGoingWrong')],
      )
    } finally {
      setLoading(false)
    }
  }

  const handleCallLeave = async (
    event: React.MouseEvent | void,
    withCloseModal = false,
  ): Promise<any> => {
    if (event) {
      event.preventDefault()
    }

    if (!id) return

    setLoading(true)

    try {
      await callsApi.leave(id)
      if (withCloseModal) {
        // with refetch
        onClose({ id, withRefetch: true })
      } else {
        fetchDetails()
      }
    } catch (e) {
      setErrorMessage(
        get(e, ['data', 'errors']) || [_('error.somethingGoingWrong')],
      )
    } finally {
      setLoading(false)
    }
  }

  const handleClickEdit = (event: React.MouseEvent): void => {
    event.preventDefault()
    setEdit(true)
  }

  const handleSendNewInvite = async (): Promise<any> => {
    if (!id) return

    setLoading(true)

    const participantId = get(callDetails, 'participants[0].user_id')

    try {
      await callsApi.addUserToCall(id, participantId)
      onClose({ id, withRefetch: true })
    } catch (e) {
      setErrorMessage(
        get(e, ['data', 'errors']) || [_('error.somethingGoingWrong')],
      )
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveUser = async (userId: number): Promise<any> => {
    if (!id) return

    try {
      await callsApi.deleteUserFromCall(id, userId)

      const callParticipants = get(callDetails, 'all_participants', [])
      const nextCallDetails = {
        ...callDetails,
        all_participants: filter(
          callParticipants,
          part => part.author_data.id !== userId,
        ),
      } as ICallsApiDetailResponse

      setCallDetails(nextCallDetails)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const getEditFormValues = (): FormValues => transformToFormValues(callDetails)

  const handleCopyLink = (): void => {
    if (!callDetails?.id) return

    const pageUrl = `${window.location.origin}${PUBLIC_PATHS.CALL(
      callDetails.id,
    )}`

    const input = document.createElement('input')
    input.setAttribute('value', pageUrl)
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }

  const renderFooter = (): React.ReactNode => {
    if (isParent || isSchoolAdmin) return null

    // const isCallAllowed =
    //   differenceInMinutes(
    //     parseISO(get(callDetails, 'start_time', '')),
    //     new Date(),
    //   ) < ALLOWED_MINUTES_BEFORE_CALL

    const isCreator = get(callDetails, 'is_creator', false)
    const isJoined = get(callDetails, 'is_joined', false)
    const isStudensAllowed = get(callDetails, 'teacher_classes_ids', [])

    if (callDetails?.is_finished) {
      return null
    }

    if (!callDetails?.is_finished && (isCreator || isJoined)) {
      if (callDetails?.is_creator) {
        const isIndividualCallDeclined =
          get(callDetails, 'participants[0].call_user_status', '') ===
          'declined'

        if (
          callDetails.call_type === CALL_ENUM.INDIVIDUAL_CALLS &&
          isIndividualCallDeclined
        ) {
          return (
            <>
              <FooterMessage>
                Your Individual Call was declined by student.
              </FooterMessage>
              <Flex justifyContent="space-between" mt={14} width={1}>
                <EditCallButton onClick={handleClickEdit}>
                  <EditIcon wrapperStyles={{ mr: '10px' }} /> Edit Call
                </EditCallButton>

                <Flex>
                  <ButtonWithConfirmation
                    confirmationButtonText="DELETE"
                    confirmationText="Are you sure you want to delete the call?"
                    styles={{ width: '142px' }}
                    title="Delete call"
                    onSubmit={handleDeleteCall}
                  />

                  <FormButton active ml={20} onClick={handleSendNewInvite}>
                    Send call invitation again
                  </FormButton>
                </Flex>
              </Flex>
            </>
          )
        }

        return (
          <>
            <FooterMessage>
              Before deleting the call, notify the participants!
            </FooterMessage>
            <Flex justifyContent="space-between" mt={14} width={1}>
              <EditCallButton onClick={handleClickEdit}>
                <EditIcon wrapperStyles={{ mr: '10px' }} /> Edit Call
              </EditCallButton>

              <Flex>
                {callDetails.call_type === CALL_ENUM.GROUP_CALLS && (
                  <>
                    {callDetails.is_opened ? (
                      <FormButton mr={20} onClick={handleToggleCallOpen}>
                        Close the room
                      </FormButton>
                    ) : (
                      <FormButton mr={20} onClick={handleToggleCallOpen}>
                        Open the room
                      </FormButton>
                    )}
                  </>
                )}

                <ButtonWithConfirmation
                  confirmationButtonText="DELETE"
                  confirmationText="Are you sure you want to delete the call?"
                  title="Delete call"
                  onSubmit={handleDeleteCall}
                />

                <Flex ml={20}>
                  <Link href={PUBLIC_PATHS.CALL(callDetails?.id)} passHref>
                    <EnterCallButton>Enter the Room</EnterCallButton>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </>
        )
      }

      if (callDetails?.allow_join_students && isStudent) {
        return (
          <>
            <FooterMessage align="right">
              If you cannot participate in the call, please contact your
              teacher!
            </FooterMessage>
            <Flex flexGrow={1} justifyContent="flex-end" mt={14}>
              <Link href={PUBLIC_PATHS.CALL(callDetails?.id)} passHref>
                <EnterCallButton>Enter the Room</EnterCallButton>
              </Link>
            </Flex>
          </>
        )
      }

      return (
        <>
          {isStudent ? (
            <FooterMessage>
              <InnerHTML html={s('youCanLeave')} />
            </FooterMessage>
          ) : (
            <FooterMessage>{s('cantParticipate')}</FooterMessage>
          )}

          <Flex flexGrow={1} justifyContent="flex-end" mt={14}>
            <Flex mr={20}>
              {callDetails?.call_type === CALL_ENUM.GROUP_CALLS ? (
                <FormButton onClick={handleCallLeave}>
                  {s('leaveCall')}
                </FormButton>
              ) : (
                <ButtonWithConfirmation
                  confirmationButtonText={s('declineCall')}
                  confirmationText={s('declineCallConfirmation')}
                  title={s('declineCall')}
                  onSubmit={(event: React.MouseEvent) =>
                    handleCallLeave(event, true)
                  }
                />
              )}
            </Flex>
            {callDetails?.id && (
              <Link href={PUBLIC_PATHS.CALL(callDetails.id)} passHref>
                <EnterCallButton>{_('buttons.enterTheRoom')}</EnterCallButton>
              </Link>
            )}
          </Flex>
        </>
      )
    }

    if (callDetails?.call_type === CALL_ENUM.GROUP_CALLS) {
      const isActive =
        callDetails?.teachers_number === 0 ||
        callDetails?.teachers_number > callDetails?.all_participants?.length

      return (
        <>
          <Flex flexGrow={1} justifyContent="flex-end" mt={14}>
            {callDetails.is_opened && (
              <FormButton
                active={isActive}
                onClick={
                  isStudensAllowed
                    ? () => setShowTeacherClassPopup(true)
                    : handleCallJoin
                }
              >
                {s('reserveSpot')}
              </FormButton>
            )}

            {isShowTeacherClassPopup && (
              <TeacherClassPopup
                onClose={() => setShowTeacherClassPopup(false)}
                onSubmit={handleCallJoinWithTeacherClasses}
              />
            )}
          </Flex>
        </>
      )
    }

    return (
      <>
        {callDetails?.is_joined ? (
          <>
            <FooterMessage>
              <InnerHTML html={s('youCanLeave')} />
            </FooterMessage>
            <Flex flexGrow={1} justifyContent="flex-end" mt={14}>
              <ButtonWithConfirmation
                confirmationButtonText={s('declineCall')}
                confirmationText={s('declineCallConfirmation')}
                title={s('declineCall')}
                onSubmit={(event: React.MouseEvent) =>
                  handleCallLeave(event, true)
                }
              />
            </Flex>
          </>
        ) : (
          <>
            <Flex flexGrow={1} justifyContent="flex-end" mt={14}>
              {callDetails?.is_opened && (
                <>
                  <ButtonWithConfirmation
                    confirmationButtonText={s('declineCall')}
                    confirmationText={s('declineCallConfirmation')}
                    title={s('declineCall')}
                    onSubmit={(event: React.MouseEvent) =>
                      handleCallLeave(event, true)
                    }
                  />
                  <FormButton active ml={20} onClick={handleCallJoin}>
                    {s('acceptCall')}
                  </FormButton>
                </>
              )}
            </Flex>
          </>
        )}
      </>
    )
  }

  const renderImages = useCallback(() => {
    const images = map(callDetails?.images, 'file_url')

    let imageSize = '340px !important'

    if (images.length === 2) {
      imageSize = '268px !important'
    }

    if (images.length === 3) {
      imageSize = '176px !important'
    }

    return (
      <Flex
        flexShrink={0}
        flexWrap="wrap"
        justifyContent="center"
        mb={20}
        mt={24}
        width={1}
      >
        {map(images, (image, index) => (
          <CallImage
            as="img"
            height={imageSize}
            key={image}
            mr={index + 1 === images.length ? 0 : '16px'}
            src={image}
            width={imageSize}
          />
        ))}
      </Flex>
    )
  }, [callDetails])

  const renderCallDetails = () => {
    if (isLoading)
      return (
        <DetailsContent>
          <Loader />
        </DetailsContent>
      )

    if (notFoundMessage) {
      return (
        <DetailsContent>
          {notFoundMessage && (
            <ErrorsContainer justifyContent="center">
              {notFoundMessage}
            </ErrorsContainer>
          )}
        </DetailsContent>
      )
    }

    const date = `${DateTime.fromISO(
      get(callDetails, 'start_time', ''),
    ).toFormat('MMMM dd, hh:mm a')} - ${DateTime.fromISO(
      get(callDetails, 'end_time', ''),
    ).toFormat('hh:mm a')}`

    const renderResponseErrors = () => map(errorMessage, err => err).join(' ')

    const fileAttachment = get(callDetails, 'attachments.file_url', null)

    return (
      <DetailsContent flexDirection="column">
        <Flex flexDirection="column" height="100%" justifyContent="flex-start">
          <ScrollContent>
            <Flex>
              <CallTitle mb={20}>{callDetails?.title}</CallTitle>
              {callDetails?.call_type === CALL_ENUM.GROUP_CALLS &&
                callDetails.public_access && (
                  <CopyLinkButton
                    alignSelf="flex-start"
                    justifyContent="center"
                    ml="20px"
                    width="125px"
                    onClick={handleCopyLink}
                  >
                    {s('shareInviteLink')}
                  </CopyLinkButton>
                )}
            </Flex>

            {callDetails?.call_type === CALL_ENUM.GROUP_CALLS ? (
              <Flex flexShrink={0} flexWrap="wrap" width={1}>
                <Flex alignItems="flex-start">
                  <Flex flexShrink={0} flexWrap="wrap" maxWidth="335px">
                    <Flex
                      alignItems="flex-start"
                      flexShrink={0}
                      mr="10px"
                      mt="4px"
                    >
                      <TimeIcon wrapperStyles={{ mr: '10px', mt: '2px' }} />
                      <SectionTitle>{date}</SectionTitle>
                    </Flex>
                    <Flex
                      alignItems="flex-start"
                      flexShrink={0}
                      mr="10px"
                      mt="18px"
                    >
                      <StatisticIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                      <SectionTitle>
                        {_('general.studentsLevel')}:{' '}
                        {callDetails.students_level}
                      </SectionTitle>
                    </Flex>
                    <Flex
                      alignItems="flex-start"
                      flexShrink={0}
                      mr="10px"
                      mt="18px"
                    >
                      <MaxUsersGlyph wrapperStyles={{ mr: 10, mt: '2px' }} />
                      <SectionTitle>
                        {s('maxTeachers')}:{' '}
                        {callDetails.teachers_number === 0
                          ? 'Any number'
                          : callDetails.teachers_number}
                      </SectionTitle>
                    </Flex>
                  </Flex>
                  <Flex flexWrap="wrap">
                    <Flex
                      alignItems="flex-start"
                      flexShrink={0}
                      mr="0px"
                      mt="4px"
                      width={1}
                    >
                      <LocationIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                      <SectionTitle>{callDetails?.country ?? ''}</SectionTitle>
                    </Flex>

                    <Flex
                      alignItems="flex-start"
                      flexShrink={0}
                      mr="0px"
                      mt="18px"
                    >
                      <StatisticIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                      <SectionTitle>
                        {_('general.studentsAge')}:{' '}
                        {callDetails?.students_age_label}
                      </SectionTitle>
                    </Flex>
                  </Flex>
                </Flex>

                <Flex flexShrink={0} width={1}>
                  <Flex
                    alignItems="flex-start"
                    flexShrink={0}
                    mr="10px"
                    mt="18px"
                  >
                    <TeachersIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                    <SectionTitle>
                      {s('joinedTeachers')}:
                      <Flex flexWrap="wrap" maxWidth="410px" ml={10}>
                        {map(callDetails.all_participants, part => {
                          const role = get(part, 'author_data.role', '')

                          if (role === 'teacher') {
                            return (
                              <Avatar
                                key={part?.author_data?.id}
                                src={part.author_data.avatar}
                              />
                            )
                          }

                          return (
                            <Link
                              href={PRIVATE_PATHS.USER_PROFILE(
                                part.author_data.id,
                              )}
                              key={part.author_data.id}
                              passHref
                            >
                              <a
                                target="_blank"
                                title={part.author_data.full_name}
                              >
                                <Avatar src={part.author_data.avatar} />
                              </a>
                            </Link>
                          )
                        })}
                      </Flex>
                    </SectionTitle>
                  </Flex>
                </Flex>

                {callDetails.allow_join_students && (
                  <Flex flexShrink={0} mt="10px" width={1}>
                    <SectionTitle>{s('studentsCanJoinTheCall')}</SectionTitle>
                  </Flex>
                )}
              </Flex>
            ) : (
              <Flex flexShrink={0} flexWrap="wrap" width={1}>
                <Flex alignItems="flex-start">
                  <Flex flexWrap="wrap" maxWidth="270px">
                    <Flex
                      alignItems="flex-start"
                      flexShrink={0}
                      mr="10px"
                      mt="4px"
                    >
                      <TimeIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                      <SectionTitle>{date}</SectionTitle>
                    </Flex>
                  </Flex>
                </Flex>

                {callDetails?.call_type === CALL_ENUM.INDIVIDUAL_CALLS && (
                  <Flex width={1}>
                    <Flex
                      alignItems="flex-start"
                      flexShrink={0}
                      mr="10px"
                      mt="18px"
                    >
                      <TeachersIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                      <SectionTitle>
                        {_('general.participants')}:
                        <Flex flexWrap="wrap" ml={10}>
                          {map(callDetails?.all_participants, part => {
                            const role = get(part, 'author_data.role', '')

                            if (role === 'teacher') {
                              return <Avatar src={part.author_data.avatar} />
                            }
                            return (
                              <Link
                                href={PRIVATE_PATHS.USER_PROFILE(
                                  part.author_data.id,
                                )}
                                key={part.author_data.id}
                                passHref
                              >
                                <a target="_blank">
                                  <Avatar src={part.author_data.avatar} />
                                </a>
                              </Link>
                            )
                          })}
                        </Flex>
                      </SectionTitle>
                    </Flex>
                  </Flex>
                )}

                {callDetails?.call_type === CALL_ENUM.CLASS_CALLS && (
                  <Flex width={1}>
                    <Flex
                      alignItems="flex-start"
                      flexShrink={0}
                      mr="10px"
                      mt="18px"
                    >
                      <TeachersIcon wrapperStyles={{ mr: 10, mt: '2px' }} />
                      <SectionTitle>
                        {s('joinedClassrooms')}:
                        <Flex flexWrap="wrap" ml={10}>
                          {callDetails?.joined_classes_names}
                        </Flex>
                      </SectionTitle>
                    </Flex>
                  </Flex>
                )}
              </Flex>
            )}

            <Flex flexShrink={0} flexWrap="wrap" mt={20} width={1}>
              <DescriptionTitle>{s('callDescription')}</DescriptionTitle>

              <DescriptionContent>
                <InnerHTML html={callDetails?.description || ''} />
              </DescriptionContent>
            </Flex>

            {callDetails?.call_type === CALL_ENUM.GROUP_CALLS &&
              callDetails.tags &&
              callDetails.tags.length > 0 && (
                <Flex flexShrink={0} flexWrap="wrap" mt={24} width={1}>
                  {map(callDetails.tags, tag => (
                    <Tag key={tag}>#{tag}</Tag>
                  ))}
                </Flex>
              )}

            {callDetails?.call_type === CALL_ENUM.GROUP_CALLS &&
              callDetails?.images &&
              callDetails?.images.length > 0 &&
              renderImages()}

            <BrowserMessage flexShrink={0}>
              {s('videoCallsAvailableWith')}{' '}
              <a
                href="https://www.google.com/chrome"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Chrome Browser
              </a>
            </BrowserMessage>

            {fileAttachment && (
              <Flex flexShrink={0} justifyContent="center" mt="15px" width={1}>
                <DownloadAttachment href={fileAttachment}>
                  {s('downloadAttachment')}
                  <AttachmentGlyph />
                </DownloadAttachment>
              </Flex>
            )}
          </ScrollContent>
          <Footer>{renderFooter()}</Footer>
          {errorMessage && (
            <ErrorsContainer>{renderResponseErrors()}</ErrorsContainer>
          )}
        </Flex>
      </DetailsContent>
    )
  }

  const renderChatContainer = (): React.ReactNode => {
    if (isLoading) return <Loader />

    const callType = get(callDetails, 'call_type', '')

    const isCreator = get(callDetails, 'is_creator', false)
    const creatorUserId = get(callDetails, 'user_id')
    const roomName = get(callDetails, 'room_name')
    const isFinished = get(callDetails, 'is_finished')
    const callStudents = get(callDetails, 'call_students')

    let callParticipants = get(callDetails, 'all_participants', [])
    switch (callType) {
      case CALL_ENUM.GROUP_CALLS:
        callParticipants = filter(
          callParticipants,
          part => get(part, 'call_user_status', '') === 'accepted',
        )
        break
      default:
        break
    }

    switch (chatTab) {
      case 'participants': {
        const participantsList = (data): React.ReactNode =>
          map(data, participant => {
            const avatar = get(participant, 'author_data.avatar', '')
            const role = get(participant, 'author_data.role', '')
            const participantId = get(participant, 'author_data.id')
            const fullname = get(participant, 'author_data.full_name', '')
            const location = get(participant, 'author_data.country', '')
            const userCallStatus = get(participant, 'call_user_status')

            return (
              <ParticipantContainer key={participantId} mb={14}>
                <Flex flexShrink={0}>
                  <ParticipantAvatar src={avatar} />
                </Flex>

                <Flex flexGrow={1} flexWrap="wrap" maxWidth="208px">
                  {role === 'teacher' ? (
                    <ParticipantNameWithoutLink>
                      <span>
                        <InnerHTML html={fullname} />
                      </span>
                      {callDetails?.call_type !== CALL_ENUM.GROUP_CALLS && (
                        <CallStatus status={userCallStatus} />
                      )}
                    </ParticipantNameWithoutLink>
                  ) : (
                    <ParticipantName
                      href={PRIVATE_PATHS.USER_PROFILE(participantId)}
                      target="_blank"
                    >
                      <span>
                        <InnerHTML html={fullname} />
                      </span>
                      {callDetails?.call_type !== CALL_ENUM.GROUP_CALLS && (
                        <CallStatus status={userCallStatus} />
                      )}
                    </ParticipantName>
                  )}

                  {location && <Location>{location}</Location>}
                </Flex>

                {isCreator && creatorUserId !== participantId && !isFinished && (
                  <Flex
                    className="delete-wrapper"
                    flexGrow={1}
                    justifyContent="flex-end"
                  >
                    <Flex onClick={() => handleRemoveUser(participantId)}>
                      <DeleteButton wrapperStyles={{ mr: 10 }} />
                    </Flex>
                  </Flex>
                )}
              </ParticipantContainer>
            )
          })

        if (isFinished && callType === CALL_ENUM.GROUP_CALLS) {
          return (
            <ParticipantsScroll>
              {map(callStudents, (studentsList, teacherName) => (
                <>
                  <ParticipantsTitle>
                    <InnerHTML
                      html={`${teacherName} ${_(
                        'general.students',
                      ).toLowerCase()}:`}
                    />
                  </ParticipantsTitle>
                  {participantsList(studentsList)}
                </>
              ))}
            </ParticipantsScroll>
          )
        }

        return (
          <ParticipantsScroll>
            {participantsList(callParticipants)}
          </ParticipantsScroll>
        )
      }

      case 'chat':
        return (
          <VideoCallChat
            fullName={me?.full_name ?? ''}
            roomName={roomName}
            userId={me?.id ?? 0}
          />
        )

      default:
        return null
    }
  }

  const renderSidebar = (): React.ReactNode => {
    if (
      isLoading ||
      (callDetails?.is_finished &&
        callDetails.call_type !== CALL_ENUM.GROUP_CALLS)
    )
      return null

    return (
      <ChatContainer>
        <>
          <ChatTabs>
            {!callDetails?.is_finished && (
              <ChatTab
                active={chatTab === 'chat'}
                mr={16}
                onClick={() => setChatTab('chat')}
              >
                <ChatIcon
                  active={chatTab === 'chat'}
                  wrapperStyles={{ mr: '10px' }}
                />
                {s('callChat').toUpperCase()}
              </ChatTab>
            )}

            <ChatTab
              active={chatTab === 'participants'}
              onClick={() => setChatTab('participants')}
            >
              <ParticipantIcon
                active={chatTab === 'participants'}
                wrapperStyles={{ mr: '10px' }}
              />
              {_('general.participants').toUpperCase()}
            </ChatTab>
          </ChatTabs>

          {renderChatContainer()}
        </>
      </ChatContainer>
    )
  }

  return (
    <Modal className="view-call-modal" isOpen={isOpen} onCallback={onClose}>
      <Wrapper ref={ref}>
        <Content>
          <InnerContent>
            {isEdit ? (
              <EditCallScrollContent>
                <CreateCallForm
                  initValues={getEditFormValues()}
                  isEdit
                  type={callDetails?.call_type as CALL_ENUM}
                  onClose={() => onClose({ id: null, withRefetch: true })}
                />
              </EditCallScrollContent>
            ) : (
              renderCallDetails()
            )}
          </InnerContent>
        </Content>

        {renderSidebar()}
      </Wrapper>
    </Modal>
  )
}

export default ViewCallModal

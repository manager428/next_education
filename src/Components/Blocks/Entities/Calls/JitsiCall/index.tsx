import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

import InnerHTML from 'dangerously-set-html-content'
import { DateTime } from 'luxon'

import { reloadGlyph } from 'Assets/svg/calls'

import { Flex, Icon } from 'Components/UI'

import { ALLOWED_MINUTES_BEFORE_CALL } from 'Constants/calls'

// import useMe from 'Hooks/useMe'
import { useScopedI18n } from 'Services/I18n'

import { differenceInMinutes } from 'Utils/date'

import {
  ComingSoonText,
  CountDownCell,
  CountDownSeparator,
  JitsiContainer,
  JitsiRoomMessage,
  ReloadButton,
  ReloadContainer,
} from './styles'

type Props = {
  roomName: string
  startTime: string
  serverTime: string
  token: string
  isFinished: boolean
  withoutCountDown: boolean
}

const JitsiCall: React.FC<Props> = ({
  withoutCountDown,
  // roomName,
  token,
  startTime,
  serverTime,
  isFinished,
}) => {
  const s = useScopedI18n('calls')
  // const me = useMe()

  // const jitsiContainerId = 'call-wrap'

  // const [jitsi, setJitsi] = React.useState<any>(null)
  const [isShowCountdown, setShowCountdown] = useState<boolean>(false)
  // const [isHangUp, setHangUp] = useState<boolean>(false)
  const [parsedServerTime, setParsedServerTime] = useState(
    DateTime.fromISO(serverTime, { setZone: true, zone: 'utc' }).toMillis(),
  )

  /* const loadJitsiScript = async (): Promise<any> =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src =
        'https://novakid-video.idialogue.com/libs/external_api.min.js'
      script.async = true

      script.onload = () => {
        resolve(true)
      }

      script.onerror = e => {
        // setErrorLoadJitsi(true)
        reject(e)
      }

      document.body.appendChild(script)
    }) */

  /* const initialiseJitsi = async (): Promise<void> => {
    if (isFinished) {
      return
    }
    if (!window.JitsiMeetExternalAPI) {
      await loadJitsiScript()
    }

    const jitsiInstance = new window.JitsiMeetExternalAPI(
      'novakid-video.idialogue.com',
      {
        jwt: token,
        parentNode: document.getElementById(jitsiContainerId),
        roomName,
        userInfo: {
          displayName: me?.full_name || 'Guest',
        },
        configOverwrite: JITSI_CONFIG_OVERWRITE,
        interfaceConfigOverwrite: JITSI_INTERFACE_CONFIG_OVERWRITE,
      },
    )

    jitsiInstance.addListener('readyToClose', () => {
      setHangUp(true)
    })
    setJitsi(jitsiInstance)
  } */

  const checkStartTime = (): void => {
    const isCallStarted =
      +differenceInMinutes(DateTime.fromISO(startTime), DateTime.now()).toFixed(
        0,
      ) <= ALLOWED_MINUTES_BEFORE_CALL

    if (isCallStarted || withoutCountDown) {
      // initialiseJitsi()
      setShowCountdown(false)
    } else {
      setShowCountdown(true)
    }
  }

  useEffect(() => {
    checkStartTime()
    // return () => jitsi?.dispose?.()
  }, [])

  const renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
  }): React.ReactNode => (
    <Flex justifyContent="center" width={1}>
      <CountDownCell>
        <span>{days < 10 ? `0${days}` : days}</span>
        {s('days')}
      </CountDownCell>
      <CountDownSeparator>:</CountDownSeparator>
      <CountDownCell>
        <span>{hours < 10 ? `0${hours}` : hours}</span>
        {s('hours')}
      </CountDownCell>
      <CountDownSeparator>:</CountDownSeparator>
      <CountDownCell>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        {s('minutes')}
      </CountDownCell>
      <CountDownSeparator>:</CountDownSeparator>
      <CountDownCell>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        {s('seconds')}
      </CountDownCell>
    </Flex>
  )

  const renderFinished = (): React.ReactNode => {
    if (isFinished) {
      return (
        <JitsiRoomMessage alignItems="flex-start" flex={1}>
          <ComingSoonText>VIDEO CALL HAS ENDED</ComingSoonText>
          <Flex justifyContent="center" mb={20} mt={20} width={1}>
            {s('thanksForParticipating')}
          </Flex>
        </JitsiRoomMessage>
      )
    }

    return (
      <JitsiRoomMessage>
        <ComingSoonText>YOU LEFT THE VIDEO CALL</ComingSoonText>
        <Flex justifyContent="center" mb={20} mt={20} width={1}>
          {s('thanksForParticipating')}
        </Flex>

        <ReloadContainer alignItems="flex-end" flex={1} mb="40px" width={1}>
          <InnerHTML html={s('reloadPage')} />
          <Flex justifyContent="center" mt="20px" width={1}>
            <ReloadButton onClick={() => window.location.reload()}>
              <Icon
                icon={reloadGlyph}
                size={16}
                wrapperStyles={{ mr: '8px' }}
              />
              {s('reloadPageButton')}
            </ReloadButton>
          </Flex>
        </ReloadContainer>
      </JitsiRoomMessage>
    )
  }

  return (
    <JitsiContainer>
      {isFinished ? (
        renderFinished()
      ) : (
        <>
          {isShowCountdown ? (
            <JitsiRoomMessage>
              <ComingSoonText>{s('comingSoon')}</ComingSoonText>
              <Flex justifyContent="center" mb={20} mt={20} width={1}>
                <InnerHTML
                  html={s('accessToCallWillOpen', {
                    ALLOWED_MINUTES_BEFORE_CALL,
                  })}
                />
              </Flex>

              <Countdown
                // Need to remove 30 (time - 30 mins) minutes to load onComplete callback ( show jitsi when before 30 minutes of call)
                date={DateTime.fromISO(startTime)
                  .minus({
                    minutes: ALLOWED_MINUTES_BEFORE_CALL,
                  })
                  .toJSDate()}
                now={() => parsedServerTime}
                renderer={renderCountdown}
                zeroPadDays={2}
                onComplete={checkStartTime}
                onTick={() =>
                  setParsedServerTime(
                    DateTime.fromMillis(parsedServerTime, { zone: 'utc' })
                      .plus({ seconds: 1 })
                      .toMillis(),
                  )
                }
              />
            </JitsiRoomMessage>
          ) : (
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              height="594"
              src={`https://www.youtube.com/embed/live_stream?channel=${token}&autoplay=1&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`}
              title="YouTube video player"
              width="980"
            />
          )}
        </>
      )}
    </JitsiContainer>
  )
}

export default JitsiCall

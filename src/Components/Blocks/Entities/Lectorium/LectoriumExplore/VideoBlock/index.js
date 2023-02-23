import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import InnerHTML from 'dangerously-set-html-content'

import {
  PlayIcon,
  PlayIconWrap,
  PreviewImage,
  VideoWrapper,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/VideoBlock/styles'
import { SignIn } from 'Components/Blocks/Popups'

import { iframeRegex } from 'Constants/regex'

const VideoBlock = ({
  videoUrl,
  onPlay,
  passed,
  previewUrl,
  isLogged,
  withSignInPopup,
}) => {
  const videoRef = useRef(null)
  const [isVideoPlaying, setVideoPlaying] = useState(false)
  const [isShowSignIn, setShowSignIn] = useState(false)

  // eslint-disable-next-line consistent-return
  const handleClickPlay = e => {
    e.preventDefault()

    if (!isLogged) {
      if (withSignInPopup) setShowSignIn(true)
      return false
    }

    if (!passed) {
      onPlay()
    }

    setVideoPlaying(true)
    // videoRef.current.play()
  }

  const handleCloseSignIn = () => {
    setShowSignIn(false)
  }

  const isIframeVIdeo = iframeRegex.test(videoUrl)

  return (
    <VideoWrapper>
      {!isVideoPlaying && (
        <PlayIconWrap>
          <PlayIcon onClick={handleClickPlay} />
        </PlayIconWrap>
      )}
      {isLogged ? (
        <>
          {isIframeVIdeo ? (
            <InnerHTML html={videoUrl} styles={{ width: '100%' }} />
          ) : (
            <video
              controls="controls"
              poster={previewUrl}
              ref={videoRef}
              src={videoUrl}
              onClick={handleClickPlay}
            >
              <track kind="captions" />
            </video>
          )}
        </>
      ) : (
        <>
          {isShowSignIn && (
            <SignIn
              bottom="-44px"
              isOpen
              left="auto"
              right="17px"
              top="auto"
              onClose={handleCloseSignIn}
            />
          )}

          <PreviewImage src={previewUrl} />
        </>
      )}
    </VideoWrapper>
  )
}
VideoBlock.defaultProps = {
  withSignInPopup: true,
}
VideoBlock.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  passed: PropTypes.bool.isRequired,
  previewUrl: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  withSignInPopup: PropTypes.bool,
  onPlay: PropTypes.func.isRequired,
}

export default VideoBlock

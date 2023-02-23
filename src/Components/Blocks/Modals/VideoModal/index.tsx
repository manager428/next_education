import React, { useRef } from 'react'
import ReactPlayer from 'react-player/lazy'

import useOutsideClick from 'Hooks/useOutsideClick'

import { Content, Modal, Wrapper } from './styles'

type Props = {
  isOpen: boolean
  videoUrl: string | undefined
  videoHeight?: string
  onClose?: () => void
}

const VideoModal: React.FC<Props> = ({
  isOpen,
  videoHeight,
  onClose,
  videoUrl,
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleClose = () => {
    if (onClose) onClose()
  }
  useOutsideClick({ ref, onClick: () => handleClose() })

  return (
    <Modal className="view-call-modal" isOpen={isOpen} onCallback={handleClose}>
      <Wrapper>
        <Content ref={ref}>
          <ReactPlayer controls height={videoHeight} url={videoUrl} />
        </Content>
      </Wrapper>
    </Modal>
  )
}

export default VideoModal

import React, { useRef } from 'react'

import InnerHTML from 'dangerously-set-html-content'

import useOutsideClick from 'Hooks/useOutsideClick'

import { useScopedI18n } from 'Services/I18n'

import { Logo, Title, Wrapper } from './styles'

type Props = {
  top?: string | number
  left?: string | number
  right?: string | number
  bottom?: string | number
  onClose: () => void
}

const NotAllowedAction: React.FC<Props> = ({
  top = 'auto',
  left = 'auto',
  right = 'auto',
  bottom = 'auto',
  onClose,
}) => {
  const wrapperRef = useRef(null)
  const s = useScopedI18n('modals.notAllowed')

  useOutsideClick({ ref: wrapperRef, onClick: () => onClose() })

  return (
    <Wrapper
      bottom={bottom}
      left={left}
      ref={wrapperRef}
      right={right}
      top={top}
    >
      <Title>
        <InnerHTML html={s('text')} />
      </Title>
      <Logo />
    </Wrapper>
  )
}

export default NotAllowedAction

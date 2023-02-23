import { RefObject } from 'react'

export type Props = {
  name: string
  placeholder?: string
  onSetRef?: (ref: RefObject<HTMLTextAreaElement>) => void
}

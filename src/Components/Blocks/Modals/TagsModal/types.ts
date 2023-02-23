export type Props = {
  initialTags: string[]
  selectedTags: string[]
  isOpen: boolean
  onSubmit: (tags: Array<string>) => void
  onClose: () => void
}

export enum FIELDS {
  CONTENT = 'content',
  TAGS = 'tags',
  IMAGE = 'image',
}

export type FormValues = {
  [FIELDS.CONTENT]: string
  [FIELDS.TAGS]: string[]
  [FIELDS.IMAGE]: string
}

export enum FormEditor {
  TEXT = 'text',
  PHOTO = 'photo',
  POSTER = 'poster',
}

export type Props = {
  initialValues?: any
  onReset: () => void
  onSubmit: (values: FormValues & { id?: number }) => void
  edit?: boolean
}

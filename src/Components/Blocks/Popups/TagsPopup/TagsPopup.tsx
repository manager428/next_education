import React, { useEffect, useRef, useState } from 'react'

import filter from 'lodash/filter'
import includes from 'lodash/includes'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import { GROUP_CALL_TAGS } from 'Constants/calls'

import useOutsideClick from 'Hooks/useOutsideClick'

import {
  Container,
  FormButton,
  InformContainer,
  Tag,
  TagsContainer,
  Title,
} from './styles'

type Props = {
  selectedTags: Array<string>
  onSubmit: (tags: Array<string>) => void
  onClose: () => void
}

const TagsPopup: React.FC<Props> = ({ selectedTags, onClose, onSubmit }) => {
  const [activeTags, setActiveTags] = useState<Array<string>>(GROUP_CALL_TAGS)

  useEffect(() => {
    setActiveTags(selectedTags)
  }, [selectedTags])

  const ref = useRef(null)

  useOutsideClick({ ref, onClick: onClose })

  const handleSelectTag = (tag: string): void => {
    if (includes(activeTags, tag)) {
      setActiveTags(prevState => filter(prevState, it => it !== tag))
    } else {
      setActiveTags(prevState => [...prevState, tag])
    }
  }

  return (
    <Container ref={ref}>
      <Title>Choose Call Tags</Title>
      <TagsContainer>
        {map(GROUP_CALL_TAGS, tag => {
          const isActive = includes(activeTags, tag)
          return (
            <Tag
              active={isActive}
              highlighted={tag === 'Virtual Tours' || tag === 'Expert Hours'}
              key={tag}
              onClick={e => {
                e.preventDefault()
                handleSelectTag(tag)
              }}
            >
              #{tag}
            </Tag>
          )
        })}
      </TagsContainer>
      <InformContainer>
        {activeTags.length > 0 && `${activeTags.length} interests selected`}
      </InformContainer>
      <Flex justifyContent="space-between" mt={22} width={1}>
        <FormButton
          onClick={e => {
            e.preventDefault()
            onClose()
          }}
        >
          Cancel
        </FormButton>
        <FormButton
          active
          onClick={e => {
            e.preventDefault()
            onSubmit(activeTags)
          }}
        >
          Save
        </FormButton>
      </Flex>
    </Container>
  )
}

export default TagsPopup

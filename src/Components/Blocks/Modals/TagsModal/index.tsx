import React, { useEffect, useRef, useState } from 'react'

import filter from 'lodash/filter'
import includes from 'lodash/includes'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'

import {
  Container,
  Content,
  FormButton,
  InformContainer,
  Modal,
  Tag,
  TagsContainer,
  Title,
} from './styles'
import { Props } from './types'

const TagsModal: React.FC<Props> = ({
  initialTags,
  isOpen,
  selectedTags,
  onClose,
  onSubmit,
}) => {
  const [activeTags, setActiveTags] = useState<Array<string>>(initialTags)

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
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        <Container>
          <Title>Choose Post Tags</Title>
          <TagsContainer mt={19}>
            {map(initialTags, tag => {
              const isActive = includes(activeTags, tag)
              return (
                <Tag
                  active={isActive}
                  highlighted={false}
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
            {activeTags.length > 0 && `${activeTags.length} tags selected`}
          </InformContainer>
          <Flex justifyContent="space-between" mt={14} width={1}>
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
              Add
            </FormButton>
          </Flex>
        </Container>
      </Content>
    </Modal>
  )
}

export default TagsModal

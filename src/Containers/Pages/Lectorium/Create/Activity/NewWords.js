import React, { PureComponent } from 'react'
import { FieldArray } from 'react-final-form-arrays'
import PropTypes from 'prop-types'

import get from 'lodash/get'

import { deleteIconGlyph } from 'Assets/svg/common'
import { lectoriumAddQuestionGlyph } from 'Assets/svg/lectorium'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import { DEFAULT_NEW_WORD } from 'Constants/lectorium'

import { Container, QuizContainer, QuizDelete, QuizzAdd, Title } from './styles'

import { FormInput } from '../styles'

class NewWords extends PureComponent {
  render() {
    const { errors, touched } = this.props

    return (
      <Container>
        <FieldArray name="newWords">
          {({ fields }) => (
            <>
              {fields.map((name, index) => {
                const questionErrors = get(errors, ['newWords', index])

                const isWordError =
                  get(questionErrors, 'word', []).length > 0 &&
                  get(touched, `newWords[${index}].word`)
                const isDescriptionError =
                  get(questionErrors, 'description', []).length > 0 &&
                  get(touched, `newWords[${index}].description`)

                return (
                  <QuizContainer key={name} width={1}>
                    <Title>Word {index + 1}</Title>

                    <Flex
                      alignItems="flex-end"
                      justifyContent="space-between"
                      mt={20}
                      width={1}
                    >
                      <FormInput
                        debounced
                        initialValue=""
                        isError={isWordError}
                        label="Write Word"
                        maxlength={50}
                        name={`${name}.word`}
                        noError
                        placeholder="Write here..."
                        styles={{ mt: '20px', maxWidth: '802px' }}
                      />
                      <QuizDelete
                        onClick={e => {
                          e.preventDefault()
                          fields.remove(index)
                        }}
                      >
                        <Icon
                          fill="#FFA08C"
                          height={16}
                          icon={deleteIconGlyph}
                          width={16}
                          wrapperStyles={{
                            mr: '8px',
                          }}
                        />
                        Delete Word
                      </QuizDelete>
                    </Flex>
                    <FormInput
                      debounced
                      initialValue=""
                      isError={isDescriptionError}
                      label="Write Short Description"
                      name={`${name}.description`}
                      noError
                      placeholder="Write here..."
                      styles={{ mt: '20px' }}
                      type="textarea"
                    />
                  </QuizContainer>
                )
              })}
              <Flex mt={30} width={1}>
                <QuizzAdd
                  onClick={e => {
                    e.preventDefault()
                    fields.push(DEFAULT_NEW_WORD)
                  }}
                >
                  <Icon
                    height={16}
                    icon={lectoriumAddQuestionGlyph}
                    width={16}
                    wrapperStyles={{ mr: '8px' }}
                  />{' '}
                  add another Word
                </QuizzAdd>
              </Flex>
            </>
          )}
        </FieldArray>
      </Container>
    )
  }
}

NewWords.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
}

export default NewWords

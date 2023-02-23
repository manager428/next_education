import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  RepeatContainer,
  RepeatDescription,
  Title,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/Quiz/styles'

const RepeatQuiz = ({ onRepeat }) => (
  <RepeatContainer>
    <Title textAlign="center" width={1}>
      Congratulations! You passed the quiz!
    </Title>
    <RepeatDescription mt={20}>
      You can take the test as many times as you like. <br />
      We will keep your current result!
    </RepeatDescription>
    <Button mt={20} width={160} onClick={onRepeat}>
      Repeat test
    </Button>
  </RepeatContainer>
)

RepeatQuiz.propTypes = {
  onRepeat: PropTypes.func.isRequired,
}

export default RepeatQuiz

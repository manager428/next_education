import React from 'react'
import PropTypes from 'prop-types'

import get from 'lodash/get'

import ListSlider from './ListSlider'
import SpecialProjectsSlider from './SpecialProjectsSlider'
import { Container } from './styles'

const LectoriumList = ({ posts }: { posts: any[] }) => {
  if (posts.length === 0) return null

  return (
    <Container>
      <ListSlider posts={get(posts, 'new', [])} title="New" />

      <SpecialProjectsSlider posts={get(posts, 'special_project', [])} />

      <ListSlider
        category="virtual_field_trips"
        posts={get(posts, 'virtual_field_trips', [])}
        title="Virtual Field Trips"
      />

      <ListSlider
        category="health_wellness"
        posts={get(posts, 'health_wellness', [])}
        title="Health & Wellness"
      />

      <ListSlider
        category="life_skills"
        posts={get(posts, 'life_skills', [])}
        title="Life Skills"
      />

      <ListSlider
        category="science_nature"
        posts={get(posts, 'science_nature', [])}
        title="Science & Nature"
      />

      <ListSlider
        category="social_studies"
        posts={get(posts, 'social_studies', [])}
        title="Social Studies"
      />

      <ListSlider category="math" posts={get(posts, 'math', [])} title="Math" />

      <ListSlider
        category="world_languages"
        posts={get(posts, 'world_languages', [])}
        title="World Languages"
      />

      <ListSlider
        category="coding_tech"
        posts={get(posts, 'coding_tech', [])}
        title="Coding & Tech"
      />

      <ListSlider
        category="english"
        posts={get(posts, 'english', [])}
        title="English"
      />

      <ListSlider
        category="creative"
        posts={get(posts, 'creative', [])}
        title="Creative"
      />

      <ListSlider
        category="discussions"
        posts={get(posts, 'discussions', [])}
        title="Discussions"
      />

      <ListSlider
        category="other"
        posts={get(posts, 'other', [])}
        title="Other"
      />
    </Container>
  )
}

LectoriumList.propTypes = {
  posts: PropTypes.object.isRequired,
}

export default LectoriumList

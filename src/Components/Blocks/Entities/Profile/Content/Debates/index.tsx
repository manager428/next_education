import React, { useCallback } from 'react'

import Carousel from 'nuka-carousel'

import get from 'lodash/get'
import map from 'lodash/map'

import Debate, {
  DebateType,
} from 'Components/Blocks/Entities/Debates/Debate/Debate'
import {
  BlockTitle,
  BlockTitleViewAllText,
  ContentTitleText,
} from 'Components/Blocks/Entities/Profile/styles'

import _, { useScopedI18n } from 'Services/I18n'

import { Container, Dot, SliderArrow, SliderButton } from './styles'

type Props = {
  onViewAll: any
  debates: Array<DebateType>
  totalCount: number
}

const Debates: React.FC<Props> = ({ onViewAll, debates, totalCount }) => {
  const s = useScopedI18n('profile.content.debates')

  const renderSlides = useCallback(
    () =>
      map(debates, deb => (
        <Debate
          count_negative_votes={get(deb, 'count_negative_votes')}
          count_positive_votes={get(deb, 'count_positive_votes')}
          id={get(deb, 'id')}
          image={get(deb, 'image')}
          is_vote_positive={get(deb, 'is_vote_positive')}
          key={get(deb, 'id')}
          title={get(deb, 'title')}
          updated_at={get(deb, 'updated_at')}
          user_has_vote={get(deb, 'user_has_vote')}
        />
      )),
    [debates],
  )

  return (
    <Container>
      <BlockTitle>
        <ContentTitleText>
          {s('title')} <Dot /> {totalCount}
        </ContentTitleText>
        <BlockTitleViewAllText onClick={onViewAll}>
          {_('buttons.viewAll')}
        </BlockTitleViewAllText>
      </BlockTitle>

      {debates.length === 0 ? (
        s('noDebatesFound')
      ) : (
        <Carousel
          autoplay={false}
          heightMode="current"
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide, currentSlide }) => (
            <SliderButton
              active={currentSlide !== 0}
              type="prev"
              onClick={previousSlide}
            >
              <SliderArrow />
            </SliderButton>
          )}
          renderCenterRightControls={({ nextSlide, currentSlide }) => (
            <SliderButton
              active={currentSlide !== debates.length - 2 && debates.length > 2}
              type="next"
              onClick={nextSlide}
            >
              <SliderArrow />
            </SliderButton>
          )}
          renderTopCenterControls={null}
          slideIndex={0}
          slideWidth="335px"
          slidesToShow={2}
        >
          {renderSlides()}
        </Carousel>
      )}
    </Container>
  )
}

export default Debates

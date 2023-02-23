import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import InnerHTML from 'dangerously-set-html-content'
import Link from 'next/link'
import Router from 'next/router'
import Carousel from 'nuka-carousel'

import get from 'lodash/get'
import map from 'lodash/map'
import truncate from 'lodash/truncate'

import { Flex } from 'Components/UI'

import { USER_ROLES } from 'Constants/ids'
import { PUBLIC_PATHS } from 'Constants/paths'

import _ from 'Services/I18n'

import {
  Author,
  Container,
  Content,
  Description,
  Dot,
  Dots,
  PlayIcon,
  PreviewContainer,
  ReadMore,
  Section,
  Slide,
  SliderDot,
  Title,
} from './styles'

class Slider extends PureComponent {
  state = {
    selectedSlide: 0,
  }

  handleGoTo = id => async e => {
    e.preventDefault()

    await Router.push(PUBLIC_PATHS.LECTORIUM_POST(id))
  }

  getPartners = data => {
    const author = get(data, 'author_data')
    const authorRole = get(author, 'role')
    const partners = get(data, 'partners')

    if (authorRole === USER_ROLES.teacher) {
      return [
        { name: author.full_name, logo: author.avatar, isRounded: true, id: 1 },
      ]
    }

    return partners
  }

  renderSlides = () => {
    const { data, color } = this.props

    return map(data, (slide, index) => {
      const id = get(slide, 'id')
      const description = truncate(get(slide, 'description', ''), {
        length: 120,
      })
      const preview = get(slide, 'preview_url', '')
      const category = get(slide, 'category', '')
      const title = get(slide, 'title', '')
      const partners = this.getPartners(slide)

      return (
        <Slide key={index}>
          <PreviewContainer onClick={this.handleGoTo(id)}>
            <img alt="preview" src={preview} />
            <PlayIcon fill={color} />
          </PreviewContainer>
          <Content>
            <Section>
              NEW <Dot /> {category.toUpperCase()}
            </Section>
            <Title>{title}</Title>
            <Description>
              <InnerHTML html={description} />
            </Description>

            <ReadMore color={color} onClick={this.handleGoTo(id)}>
              {_('buttons.readMore')}...
            </ReadMore>

            <Flex width={1}>
              {map(partners, item => {
                const logo = get(item, 'logo')
                const name = get(item, 'name', '')
                const link = get(item, 'web_url', '')
                const isRounded = get(item, 'isRounded', false)

                return link?.length > 0 ? (
                  <Link href={link} key={item.id} passHref>
                    <Author isRounded={isRounded} target="_blank">
                      {logo && <img alt="logo" src={logo} />}
                      by {name}
                    </Author>
                  </Link>
                ) : (
                  <Author isRounded={isRounded} key={item.id}>
                    {logo && <img alt="logo" src={logo} />}
                    by {name}
                  </Author>
                )
              })}
            </Flex>
          </Content>
        </Slide>
      )
    })
  }

  handleSelectSlide = index => () => {
    this.setState({
      selectedSlide: index,
    })
  }

  render() {
    const { data, color } = this.props
    const { selectedSlide } = this.state

    if (data.length === 0) return null

    return (
      <Container>
        <Carousel
          afterSlide={index => this.handleSelectSlide(index)(null)}
          autoplay
          initialSlideHeight={288}
          renderBottomCenterControls={null}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderTopCenterControls={null}
          slideIndex={selectedSlide}
          wrapAround={false}
        >
          {this.renderSlides()}
        </Carousel>
        <Dots>
          {map(data, (it, index) => (
            <SliderDot
              active={+index === selectedSlide}
              color={color}
              key={index}
              onClick={this.handleSelectSlide(+index)}
            />
          ))}
        </Dots>
      </Container>
    )
  }
}

Slider.defaultProps = {
  color: '#6E46FF',
  data: [],
}

Slider.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array,
}

export default Slider

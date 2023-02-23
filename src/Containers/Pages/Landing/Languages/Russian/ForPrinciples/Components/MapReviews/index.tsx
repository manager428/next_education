import React, { useCallback, useEffect, useState } from 'react'

import Image from 'next/image'

import map from 'lodash/map'

import { map as mapImage } from 'Assets/images/landing'

import { Element, Flex } from 'Components/UI'

import {
  CloseIcon,
  CloseWrapper,
  Container,
  MapContainer,
  QuoteIcon,
  ReviewPopup,
  Title,
  UserReview,
} from './styles'

type Review = {
  id: number
  review: string
  avatar: string
  author: string
  coords: {
    top?: number
    left?: number
  }
}
type Props = {
  data: Review[]
}

const MapReviews: React.FC<Props> = ({ data }) => {
  const [activeReview, setActiveReview] = useState<Review | null>(null)

  useEffect(() => {
    if (data?.length > 0) {
      setActiveReview(data[0])
    }
  }, [data])

  const handleShowReview = useCallback(reviewId => {
    setActiveReview(reviewId)
  }, [])

  const handleCloseReview = useCallback(() => {
    setActiveReview(null)
  }, [])

  const renderUsers = useCallback(
    () =>
      map(data, user => (
        <UserReview
          active={activeReview?.id === user.id}
          key={user.id}
          {...user.coords}
          onClick={() => handleShowReview(user)}
        >
          <Image
            height={48}
            objectFit="cover"
            priority
            src={user.avatar}
            unoptimized
            width={48}
          />
        </UserReview>
      )),
    [data, activeReview],
  )

  return (
    <Container flexWrap="wrap" justifyContent="center" pb={80} pt={60}>
      <Title justifyContent="center" width={1}>
        Станьте частью самого дружного сообщества учеников <br /> на планете
      </Title>

      <Flex flexWrap="wrap" maxWidth={720} width={1}>
        <Flex justifyContent="space-between" mt={32} width={1}>
          <Flex flexWrap="wrap" justifyContent="center" maxWidth={92}>
            <Element color="#49CEB1" fontSize="32px" fontWeight="bold">
              160
            </Element>
            <Element fontSize="22px" mt="8px">
              стран
            </Element>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center" maxWidth={124}>
            <Element color="#49CEB1" fontSize="32px" fontWeight="bold">
              150,000
            </Element>
            <Element fontSize="22px" mt="8px">
              студентов
            </Element>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center" maxWidth={124}>
            <Element color="#49CEB1" fontSize="32px" fontWeight="bold">
              10,000
            </Element>
            <Element fontSize="22px" mt="8px">
              учителей
            </Element>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center" maxWidth={180}>
            <Element color="#49CEB1" fontSize="32px" fontWeight="bold">
              1,000,000+
            </Element>
            <Element fontSize="22px" mt="8px">
              контактов
            </Element>
          </Flex>
        </Flex>

        <MapContainer>
          <Flex mt={32}>
            <Image height={440} priority src={mapImage} width={780} />
            {renderUsers()}
          </Flex>

          {activeReview && (
            <ReviewPopup
              left={(activeReview?.coords?.left || 0) + 45}
              top={(activeReview?.coords?.top || 0) + 45}
            >
              <CloseWrapper onClick={handleCloseReview}>
                <CloseIcon />
              </CloseWrapper>

              <Flex width={1}>
                <QuoteIcon />
                <QuoteIcon />
              </Flex>
              <Flex
                color="#333333"
                fontSize="14px"
                fontStyle="italic"
                fontWeight={600}
                mt="10px"
                width={1}
              >
                {activeReview.review}
              </Flex>
              <Flex
                color="#49CEB1"
                fontSize={14}
                fontWeight={600}
                mt={10}
                width={1}
              >
                {activeReview.author}
              </Flex>
            </ReviewPopup>
          )}
        </MapContainer>
      </Flex>
    </Container>
  )
}

export default MapReviews

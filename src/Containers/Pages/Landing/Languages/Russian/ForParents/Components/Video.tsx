import React, { useState } from 'react'

import {
  videoAlixPreview,
  videoAndrewPreview,
  videoOlliPreview,
} from 'Assets/images/landing'

import { Element, Flex, Image } from 'Components/UI'

import VideoModal from 'Components/Blocks/Modals/VideoModal'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Title, VideoItem } from '../styles'

const VIDEOS = [
  {
    name: 'Andrew',
    country: 'Англия',
    avatar: videoAndrewPreview.src,
    description: 'Опыт работы: 12 лет',
    videoUrl:
      'https://s3.eu-central-1.amazonaws.com/idialogue.io/landing/video/Andrew.mp4',
  },
  {
    name: 'Alix',
    country: 'Англия',
    avatar: videoAlixPreview.src,
    description: 'Опыт работы: 5 лет',
    videoUrl:
      'https://s3.eu-central-1.amazonaws.com/idialogue.io/landing/video/Alix.MP4',
  },
  {
    name: 'Olli',
    country: 'Англия',
    avatar: videoOlliPreview.src,
    description: 'Опыт работы: 7 лет',
    videoUrl:
      'https://s3.eu-central-1.amazonaws.com/idialogue.io/landing/video/Ali.mp4',
  },
]

const Video = () => {
  const [selected, setSelected] = useState<null | string>(null)

  const handleSelect = url => () => {
    setSelected(url)
  }

  const handleCloseModal = () => {
    setSelected(null)
  }

  return (
    <Flex flexWrap="wrap" width={1}>
      {selected && (
        <VideoModal isOpen videoUrl={selected} onClose={handleCloseModal} />
      )}

      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Container
          backgroundColor="#F7FAFF"
          justifyContent="center"
          pb={60}
          pt={60}
          width={1}
        >
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Title fontSize="32px" fontWeight="800">
              Занятия с носителями английского языка
            </Title>
            <Element
              fontSize="22px"
              lineHeight="22px"
              mt="28px"
              textAlign="center"
              width={1}
            >
              Уберут языковой барьер и разговорят ребенка с любым уровнем
              английского!
            </Element>
          </Flex>

          <Flex
            justifyContent="space-between"
            maxWidth="980px"
            mt="40px"
            width={1}
          >
            {VIDEOS.map(video => (
              <VideoItem
                flexWrap="wrap"
                justifyContent="center"
                key={video.videoUrl}
                width="418px"
                onClick={handleSelect(video.videoUrl)}
              >
                <Image height="220px" src={video.avatar} width="220px" />
                <Element
                  fontSize="24px"
                  fontWeight="800"
                  mt="16px"
                  textAlign="center"
                  width={1}
                >
                  {video.name}
                </Element>
                <Element fontSize="22px" mt="16px" textAlign="center" width={1}>
                  {video.country}
                </Element>
                <Element fontSize="22px" mt="16px" textAlign="center" width={1}>
                  {video.description}
                </Element>
              </VideoItem>
            ))}
          </Flex>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.TABLET}>
        <Container
          backgroundColor="#F7FAFF"
          justifyContent="center"
          pb={60}
          pt={60}
          width={1}
        >
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Title
              fontWeight="800"
              justifyContent="center"
              textAlign="center"
              width={1}
            >
              Занятия с носителями английского языка
            </Title>
            <Element
              fontSize="18px"
              lineHeight="18px"
              mt="20px"
              textAlign="center"
              width={1}
            >
              Уберут языковой барьер и разговорят ребенка с любым уровнем
              английского!
            </Element>
          </Flex>

          <Flex
            justifyContent="space-between"
            maxWidth="704px"
            mt="40px"
            width={1}
          >
            {VIDEOS.map(video => (
              <VideoItem
                flexWrap="wrap"
                justifyContent="center"
                key={video.videoUrl}
                width="200px"
                onClick={handleSelect(video.videoUrl)}
              >
                <Image height="180px" src={video.avatar} width="180px" />
                <Element
                  fontSize="24px"
                  fontWeight="800"
                  mt="16px"
                  textAlign="center"
                  width={1}
                >
                  {video.name}
                </Element>
                <Element fontSize="18px" mt="16px" textAlign="center" width={1}>
                  {video.country}
                </Element>
                <Element fontSize="18px" mt="16px" textAlign="center" width={1}>
                  {video.description}
                </Element>
              </VideoItem>
            ))}
          </Flex>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.MOBILE}>
        <Container
          backgroundColor="#F7FAFF"
          justifyContent="center"
          pb={60}
          pt={60}
          width={1}
        >
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Title fontWeight="800" justifyContent="center" width={1}>
              Занятия с носителями английского языка
            </Title>
            <Element
              fontSize="14px"
              lineHeight="14px"
              mt="20px"
              textAlign="center"
              width={1}
            >
              Уберут языковой барьер и разговорят ребенка с любым уровнем
              английского!
            </Element>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center" mt="40px" width={1}>
            {VIDEOS.map(video => (
              <VideoItem
                flexWrap="wrap"
                justifyContent="center"
                key={video.videoUrl}
                mb="20px"
                width="280px"
                onClick={handleSelect(video.videoUrl)}
              >
                <Image height="180px" src={video.avatar} width="180px" />
                <Element
                  fontSize="24px"
                  fontWeight="800"
                  mt="16px"
                  textAlign="center"
                  width={1}
                >
                  {video.name}
                </Element>
                <Element fontSize="18px" mt="16px" textAlign="center" width={1}>
                  {video.country}
                </Element>
                <Element fontSize="18px" mt="16px" textAlign="center" width={1}>
                  {video.description}
                </Element>
              </VideoItem>
            ))}
          </Flex>
        </Container>
      </Media>
    </Flex>
  )
}

export default Video

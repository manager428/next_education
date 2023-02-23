import React, { useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'
import Link from 'next/link'

import get from 'lodash/get'
import pick from 'lodash/pick'
import reduce from 'lodash/reduce'

import {
  facebookGlyph,
  instagramGlyph,
  twitterGlyph,
  websiteGlyph,
} from 'Assets/svg/landing'

import { Flex } from 'Components/UI'

import { CommentForm, CommentsList } from 'Components/Blocks/Comments'
import { RelatedVideos } from 'Components/Blocks/Entities/Lectorium/LectoriumExplore'

import useRole from 'Hooks/useRole'

import { useScopedI18n } from 'Services/I18n'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

import {
  AboutImage,
  Container,
  Description,
  LearMoreButton,
  LearnMoreSection,
  SocialContainer,
  SocialIcon,
  SubTitle,
  Title,
} from './styles'

type Props = {
  color: string
  firstSection: {
    title: string
    description: string
    image: string
  }
  secondSection: {
    title?: string
    description?: string
  }
  learnMore: {
    title?: string
    description?: string
    link?: string
  }
  socials: Array<{
    social_type: 'website' | 'instagram' | 'twitter' | 'facebook'
    link: string
    id: number
  }>
  comments: Array<any>
  relatedVideos: Array<any>
  onAddComment: (values: { comment: string }) => void
  onAddLike: (commentId: number) => void
}

const SpecialAbout: React.FC<Props> = ({
  color,
  firstSection,
  secondSection,
  socials,
  comments,
  learnMore,
  relatedVideos,
  onAddComment,
  onAddLike,
}) => {
  const s = useScopedI18n('lectorium.view')
  const { isLoggedIn, isStudent, isTeacher } = useRole()
  const [replyToUser, setReplyToUser] = useState<string | null>(null)

  const handleReplyToUser = (username: string): void => {
    setReplyToUser(`<span style="color: rgb(246,139,106);">${username}</span>,`)
  }

  const SOCIALS_LINKS = pick(
    reduce(
      socials,
      (acc: any, value) => {
        const socialType = get(value, 'social_type')
        acc[socialType] = get(value, 'link')

        return acc
      },
      {},
    ),
    ['website', 'instagram', 'twitter', 'facebook'],
  )

  const webSiteSocial = get(SOCIALS_LINKS, 'website')
  const instagramSocial = get(SOCIALS_LINKS, 'instagram')
  const facebookSocial = get(SOCIALS_LINKS, 'facebook')
  const twitterSocial = get(SOCIALS_LINKS, 'twitter')

  return (
    <Container>
      <Flex justifyContent="space-between" width={1}>
        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          maxWidth={510}
          width={1}
        >
          <Title>{get(firstSection, 'title')}</Title>
          <Description mt="15px">
            <InnerHTML html={get(firstSection, 'description')} />
          </Description>

          <Flex mt={35} width={1}>
            {webSiteSocial && (
              <SocialContainer>
                <Link href={webSiteSocial} passHref>
                  <a target="_blank">
                    <SocialIcon fill={color} icon={websiteGlyph} />
                  </a>
                </Link>
              </SocialContainer>
            )}
            {instagramSocial && (
              <SocialContainer>
                <Link href={instagramSocial} passHref>
                  <a target="_blank">
                    <SocialIcon fill={color} icon={instagramGlyph} />
                  </a>
                </Link>
              </SocialContainer>
            )}

            {twitterSocial && (
              <SocialContainer>
                <Link href={twitterSocial} passHref>
                  <a target="_blank">
                    <SocialIcon fill={color} icon={twitterGlyph} />
                  </a>
                </Link>
              </SocialContainer>
            )}

            {facebookSocial && (
              <SocialContainer>
                <Link href={facebookSocial} passHref>
                  <a target="_blank">
                    <SocialIcon fill={color} icon={facebookGlyph} />
                  </a>
                </Link>
              </SocialContainer>
            )}
          </Flex>
        </Flex>

        <Flex width={420}>
          <AboutImage src={get(firstSection, 'image')} />
        </Flex>
      </Flex>

      {(secondSection.title || secondSection.description) && (
        <Flex flexWrap="wrap" mt={50} width={1}>
          <Title>{get(secondSection, 'title')}</Title>
          <Description fontSize="18px">
            <InnerHTML html={get(secondSection, 'description', '')} />
          </Description>
        </Flex>
      )}

      {/* Want to learn more */}

      {learnMore.link && (
        <LearnMoreSection>
          <Title justifyContent="center">{get(learnMore, 'title')}</Title>
          <SubTitle color="#828282" mt={14} textAlign="center">
            <InnerHTML html={get(learnMore, 'description', '')} />
          </SubTitle>
          <LearMoreButton
            as="a"
            color={color}
            href={get(learnMore, 'link')}
            mt={24}
            target="_blank"
          >
            GO TO WEBSITE
          </LearMoreButton>
        </LearnMoreSection>
      )}

      {/* Discuss Section */}

      <Flex justifyContent="space-between" mt={40} width={1}>
        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          maxWidth="600px"
        >
          <CommentForm
            color={color}
            formTitle=""
            isLoggedUser={isLoggedIn}
            isSubmitAllowed={isStudent || isTeacher}
            replyToUser={replyToUser}
            title={s('haveQuestions')}
            titleAlign="left"
            titleFontSize="24px"
            withSignInPopup
            onReplyReset={() => null}
            onSuccess={onAddComment}
          />
          <CommentsList
            color={color}
            data={comments}
            section={COMPLAINT_SECTIONS.LECTORIUM}
            onAddLike={onAddLike}
            onReplyClick={handleReplyToUser}
          />
        </Flex>
        <RelatedVideos
          color={color}
          posts={relatedVideos}
          title={s('ourNewVideos')}
        />
      </Flex>
    </Container>
  )
}

export default SpecialAbout

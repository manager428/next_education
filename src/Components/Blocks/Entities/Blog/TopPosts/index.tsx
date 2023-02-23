import React, { useCallback } from 'react'

import { DateTime } from 'luxon'
import Link from 'next/link'

import map from 'lodash/map'
import slice from 'lodash/slice'
import truncate from 'lodash/truncate'

import { Flex } from 'Components/UI'

import { PUBLIC_PATHS } from 'Constants/paths'

import _ from 'Services/I18n'

import {
  BlogLikeIcon,
  Container,
  PostDescription,
  PostImage,
  PostInfo,
  PostTitle,
  ReadMoreButton,
} from './styles'

type Props = {
  posts: any[]
}

const TopPosts: React.FC<Props> = ({ posts }) => {
  const renderMainPost = useCallback(() => {
    const postData = posts[0]

    const postDate = DateTime.fromISO(postData.created_at).toFormat(
      'MMMM dd, yyyy',
    )

    return (
      <Flex alignContent="flex-start" alignItems="flex-start" flexWrap="wrap">
        <Link href={`${PUBLIC_PATHS.BLOG_POST(postData.id)}`} passHref>
          <PostImage
            alt="Main post preview"
            height={282}
            src={postData?.image}
            width={1}
          />
        </Link>

        <Flex alignItems="flex-start" mt={22} width={1}>
          <PostInfo fontWeight="bold">{postData?.category}</PostInfo>
          <PostInfo>
            <span>•</span> {postDate}
          </PostInfo>
          <Flex flexGrow={1} justifyContent="flex-end">
            <BlogLikeIcon wrapperStyles={{ mr: 10 }} />
            {postData.likes_count}
          </Flex>
        </Flex>

        <PostTitle fontSize={28} mt={14}>
          {postData?.title}
        </PostTitle>
        <PostDescription lineHeight="24px" mt={14}>
          {postData?.excerpt}
        </PostDescription>
        <Flex mt={14}>
          <Link href={`${PUBLIC_PATHS.BLOG_POST(postData.id)}`} passHref>
            <ReadMoreButton>{_('buttons.readMore')}...</ReadMoreButton>
          </Link>
        </Flex>
      </Flex>
    )
  }, [posts])

  const renderPosts = useCallback(() => {
    const otherPosts = slice(posts, 1)

    return map(otherPosts, it => {
      const postDate = DateTime.fromISO(it?.created_at).toFormat('MMM dd, yyyy')
      const description = truncate(it?.excerpt, { length: 60, omission: '...' })
      const title = truncate(it?.title, { length: 58, omission: '...' })

      return (
        <Flex key={it.id} mb={24} width={1}>
          <Flex width={214}>
            <Link href={`${PUBLIC_PATHS.BLOG_POST(it.id)}`} passHref>
              <PostImage
                alt="post preview"
                height={140}
                src={it?.image}
                width={1}
              />
            </Link>
          </Flex>
          <Flex
            alignContent="flex-start"
            alignItems="flex-start"
            flexDirection="column"
            flexWrap="wrap"
            maxWidth={248}
            ml={20}
            width={1}
          >
            <Flex alignContent="flex-start" alignItems="flex-start" width={1}>
              <PostInfo fontSize={14} fontWeight="bold">
                {it?.category}
              </PostInfo>
              <PostInfo fontSize={14}>
                <span>•</span> {postDate}
              </PostInfo>
            </Flex>

            <PostTitle fontSize={18} lineHeight="22px" mt="10px">
              {title}
            </PostTitle>
            <PostDescription lineHeight="22px" mt="10px">
              {description}
            </PostDescription>

            <Flex mt="auto">
              <Link href={`${PUBLIC_PATHS.BLOG_POST(it.id)}`} passHref>
                <ReadMoreButton>{_('buttons.readMore')}...</ReadMoreButton>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      )
    })
  }, [posts])

  return (
    <Container justifyContent="space-between">
      <Flex width={470}>{renderMainPost()}</Flex>

      <Flex flexWrap="wrap" maxWidth={482} ml={28}>
        {renderPosts()}
      </Flex>
    </Container>
  )
}

export default TopPosts

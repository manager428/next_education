import React from 'react'

import Link from 'next/link'

import { Flex } from 'Components/UI'

import { PUBLIC_PATHS } from 'Constants/paths'

import _ from 'Services/I18n'

import {
  BlogLikeIcon,
  EventDate,
  PostContainer,
  PostDescription,
  PostImage,
  PostInfo,
  PostTitle,
  ReadMoreButton,
  RelativeCont,
} from './styles'

export type BlogPostType = {
  id: number
  image: string
  category: string
  date: string
  likes: number
  isLiked: boolean
  title: string
  description: string
  eventDate?: string
}

const BlogPost: React.FC<BlogPostType> = ({
  id,
  image,
  category,
  date,
  title,
  likes,
  description,
  isLiked,
  eventDate,
}) => (
  <PostContainer>
    <Link href={`${PUBLIC_PATHS.BLOG_POST(id)}`} passHref>
      <a>
        <RelativeCont>
          {eventDate && <EventDate>{eventDate}</EventDate>}
          <PostImage alt="preview" src={image} />
        </RelativeCont>
      </a>
    </Link>

    <Flex mt={22} width={1}>
      <PostInfo>
        {category} <span>•</span> {date}
      </PostInfo>
      <Flex flexGrow={1} justifyContent="flex-end">
        <BlogLikeIcon isLiked={isLiked} wrapperStyles={{ mr: 10 }} />
        {likes}
      </Flex>
    </Flex>

    <PostTitle mt={14}>{title}</PostTitle>

    <PostDescription mt={14} width={1}>
      {description}
    </PostDescription>

    <Flex mt={14} width={1}>
      <Link href={`${PUBLIC_PATHS.BLOG_POST(id)}`} passHref>
        <ReadMoreButton>{_('buttons.readMore')}...</ReadMoreButton>
      </Link>
    </Flex>
  </PostContainer>
)

export default BlogPost

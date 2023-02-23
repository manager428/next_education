import React from 'react'

import NextHead from 'next/head'

import { mediaStyles } from 'Theme/MediaProvider'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

type Props = {
  title: string
  description?: string
  url?: string
  ogImage?: string
}

const Head: React.FC<Props> = ({
  title,
  description,
  url,
  ogImage,
  children,
}) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta content={description || defaultDescription} name="description" />

    {/* <link href="/static/touch-icon.png" rel="icon" sizes="192x192" /> */}
    {/* <link href="/static/touch-icon.png" rel="apple-touch-icon" /> */}
    <link href="/static/favicon.ico" rel="icon" />
    <meta content={url || defaultOGURL} property="og:url" />
    <meta content={title || ''} property="og:title" />
    <meta
      content={description || defaultDescription}
      property="og:description"
    />
    <meta content={url || defaultOGURL} name="twitter:site" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content={ogImage || defaultOGImage} name="twitter:image" />
    <meta content={ogImage || defaultOGImage} property="og:image" />
    <meta content="1200" property="og:image:width" />
    <meta content="630" property="og:image:height" />

    {/* eslint-disable-next-line react/no-danger */}
    <style dangerouslySetInnerHTML={{ __html: mediaStyles }} type="text/css" />

    {children}
  </NextHead>
)

export default Head

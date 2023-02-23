import { NextPage } from 'next'

import BlogContainer from 'Containers/Pages/Blog'

import { blogApi } from 'Services/Api/requests'

type Props = {
  initialData: any
}

const Blog: NextPage<Props> = ({ initialData }) => (
  <BlogContainer initialData={initialData} />
)

export async function getStaticProps() {
  const data = await blogApi.blogList().catch(e => {
    if (e.status === 404) return null

    return e
  })

  return {
    revalidate: 3600,
    props: { initialData: { ...data } },
  }
}

export default Blog

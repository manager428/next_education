import { NextPage } from 'next'

import BlogDetailedContainer from 'Containers/Pages/BlogDetailed'

import { blogApi } from 'Services/Api/requests'

type Props = {
  initialData: any
}

const BlogDetailed: NextPage<Props> = ({ initialData }) => (
  <BlogDetailedContainer initialData={initialData} />
)

export async function getServerSideProps(context: any) {
  const {
    query: { id },
  } = context

  const data = await blogApi.details(id).catch(e => {
    if (e.status === 404) return null

    return e
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { initialData: { ...data } },
  }
}

export default BlogDetailed

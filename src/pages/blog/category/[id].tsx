import { NextPage } from 'next'

import BlogContainer from 'Containers/Pages/Blog'

import { blogApi } from 'Services/Api/requests'

type Props = {
  initialData: any
}

const BlogCategory: NextPage<Props> = ({ initialData }) => (
  <BlogContainer initialData={initialData} />
)

export async function getServerSideProps(context: any) {
  const {
    query: { id },
  } = context

  const data = await blogApi.search({ category: id, page: 1 })

  return {
    props: { initialData: [{ ...data }] },
  }
}

export default BlogCategory

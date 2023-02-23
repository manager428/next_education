import { NextPage } from 'next'

import FaqContainer from 'Containers/Pages/Faq/Faq'

import { faqApi } from 'Services/Api/requests'

type Props = {
  initialData?: any
}

const Faq: NextPage<Props> = ({ initialData }) => (
  <FaqContainer initialData={initialData} />
)

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          role: 'guest',
        },
      },
      {
        params: {
          role: 'teacher',
        },
      },
      {
        params: {
          role: 'parent',
        },
      },
      {
        params: {
          role: 'student',
        },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const {
    params: { role },
  } = context

  const data = await faqApi.faqList(role)

  return {
    revalidate: 3600,
    props: { initialData: { ...data } },
  }
}

export default Faq

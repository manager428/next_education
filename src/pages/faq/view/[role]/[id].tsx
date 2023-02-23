import { NextPage } from 'next'

import FaqDetailedContainer from 'Containers/Pages/Faq/DetailedFaq'

import { faqApi } from 'Services/Api/requests'

type Props = {
  initialData: any
}

const FaqDetailed: NextPage<Props> = ({ initialData }) => (
  <FaqDetailedContainer initialData={initialData} />
)

export async function getServerSideProps(context: any) {
  const {
    query: { id, role },
  } = context

  const data = await faqApi.faqDetailes(id, role).catch(e => {
    if (e.status === 404) {
      return null
    }

    return e
  })

  if (!data)
    return {
      notFound: true,
    }

  return {
    props: { initialData: { ...data } },
  }
}

export default FaqDetailed

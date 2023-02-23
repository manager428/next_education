import { NextPage } from 'next'

import DebateContainer from 'Containers/Pages/Debate'

import { debatesApi } from 'Services/Api/requests'

type Props = {
  initialData: any
}

const Debate: NextPage<Props> = ({ initialData }) => (
  <DebateContainer initialData={initialData} />
)

export async function getServerSideProps(ctx: any) {
  const {
    query: { id },
  } = ctx

  const data = await debatesApi.details(id).catch(e => {
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

export default Debate

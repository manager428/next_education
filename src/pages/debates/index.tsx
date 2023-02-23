import { NextPage } from 'next'

import DebatesContainer from 'Containers/Pages/Debates'

import { debatesApi } from 'Services/Api/requests'

type Props = {
  initialData: any
}

const Debates: NextPage<Props> = ({ initialData }) => (
  <DebatesContainer initialData={initialData} />
)

export async function getStaticProps() {
  const data = await debatesApi.debatesList()

  return {
    revalidate: 3600,
    props: { initialData: [{ ...data }] },
  }
}

export default Debates

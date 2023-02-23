import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

const English = dynamic(
  () => import('Containers/Pages/Landing/Languages/English/Landing'),
  {
    ssr: false,
    loading: Loader,
  },
)

const Russian = dynamic(
  () => import('Containers/Pages/Landing/Languages/Russian/Landing'),
  {
    ssr: false,
    loading: Loader,
  },
)

const EnglishForParents = dynamic(
  () => import('Containers/Pages/Landing/Languages/English/ForParents'),
  {
    ssr: false,
    loading: Loader,
  },
)

const RussianForParents = dynamic(
  () => import('Containers/Pages/Landing/Languages/Russian/ForParents'),
  {
    ssr: false,
    loading: Loader,
  },
)

const EnglishForEducators = dynamic(
  () => import('Containers/Pages/Landing/Languages/English/ForEducators'),
  {
    ssr: false,
    loading: Loader,
  },
)

const RussianForEducators = dynamic(
  () => import('Containers/Pages/Landing/Languages/Russian/ForEducators'),
  {
    ssr: false,
    loading: Loader,
  },
)

const EnglishForPrinciles = dynamic(
  () => import('Containers/Pages/Landing/Languages/English/ForPrinciples'),
  {
    ssr: false,
    loading: Loader,
  },
)

const RussianForPrinciples = dynamic(
  () => import('Containers/Pages/Landing/Languages/Russian/ForPrinciples'),
  {
    ssr: false,
    loading: Loader,
  },
)

export {
  English,
  EnglishForEducators,
  EnglishForParents,
  EnglishForPrinciles,
  Russian,
  RussianForEducators,
  RussianForParents,
  RussianForPrinciples,
}

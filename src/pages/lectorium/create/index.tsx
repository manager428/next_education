import React from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const DynamicLectoriumCreaate = dynamic(
  () => import('Containers/Pages/Lectorium/Create'),
  {
    ssr: false,
    loading: Loader,
  },
)

const Create: NextPage = () => <DynamicLectoriumCreaate />

export default withAuthSync(Create)

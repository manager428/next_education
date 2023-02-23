import { useMemo } from 'react'

import { useRouter } from 'next/router'

export default function useRouterQueryParams() {
  const router = useRouter()

  return useMemo(() => router.query, [router])
}

import { useRef } from 'react'

export const useComponentWillMount = func => {
  const willMount = useRef(true)

  if (willMount.current) func()

  willMount.current = false
}

import { useAppSelector } from 'Hooks/useStore'

import { selectMe } from 'Store/me/selectors'

const useMe = () => {
  const { me } = useAppSelector(selectMe)

  return me
}

export default useMe

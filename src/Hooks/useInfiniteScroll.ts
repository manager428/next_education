import { useCallback, useRef } from 'react'

const useInfiniteScroll = (callback, isFetching) => {
  const observer = useRef<IntersectionObserver>()

  const lastElementRef = useCallback(
    node => {
      if (isFetching) return

      // stop watching targets, you can think of it as a reset
      if (observer.current) observer.current.disconnect()

      // create a new intersection observer and execute the callback incase of an intersecting event
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          callback()
        }
      })

      // if there is a node, let the intersection observer watch that node
      if (node) observer.current.observe(node)
    },
    [callback, isFetching],
  )

  // return reference to the last element
  return [lastElementRef]
}

export default useInfiniteScroll

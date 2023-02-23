import { useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 * If click outside appear, onClick function is invoked
 */
const useOutsideClick = ({ ref, onClick }) => {
  if (ref === undefined) {
    throw new Error('Ref argument must be passed')
  }

  if (onClick === undefined) {
    throw new Error('onClick function must be passed')
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      ref.current.contains &&
      !ref.current.contains(event.target)
    ) {
      onClick() // invoke onClick
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      // Unbind the event
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

export default useOutsideClick

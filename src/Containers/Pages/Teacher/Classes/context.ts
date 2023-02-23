import { createContext, useContext } from 'react'

type Context = {
  onSelectStudent: (userId: number) => void
}

const ListContext = createContext<Context>({
  onSelectStudent: () => null,
})

export function useListContext(): Context {
  const context = useContext(ListContext)

  if (context === undefined) {
    throw new Error('useList must be used within a Context Provider')
  }
  return context
}

export default ListContext

import { createContext, useContext } from 'react'

type Context = {
  onResetPassword: () => void
  onDeleteChild: () => void
}

const ModalsContext = createContext<Context>({
  onResetPassword: () => null,
  onDeleteChild: () => null,
})

export function useModalsContext(): Context {
  return useContext(ModalsContext)
}

export default ModalsContext

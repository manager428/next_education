import { createContext, useContext } from 'react'

export type UserContextType = {
  onUpdateUser: (user: any) => void
}

const UserContext = createContext<UserContextType>({ onUpdateUser: () => null })

export function useUserContext() {
  return useContext(UserContext)
}

export default UserContext

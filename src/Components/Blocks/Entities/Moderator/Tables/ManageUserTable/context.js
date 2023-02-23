import { createContext, useContext } from 'react'

const TableContext = createContext({})

export function useTableContext() {
  return useContext(TableContext)
}

export default TableContext

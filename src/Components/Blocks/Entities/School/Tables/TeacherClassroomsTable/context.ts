import { createContext, useContext } from 'react'

type Context = {
  isSelectable: boolean
  selectedIds: number[]
  onSelect: (studentId: number) => void
}

const TableContext = createContext<Context>({
  isSelectable: false,
  selectedIds: [],
  onSelect: () => null,
})

export function useTableContext() {
  return useContext(TableContext)
}

export default TableContext

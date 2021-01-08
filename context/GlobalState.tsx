import React, { createContext, useReducer } from 'react'
import { GlobalContextType, State } from '../lib/data-types'
import AppReducer from './AppReducer'

const initialState: State = {
  color: 'blue',
  rounded: 'rounded-md',
  border: 'border',
  padding: 'p-1',
  paddingX: 'px-3',
  paddingY: 'py-1',
  fontWeight: 'font-medium',
  textTransform: 'normal-case',
}

// The global context becomes a single source of truth
// Any child element can grab states from it
export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null,
})
// The global provider gives children elements access to
// the global context
export const GlobalProvider: React.FC = ({ children }) => {
  // A reducer function enables the consumption and modification of states
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

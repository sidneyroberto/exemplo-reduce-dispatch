import React, { ReactNode, createContext, useReducer } from 'react'
import { Word } from '../models/Word'
import UserReducer from './UserReducer'

type InitialStateType = {
  words: Word[]
}

const initialState: InitialStateType = {
  words: [],
}

type UserContextType = {
  state: InitialStateType
  dispatch: React.Dispatch<any>
}

const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
})

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

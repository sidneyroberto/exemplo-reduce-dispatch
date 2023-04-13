import { Dispatch } from 'react'

import { Word } from '../models/Word'
import { Action, ActionType } from './UserReducer'

export const setWords = (dispatch: Dispatch<Action>, words: Word[]) =>
  dispatch({ type: ActionType.SET_WORDS, payload: words })

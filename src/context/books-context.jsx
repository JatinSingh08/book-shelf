import React, { createContext, useReducer } from 'react'
import { BooksReducer, initialState } from '../reducers/BooksReducer';
import { ActionType } from '../reducers/constants';

export const BooksContext = createContext();
const BooksProvider = ({children}) => {
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  const handleBookStatus = (e) => {
    const value = e.target.value;
    dispatch({ type: ActionType.CHANGE_CATEGORY, payload: { id: e.target.id, category: value }})
  };

  console.log(state.books);
  return (
    <BooksContext.Provider 
    value={{ 
      state, 
      dispatch,
      handleBookStatus
    }}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider

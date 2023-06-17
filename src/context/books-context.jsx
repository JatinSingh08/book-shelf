import React, { createContext, useReducer } from 'react'
import { BooksReducer, initialState } from '../reducers/BooksReducer';
import { ActionType } from '../reducers/constants';

export const BooksContext = createContext();

const BooksProvider = ({children}) => {
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  const handleBookStatus = (bookId, categoryValue) => {
    dispatch({ type: ActionType.CHANGE_CATEGORY, payload: { id: bookId, category: categoryValue }})
  };

  const handleSearch = (value) => {
    dispatch({ type: ActionType.SET_SEARCH_VALUE, payload: value})
  }

  console.log(state.books);
  return (
    <BooksContext.Provider 
    value={{ 
      state, 
      dispatch,
      handleBookStatus,
      handleSearch
    }}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider

import React, { createContext, useReducer } from 'react'
import { BooksReducer, initialSate } from '../reducers/BooksReducer';

const BooksContext = createContext();
const BooksProvider = () => {
  const [state, dispatch] = useReducer(BooksReducer, initialSate);
  
  return (
    <BooksContext.Provider 
    value={{ 
      state, 
      dispatch
    }}>
      
    </BooksContext.Provider>
  )
}

export default BooksProvider

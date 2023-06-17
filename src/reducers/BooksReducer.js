import { books } from "../data/data";
import { ActionType } from "./constants";

export const initialState = {
  books: books
}
export const BooksReducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CATEGORY: 
       return {
        ...state,
        books: books.map((book) => book.id === action.payload.id ? ({...book, category: action.payload.category}) : book)
       }
    default:
      return state;
  }
}
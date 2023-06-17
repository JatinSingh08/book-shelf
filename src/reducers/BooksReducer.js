import { books as booksData} from "../data/data";
import { ActionType } from "./constants";

export const initialState = {
  books: booksData,
  searchValue: ''
}
export const BooksReducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CATEGORY: 
       return {
        ...state,
        books: state.books.map((book) => book.id === action.payload.id ? ({...book, category: action.payload.category}) : book)
       }
    case ActionType.SET_SEARCH_VALUE: 
       return {
        ...state,
        searchValue: action.payload
       }
    default:
      return state;
  }
}
import { books as booksData} from "../data/data";
import { ActionType } from "./constants";

export const initialState = {
  books: booksData
}
export const BooksReducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CATEGORY: 
       return {
        ...state,
        books: state.books.map((book) => book.id === action.payload.id ? ({...book, category: action.payload.category}) : book)
       }
    default:
      return state;
  }
}
import React, { useContext } from 'react'
import { BooksContext } from '../../context/books-context'
import { BookCard } from '../../components';

const Search = () => {
  const { state } = useContext(BooksContext);
  const filteredBooks = state.books.filter(book => book.title.toLowerCase().includes(state.searchValue.toLowerCase()) || book.author.toLowerCase().includes(state.searchValue.toLowerCase()))

  return (
    <div className='grid grid-cols-3 gap-4 items-center justify-center p-20'>
      {
        filteredBooks.map((book) => (
          <BookCard book={book} key={book.id}/>
        ))
      }
    </div> 
  )
}

export default Search

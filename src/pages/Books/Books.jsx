import React, { useContext } from 'react'
import { BookCard } from '../../components'
import { BooksContext } from '../../context/books-context'

const Books = () => {
  const { state } = useContext(BooksContext);
  const filterBooksByCategory = (cateogry) => state.books.filter(book => book.category === cateogry);

  return (
    <div className=' '>
      <div className='text-start'>
        <h1 className='text-xl font-semibold underline-offset-4 underline'>Continue Reading</h1>
        <div className='grid grid-cols-3 gap-4 items-center justify-center m-auto'>
          {
            filterBooksByCategory('continueReading').map((book) => (
              book.category === 'continueReading' &&
              <BookCard book={book} key={book.id} />
            ))
          }
        </div> 

      </div>

      <div className='text-start'>
        <h1 className='text-xl font-semibold underline-offset-4 underline '>Want To Read</h1>
        <div className='grid grid-cols-3 gap-4 items-center justify-center m-auto'>
          {
            filterBooksByCategory('wantToRead').map((book) => (
              book.category === 'wantToRead' &&
              <BookCard book={book} key={book.id} />
            ))
          }
        </div>
      </div>

      <div className='text-start'>
        <h1 className='text-xl font-semibold underline-offset-4 underline m-auto'>Read</h1>
        <div className='grid grid-cols-3 gap-4 items-center justify-center m-auto'>
          {
            filterBooksByCategory('read').map((book) => (
              book.category === 'read' &&
              <BookCard book={book} key={book.id} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Books

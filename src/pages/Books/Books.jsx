import React from 'react'
import { books } from '../../data/data'
import { BookCard } from '../../components'

const Books = () => {
  return (
    <div className='grid grid-cols-3 gap-4 items-center justify-center m-auto'>
      {
        books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))
      }
    </div>
  )
}

export default Books

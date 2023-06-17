import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const BookCard = ({ book }) => {
  const { title, publisher, author, year, image } = book;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  console.log(book);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='border-black w-56 m-auto mt-10 text-start header hover:scale-105 transition-all transform duration-700 hover:cursor-pointer relative'>
      <img src={image} alt="" className='h-80 object-fill w-full' />
      <div className='p-2'>
        <h2 className='font-semibold text-lg mt-4'>{title}</h2>
        <p>{author}</p>
      </div>
    
      <div
        className='bg-green-300 rounded-full fixed -bottom-4 -right-2 w-12 h-12 m-auto flex items-center justify-center'
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <AiFillCaretDown className='w-5 h-5' />
      </div>
      
      {dropdownOpen && (
        <select
          className='absolute -bottom-5 left-0 -ml-1 -mb-2 bg-white border border-gray-300 rounded px-2 py-1'
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value='continue reading'>Continue reading</option>
          <option value='read'>Read</option>
          <option value='wantToRead'>Want to read</option>
          <option value='none'>None</option>
        </select>
      )}
    </div>
  );
};

export default BookCard;
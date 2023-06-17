import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex items-center justify-between p-5 m-auto gap-20 border-b header'>
      <div onClick={() => navigate('/')}>
        <AiFillHome className='w-8 h-8 cursor-pointer' />
      </div>
        <form class={`flex items-center h-[40px]`}>
          <div className="w-full relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-slate-900 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                  <input
                      type="text"
                      placeholder="Search Books"
                      className="w-full py-2 pl-12 pr-4 border-none rounded-md outline-none bg-red-200"
                      name="searchValue"
                      onChange={(e) => e.target.value.trim().length > 0 && navigate('/search')}
              />

            </div>
          </form>
    </div>
  )
}

export default Header

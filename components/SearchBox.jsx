import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../utils/store'

const SearchBox = () => {
   const searchTerm = useSelector(state => state.searchTerm)
   const dispatch = useDispatch()

   const [text, setText] = useState(searchTerm)
   const [debouncedTerm, setDebouncedTerm] = useState(text);

   // update 'term' value after 1 second from the last update of 'debouncedTerm'
   useEffect(() => {
      const timer = setTimeout(() => setText(debouncedTerm), 1000);
      return () => clearTimeout(timer);
   }, [debouncedTerm])

   // submit a new search
   useEffect(() => {
      if (text !== '') {
         dispatch(actions.setSearchTerm(text));
      }
      else {
         dispatch(actions.setSearchTerm(''))
      }
   }, [dispatch, text]);

   return (
      <div className='flex justify-start mt-2 md:mt-0 w-full items-center border px-3 py-1.5 md:py-2 md:w-[16rem] border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md md:rounded-lg '>
         <input
            type='search'
            className='block p-0 w-full text-[10px] lg:text-xs text-gray-900 bg-gray-50 outline-none active:focus:outline-none'
            placeholder='Search '
            value={debouncedTerm}
            onChange={e => setDebouncedTerm(e.target.value)}
            required
         />

         <div className='flex items-center pl-3 pointer-events-none'>
            <svg
               aria-hidden='true'
               className='w-3.5 h-3.5 md:w-5 md:h-5 text-gray-500 dark:text-gray-400'
               fill='none'
               stroke='currentColor'
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
               ></path>
            </svg>
         </div>
      </div>
   );
}

export default SearchBox
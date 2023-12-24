import React from 'react'
import { BellIcon, NavUserIcon } from '../assets/icons'
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <div className='h-[60px] px-6 py-3 w-full bg-white shadow items-center justify-between overflow-hidden flex z-30 absolute top-0 left-0'>
      <h1 className='text-base text-dark-gray'>
        {
          location.pathname === "/" && ("Home")
        }
        {
          location.pathname.match(/\/companies\/?/) && ("Company Search")
        }
        {
          location.pathname.match(/\/contacts\/?/) && ("Contact Search")
        }
        {
          location.pathname.match(/\/companies\/[a-zA-Z]+/) && ("Company Details")
        }
      </h1>
      <div className='flex items-center'>
        <div  className='flex items-center gap-x-2 pr-4 border-r border-[#DEE0E6]'>
          <button className='bg-primary rounded-md px-6 py-2 text-sm text-white'>Upgrade</button>
          <div className='flex gap-x-5 px-5 py-2 bg-[#F3F3F3] rounded-sm text-sm text-primary'>
            <span className='font-bold'>55</span>
            <span>Credits Remaining</span>
          </div>
        </div>
        <div className='flex py-2 px-4 gap-x-5 items-center'>
          <button className='text-light-gray hover:text-primary'>
            <BellIcon />
          </button>
          <button className='text-light-gray hover:text-primary'>
            <NavUserIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
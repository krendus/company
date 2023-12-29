import React from 'react'
import { BellIcon, NavUserIcon } from '../assets/icons'
import { Link, useLocation } from 'react-router-dom';
import ActivityCard from './activity-card';

const Nav = () => {
  const location = useLocation();
  return (
    <div className='h-[60px] px-3 md:px-6 py-3 w-full bg-white shadow items-center justify-between flex z-30 absolute top-0 left-0'>
      <h1 className='text-base text-dark-gray'>
        {
          location.pathname === "/" && ("Home")
        }
        {
          ((location.pathname === "/companies") || (location.pathname === "/companies/"))  && ("Company Search")
        }
        {
          location.pathname.match(/\/profile\/?/) && ("Profile")
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
          <button className='bg-primary rounded-md hidden sm:flex px-3 md:px-6 py-2 text-sm text-white'>Upgrade</button>
          <div className='flex gap-x-5 px-2 md:px-5 py-2 bg-[#F3F3F3] rounded-sm text-sm text-primary'>
            <span className='font-bold'>55</span>
            <span className='hidden md:block'>Credits Remaining</span>
          </div>
        </div>
        <div className='flex px-2 gap-x-2 md:gap-x-5 items-center'>
          <div className='group flex items-center relative'>
            <button className='text-light-gray hover:text-primary p-2'>
              <BellIcon />
            </button>
            <div className='hidden group-hover:flex flex-col gap-y-5 min-h-[300px] max-h-[300px] absolute -right-14 md:right-0 top-[40px] w-[300px] md:w-[400px] p-5 rounded-lg bg-white shadow-modal z-50'>
              <ActivityCard 
                content={"Your recent notification is completed."}
                date={"Sep 04th, 2023"}
              />
              <ActivityCard 
                content={"Your recent notification is completed."}
                date={"Sep 04th, 2023"}
              />
            </div>
          </div>
          <Link to={"/profile"} className='text-light-gray hover:text-primary py-2'>
            <NavUserIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
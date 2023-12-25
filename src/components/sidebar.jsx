import React from 'react'
import logo from '../assets/solidinbox.png'
import { CompanyIcon, HomeIcon, SearchIcon, UserIcon } from '../assets/icons'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className='w-[62px] min-w-[62px] bg-white py-[20px] flex flex-col items-center shadow z-40'>
      <div>
        <img src={logo} alt="logo" className='h-[28px] w-[32px]' />
      </div>
      <div className='mt-[24px] flex flex-col items-center gap-y-4'>
        <div className={`${location.pathname === "/" && "text-primary"} group w-full flex text-light-gray size-[24px] items-center justify-center hover:text-black relative`}>
          <Link to="/">
            <HomeIcon />
          </Link>
          <div className='hidden absolute text-xs rounded-lg text-white bg-[#444] left-[35px] group-hover:block px-4 py-1'>
            <span>Home</span>
          </div>
        </div>
        <div className={`${location.pathname.includes("/companies") && "text-primary"} group w-full flex text-light-gray size-[24px] items-center justify-center hover:text-black relative`}>
          <Link to="/companies">
            <CompanyIcon />
            <span className='absolute -bottom-1 -right-1 block bg-white rounded-lg'>
              <SearchIcon />
            </span>
          </Link>
          <div className='hidden absolute w-max text-xs rounded-lg text-white bg-[#444] left-[35px] group-hover:block px-4 py-1'>
            <span>Company Search</span>
          </div>
        </div>
        <div className={`${location.pathname.includes("/contacts") && "text-primary"} group w-full flex text-light-gray size-[24px] items-center justify-center hover:text-black relative`}>
          <Link to="/contacts">
            <UserIcon />
            <span className='absolute -bottom-1 -right-1 block bg-white rounded-lg'>
              <SearchIcon />
            </span>
          </Link>
          <div className='hidden absolute w-max text-xs rounded-lg text-white bg-[#444] left-[35px] group-hover:block px-4 py-1'>
            <span>Contact Search</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
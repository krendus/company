import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'

const Dashboard = () => {
  return (
    <div className='flex min-h-dvh max-h-dvh'>
      <Sidebar />
      <div className='w-[calc(100%-62px)] min-h-dvh max-h-dvh bg-[#f6f6f6bb] relative flex flex-col'>
        <Nav />
        <div className='px-3 md:px-7 flex-1 pt-[90px] pb-8 overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
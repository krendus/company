import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'

const Dashboard = () => {
  return (
    <div className='flex min-h-dvh max-h-dvh'>
      <Sidebar />
      <div className='w-full min-h-dvh max-h-dvh overflow-y-scroll bg-[#f6f6f6bb] relative'>
        <Nav />
        <div className='p-7 h-full pt-[90px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
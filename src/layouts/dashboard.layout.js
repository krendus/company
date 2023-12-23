import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Nav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
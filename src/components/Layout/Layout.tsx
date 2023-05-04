import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import HouseList from '../HouseList/HouseList'

const Layout = () => {
  return (
    <div className='d-flex gap-2' style={{ overflowX: 'hidden' }}>
      <Sidebar />
      <HouseList />
    </div>
  )
}

export default Layout

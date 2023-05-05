import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import HouseList from '../HouseList/HouseList'
import Filter from '../Filter/Filter'
import { AnimatePresence } from 'framer-motion'

type Prop = {
  filter: boolean
  showFilter: () => void
}

const Layout = ({ filter, showFilter }: Prop) => {
  return (
    <div className='d-flex gap-2 layout'>
      <Sidebar />
      <HouseList />
      <AnimatePresence>
        {filter && <Filter showFilter={showFilter} />}
      </AnimatePresence>
    </div>
  )
}

export default Layout

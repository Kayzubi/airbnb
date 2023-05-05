import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import HouseCard from './HouseCard'
import { HouseDataTypes, housesData } from '../../houses'
import { AnimatePresence } from 'framer-motion'
import HouseDetails from '../HouseDetails/HouseDetails'

const HouseList = () => {
  const [activeHouse, setActiveHouse] = useState<HouseDataTypes | null>(null)

  const ShowHouseDetails = (house: HouseDataTypes) => {
    setActiveHouse(house)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeHouseDetails = () => {
    setActiveHouse(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className='w-100 p-4 pt-2'>
      <AnimatePresence>
        {activeHouse && (
          <HouseDetails close={closeHouseDetails} data={activeHouse} />
        )}
      </AnimatePresence>

      <Row>
        {housesData.map((item) => (
          <HouseCard
            data={item}
            key={item.id}
            showHouseDetails={ShowHouseDetails}
          />
        ))}
      </Row>
    </div>
  )
}

export default HouseList

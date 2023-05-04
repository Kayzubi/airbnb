import React from 'react'
import { Row } from 'react-bootstrap'
import HouseCard from './HouseCard'
import { housesData } from '../../houses'

const HouseList = () => {
  return (
    <div className='w-100'>
      <Row>
        {housesData.map((item) => (
          <HouseCard data={item} key={item.id} />
        ))}
      </Row>
    </div>
  )
}

export default HouseList

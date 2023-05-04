import React, { FC } from 'react'
import { Col } from 'react-bootstrap'
import { MdOutlineStar } from 'react-icons/md'
import './housecard.scss'
import { HouseDataTypes } from '../../houses'
import { numberWithCommas } from '../../utilities'
import { house2images } from '../../assets'

interface Props {
  data: HouseDataTypes
}

const HouseCard: FC<Props> = ({ data }) => {
  const { name, location, images, price_per_night, average_rating } = data

  return (
    <Col lg='3' md='6' className='p-4'>
      <div className='house-card'>
        <div className='house-card__image'>
          <img src={house2images[0]} alt='' />
        </div>
        <div className='house-card__content'>
          <h2>{name}</h2>
          <p>{location}</p>
          <div className='house-card__price'>
            <p>
              <span className='value'>
                ${numberWithCommas(price_per_night)}
              </span>
              / night
            </p>
            <span className='rating'>
              <MdOutlineStar size={20} />
              {average_rating}
              {average_rating === 5 && '.00'}
            </span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default HouseCard

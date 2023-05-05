import React, { FC, useState } from 'react'
import { Col } from 'react-bootstrap'
import { MdOutlineStar } from 'react-icons/md'
import { HiOutlineHeart } from 'react-icons/hi2'
import './housecard.scss'
import { HouseDataTypes } from '../../houses'
import { numberWithCommas } from '../../utilities'
import { house2images } from '../../assets'

interface Props {
  data: HouseDataTypes
  showHouseDetails: (house: HouseDataTypes) => void
}

const HouseCard: FC<Props> = ({ data, showHouseDetails }) => {
  const { name, location, images, price_per_night, average_rating } = data
  const [liked, setLiked] = useState(false)

  return (
    <Col lg='3' md='6' className='p-4'>
      <div className='house-card' onClick={() => showHouseDetails(data)}>
        <div
          className={`likeBtn ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(!liked)}>
          <HiOutlineHeart />
        </div>
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

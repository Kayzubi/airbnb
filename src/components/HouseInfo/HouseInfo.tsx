import React from 'react'
import {
  MdOutlineFamilyRestroom,
  MdOutlineKingBed,
  MdOutlineIosShare,
} from 'react-icons/md'
import { HiOutlineHeart } from 'react-icons/hi2'
import { GiVikingLonghouse, GiBathtub, GiMedal } from 'react-icons/gi'

type Props = {
  name: string
  location: string
  guests: number
  rooms: number
  beds: number
  baths: number
}

const HouseInfo = (props: Props) => {
  const { name, location, guests, rooms, beds, baths } = props

  return (
    <div className='house__info'>
      <span className='medal'>
        <GiMedal /> Superhost
      </span>
      <div className='house__info-buttons'>
        <button>
          <MdOutlineIosShare />
        </button>
        <button>
          <HiOutlineHeart />
        </button>
      </div>
      <h3 className='house__info-name'>{name}</h3>
      <p className='house__info-location'>{location}</p>

      <div className='house__info--features'>
        <span>
          <MdOutlineFamilyRestroom />
          <small>{guests} guests</small>
        </span>
        <span>
          <GiVikingLonghouse />
          <small>{rooms} bedrooms</small>
        </span>
        <span>
          <MdOutlineKingBed />
          <small>{beds} beds</small>
        </span>
        <span>
          <GiBathtub />
          <small>{baths} baths</small>
        </span>
      </div>
    </div>
  )
}

export default HouseInfo

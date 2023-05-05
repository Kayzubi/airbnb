import React, { FC } from 'react'
import './houseDetails.scss'
import { motion } from 'framer-motion'
import { MdClose } from 'react-icons/md'
import { HouseDataTypes } from '../../houses'
import Checkout from '../Checkout/Checkout'
import HouseInfo from '../HouseInfo/HouseInfo'
import HouseImages from '../HouseInfo/HouseImages'
import AboutHouse from '../HouseInfo/AboutHouse'
import Reviews from '../HouseInfo/Reviews'
import Location from '../HouseInfo/Location'
import Host from '../HouseInfo/Host'

interface Props {
  close: () => void
  data: HouseDataTypes
}

const HouseDetails: FC<Props> = ({ close, data }) => {
  const {
    images,
    name,
    location,
    rooms,
    beds,
    baths,
    guests,
    price_per_night,
    ratings,
    average_rating,
  } = data
  return (
    <div className='house-modal'>
      <div className='house-modal__background' onClick={close}></div>
      <motion.button
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='btn__close'
        type='button'
        onClick={close}>
        <MdClose />
      </motion.button>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        key={data.id}
        transition={{ duration: 0.5 }}
        className='house-modal__content'>
        <div className='house-details'>
          <HouseImages images={images} />
          <div className='house-details__content'>
            <Checkout price={price_per_night} rating={average_rating} />
            <div className='house-details__content--info'>
              <HouseInfo
                name={name}
                location={location}
                rooms={rooms}
                guests={guests}
                beds={beds}
                baths={baths}
              />
              <AboutHouse />
              <Reviews data={ratings} rating={average_rating} />
              <Location location={location} />
              <Host />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HouseDetails

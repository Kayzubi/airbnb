import React from 'react'
import {
  HiOutlineSquares2X2,
  HiOutlineChevronDown,
  HiOutlineCalendar,
  HiPlus,
  HiMinus,
} from 'react-icons/hi2'
import { HiOutlineFilter } from 'react-icons/hi'
import { FaRegMap } from 'react-icons/fa'
import './booking.scss'

type Prop = {
  showFilter: () => void
}

const BookingBar = ({ showFilter }: Prop) => {
  return (
    <div className='booking'>
      <div className='booking__options'>
        <span className='active'>
          <HiOutlineSquares2X2 size={20} />
        </span>
        <span>
          <FaRegMap size={20} />
        </span>
      </div>
      <div className='booking__search'>
        <div className='booking__select'>
          <p>Anywhere</p>
          <HiOutlineChevronDown className='ms-auto' />
        </div>
        <div className='booking__select'>
          <HiOutlineCalendar size={20} />
          <p>August 21-26</p>
        </div>
        <div className='booking__select'>
          <button>
            <HiMinus />
          </button>
          <p>5 guests</p>
          <button>
            <HiPlus />
          </button>
        </div>
      </div>
      <div className='booking__filter'>
        <span onClick={showFilter}>
          <HiOutlineFilter />
        </span>
      </div>
    </div>
  )
}

export default BookingBar

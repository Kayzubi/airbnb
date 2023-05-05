import React from 'react'
import { MdOutlineStar, MdOutlineInfo } from 'react-icons/md'
import { HiOutlineCalendar, HiOutlineChevronDown } from 'react-icons/hi2'
import { SlDiamond } from 'react-icons/sl'
import { numberWithCommas } from '../../utilities'

type Prop = {
  price: number
  rating: number
}

const Checkout = ({ price, rating }: Prop) => {
  const total = price * 5

  return (
    <div className='house-details__content--checkout'>
      <div className='checkout__container'>
        <div className='checkout'>
          <div className='checkout__details'>
            <div className='checkout__top'>
              <p>
                <b> ${numberWithCommas(price)}</b>/ night
              </p>
              <span>
                <MdOutlineStar size={20} />
                {rating}
                {rating === 5 && '.0'}
              </span>
            </div>
            <div className='checkout__date'>
              <div>
                <div className='form__group'>
                  <p>Check in</p>
                  <div className='form__group-input'>
                    <HiOutlineCalendar size={20} />
                    21/8/2023
                  </div>
                </div>
              </div>
              <div>
                <div className='form__group'>
                  <p>Check out</p>
                  <div className='form__group-input'>
                    <HiOutlineCalendar size={20} />
                    26/8/2023
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='form__group'>
                <p>Guests</p>
                <div className='form__group-input'>
                  1 guest
                  <HiOutlineChevronDown className='ms-auto' />
                </div>
              </div>
            </div>
            <div className='checkout__breakdown'>
              <div className='checkout__desc'>
                <p>
                  5 nights <MdOutlineInfo />
                </p>{' '}
                <span>${numberWithCommas(total)}</span>
              </div>
              <div className='checkout__desc'>
                <p>
                  Cleaning fee <MdOutlineInfo />
                </p>{' '}
                <span>$85</span>
              </div>
              <div className='checkout__desc'>
                <p>
                  Airbnb service fee <MdOutlineInfo />
                </p>{' '}
                <span>$322</span>
              </div>
            </div>
          </div>
          <div className='checkout__total'>
            <div className='total__price'>
              <span>
                <b>Total</b>
                <small>Before taxes</small>
              </span>
              <p>${numberWithCommas(total + 85 + 322)}</p>
            </div>

            <div className='checkout__button'>
              <button>Reserve</button>
            </div>
          </div>
        </div>

        <div className='gem__content'>
          <SlDiamond size={40} color='#ff385c' />
          <div>
            <h6>This is a rare find</h6>
            <p>Kathryn's place on Airbnb is usually fully booked.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

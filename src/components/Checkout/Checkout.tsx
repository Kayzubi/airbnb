import React from 'react'
import { numberWithCommas } from '../../utilities'

type Prop = {
  price: number
}

const Checkout = ({ price }: Prop) => {
  return (
    <div className='house-details__content--checkout'>
      <div>
        checkout
        <div className='breakdown'></div>
        <div className='total'>
          <div>
            <p>Total</p>
            <p>${numberWithCommas(price * 5)}</p>
          </div>

          <div>
            <button>Reserve</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

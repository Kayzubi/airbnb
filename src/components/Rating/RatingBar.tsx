import React from 'react'
import { RatingType } from '../../houses'
import './rating.scss'

type Props = {
  data: RatingType
}

const RatingBar = ({ data }: Props) => {
  const { name, rating } = data

  const average = (rating / 5) * 100

  return (
    <div className='rating'>
      <p>{name}</p>
      <div className='rating__bar-container'>
        <div className='rating__bar'>
          <span style={{ width: `${average}%` }}></span>
        </div>
        {rating}
        {rating === 5 && '.0'}
      </div>
    </div>
  )
}

export default RatingBar

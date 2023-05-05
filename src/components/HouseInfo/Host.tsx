import React from 'react'
import { MdOutlineShield, MdOutlineStar } from 'react-icons/md'
import { GiMedal } from 'react-icons/gi'
import profile from '../../assets/profile picture.jpg'

const Host = () => {
  return (
    <div className='host'>
      <h5>Host</h5>
      <div className='host__top-content'>
        <div className='review_header'>
          <div className='review_header-image'>
            <img src={profile} alt='' />
          </div>
          <div className='review_header-user'>
            <h6>Hosted by Brenda</h6>
            <small>Joined August 2014</small>
          </div>
        </div>
        <div className='host__contact'>Contact host</div>
      </div>
      <div className='host__badges'>
        <span>
          <MdOutlineStar />
          <small>2,433 Reviews</small>
        </span>
        <span>
          <MdOutlineShield />
          <small>Identity verified</small>
        </span>
        <span>
          <GiMedal />
          <small>Superhost</small>
        </span>
      </div>

      <p>
        As a mother of 4, living in Solana Beach for 25+ years, I love to help
        families enjoy our beautiful area. Vacations are special and we do our
        very best to make them affordable, enjoy…
      </p>
      <span className='more'>View more</span>
    </div>
  )
}

export default Host

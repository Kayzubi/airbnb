import React from 'react'
import { icons } from '../../assets'
import profile from '../../assets/profile picture.jpg'
import { MdOutlineMenu } from 'react-icons/md'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navigation'>
      <div className='navigation__brand'>
        <img src={icons.logo} alt='' />
      </div>
      <div className='navigation__links'>
        <span className='navigation__link active'>Stays</span>
        <span className='navigation__link'>Experiences</span>
        <span className='navigation__link'>Online Experiences</span>
      </div>
      <div className='navigation__user'>
        <img src={profile} alt='user-pic' />
      </div>
      <MdOutlineMenu size={32} className='hamburgar' />
    </div>
  )
}

export default Navbar

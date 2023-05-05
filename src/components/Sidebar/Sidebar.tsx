import React from 'react'
import { FaAirbnb } from 'react-icons/fa'
import { TbWindow } from 'react-icons/tb'
import {
  MdOutlineHomeWork,
  MdOutlineSurfing,
  MdOutlineApartment,
  MdOutlineBeachAccess,
  MdOutlineCastle,
  MdOutlinePool,
  MdOutlineDownhillSkiing,
} from 'react-icons/md'
import {
  GiCampCookingPot,
  GiTreehouse,
  GiForestCamp,
  GiFarmTractor,
  GiCastle,
  GiIsland,
  GiGrapes,
  GiCactus,
} from 'react-icons/gi'
import './sidebar.scss'

const Sidebar = () => {
  const sidebarOptions = [
    {
      title: 'All homes',
      icon: <FaAirbnb />,
    },
    {
      title: 'Amazing homes',
      icon: <TbWindow />,
    },
    {
      title: 'Tiny homes',
      icon: <MdOutlineHomeWork />,
    },
    {
      title: `Chef's kitchen`,
      icon: <GiCampCookingPot />,
    },
    {
      title: 'Surfing',
      icon: <MdOutlineSurfing />,
    },
    {
      title: 'Mansions',
      icon: <MdOutlineApartment />,
    },
    {
      title: 'Luxe',
      icon: <MdOutlineCastle />,
    },
    {
      title: 'Treehouses',
      icon: <GiTreehouse />,
    },
    {
      title: 'Camping',
      icon: <GiForestCamp />,
    },
    {
      title: 'Beachfront',
      icon: <MdOutlineBeachAccess />,
    },
    {
      title: 'Farms',
      icon: <GiFarmTractor />,
    },
    {
      title: 'Castles',
      icon: <GiCastle />,
    },
    {
      title: 'Islands',
      icon: <GiIsland />,
    },
    {
      title: 'Vineyards',
      icon: <GiGrapes />,
    },
    {
      title: 'Amazing pools',
      icon: <MdOutlinePool />,
    },
    {
      title: 'Skiing',
      icon: <MdOutlineDownhillSkiing />,
    },
    {
      title: 'Dessert',
      icon: <GiCactus />,
    },
  ]

  return (
    <div className='sidebar'>
      {sidebarOptions.map((item, index) => (
        <div
          key={index}
          className={`sidebar__item ${index === 0 ? 'active' : ''}`}>
          <span>{item.icon}</span>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Sidebar

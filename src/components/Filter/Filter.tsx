import React from 'react'
import './filter.scss'
import { motion } from 'framer-motion'

type Prop = {
  showFilter: () => void
}

const Filter = ({ showFilter }: Prop) => {
  const params = ['bedrooms', 'beds', 'bathrooms']

  return (
    <div
      className='filter-background'
      style={{
        position: 'fixed',
        height: '100vh',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: '1000',
      }}
      onClick={showFilter}>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3 }}
        className='filter'>
        <div>
          <div className='filter__header filter__section'>
            <h5>Filter</h5>
            <span> Clear all</span>
          </div>
          <div className='filter__price filter__section'>
            <h5>Price Range</h5>
            <small>The average nightly price is $133</small>
            <div className='checkout__date' style={{ marginTop: '20px' }}>
              <div>
                <div className='form__group'>
                  <p>Min Price</p>
                  <div className='form__group-input filter__input'>$50</div>
                </div>
              </div>
              <div>
                <div className='form__group'>
                  <p>Max Price</p>
                  <div className='form__group-input filter__input'>$1000+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='place-type filter__section'>
            <h5>Type of place</h5>
            <div className='place-type__item'>
              <span></span>
              <div>
                <p>Entire Place</p>
                <small>A place all to yourself</small>
              </div>
            </div>
            <div className='place-type__item'>
              <span></span>
              <div>
                <p>Private room</p>
                <small>
                  Your own room in a home or a hotel, plus some shared common
                  spaces.
                </small>
              </div>
            </div>
            <div className='place-type__item'>
              <span></span>
              <div>
                <p> Shared room </p>
                <small>
                  A sleeping space and common areas that may be shared with
                  others.
                </small>
              </div>
            </div>
          </div>
          <div className='place-options filter__section'>
            <h5>Bedrooms, Beds, Bath</h5>
            {params.map((item) => (
              <div className='place-option__item' key={item}>
                <p>{item}</p>
                <span className='active'>Any</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5+</span>
              </div>
            ))}
          </div>
        </div>
        <div className='filter__button'>
          <button disabled>Show 350 Homes</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Filter

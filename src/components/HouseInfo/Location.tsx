import React from 'react'
type Props = {
  location: string
}

const Location = ({ location }: Props) => {
  return (
    <div className='location'>
      <h5>Where you'll be</h5>
      <div className='mapouter'>
        <div className='gmap_canvas'>
          <iframe
            title='maps'
            width='100%'
            height='100%'
            id='gmap_canvas'
            src={`https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
        </div>
      </div>
      <div className='location__about'>
        <h6>{location}</h6>
        <p>
          The property, given its close proximity to the refreshing hillside
          town of Tagaytay and clear blue beaches of Nasugbu, provides a quick
          escape from the hustle and bustle of city life.
        </p>
      </div>
      <span className='more'>View more</span>
    </div>
  )
}

export default Location

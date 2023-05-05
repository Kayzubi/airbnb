import React from 'react'
import { Row, Col } from 'react-bootstrap'

type Prop = {
  images: string[]
}

const HouseImages = ({ images }: Prop) => {
  return (
    <Row className='house-details__images'>
      <Col lg='7' md='8' className='house-details__image'>
        <div className='house-details__image--1'>
          <img src={images[0]} alt='' />
          <span>View all photos</span>
        </div>
      </Col>
      <Col
        lg='5'
        md='4'
        className='house-details__image d-flex flex-column justify-content-between gap-4 mobile-hidden'>
        <div className='house-details__image--2'>
          <img src={images[1]} alt='' />
        </div>
        <div className='house-details__image--3'>
          <img src={images[2]} alt='' />
        </div>
      </Col>
    </Row>
  )
}

export default HouseImages

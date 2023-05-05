import React from 'react'
import { MdOutlineStar } from 'react-icons/md'
import { RatingType, reviews } from '../../houses'
import RatingBar from '../Rating/RatingBar'
import { Row, Col } from 'react-bootstrap'

type Prop = {
  data: RatingType[]
  rating: number
}

const Reviews = ({ data, rating }: Prop) => {
  return (
    <div className='reviews'>
      <div className='reviews__top-content'>
        <h5>Reviews</h5>
        <span>
          <MdOutlineStar size={20} />
          {rating}
          {rating === 5 && '.0'} - 124 reviews
        </span>
      </div>
      <div className='reviews__ratings'>
        {data.map((item) => (
          <RatingBar data={item} key={item.name} />
        ))}
      </div>
      <Row>
        {reviews.map((item, index) => (
          <Col lg='6' key={index}>
            <div className='user_reviews'>
              <div>
                <div className='review_header'>
                  <div className='review_header-image'>
                    <img src={item.image} alt='' />
                  </div>
                  <div className='review_header-user'>
                    <h6>{item.user}</h6>
                    <small>{item.date}</small>
                  </div>
                </div>
              </div>
              <p>{item.message}</p>
            </div>
          </Col>
        ))}
        <span className='more'>View more</span>
      </Row>
    </div>
  )
}

export default Reviews

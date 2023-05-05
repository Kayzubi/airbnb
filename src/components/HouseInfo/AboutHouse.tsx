import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {
  MdDesk,
  MdCalendarMonth,
  MdMobileFriendly,
  MdWifi,
  MdOutlineKitchen,
  MdOutlineHeatPump,
} from 'react-icons/md'
import { GiWashingMachine } from 'react-icons/gi'
import { TbAirConditioning } from 'react-icons/tb'

const AboutHouse = () => {
  const features = [
    {
      title: 'Dedicated workspace',
      icon: <MdDesk />,
      desc: 'A private room with wifi that’s well-suited for working.',
    },
    {
      title: 'Self check-in',
      icon: <MdCalendarMonth />,
      desc: 'Check yourself in with the keypad.',
    },
    {
      title: 'Free cancellation before Aug 20',
      icon: <MdMobileFriendly />,
      desc: 'A private room with wifi that’s well-suited for working.',
    },
  ]

  const offers = [
    {
      name: 'Dedicated Workspace',
      icon: <MdDesk />,
    },
    {
      name: 'Wifi',
      icon: <MdWifi />,
    },
    {
      name: 'Kitchen',
      icon: <MdOutlineKitchen />,
    },
    {
      name: 'Heater',
      icon: <MdOutlineHeatPump />,
    },
    {
      name: 'Washing machine',
      icon: <GiWashingMachine />,
    },
    {
      name: 'Air Conditioning',
      icon: <TbAirConditioning />,
    },
  ]

  return (
    <div className='about'>
      <div className='about__section'>
        <Row>
          {features.map((item, index) => (
            <Col lg='4' key={index}>
              <div className='feature-box'>
                <span className='feature-box__icon'>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className='about__section'>
        <div className='about-box'>
          <h5>About this house</h5>
          <p>
            Enjoy a quiet getaway in this charming cottage renovated, designed,
            and owned by Chip and Joanna Gaines. Originally the carriage house
            for Hillcrest Estate, this home includes one bedroom, one bath, an
            office nook and a private back patio. This makes it the perfect
            getaway for a party of two, or if you’re stopping through town and
            need a restful place to retreat.
          </p>
        </div>
        <div className='about-box'>
          <h6>The space</h6>
          <p>
            An open living, dining, and kitchen area provide ample room in this
            cozy cottage. French double doors lead you out to the back patio to
            enjoy your own private outdoor space. A dedicated, covered parking
            spot for your use. The parking lot is shared with Hillcrest Estate
            guests.
          </p>
        </div>
        <span className='more'>Read more</span>
      </div>
      <div className='about__section'>
        <h5>What this place offers</h5>
        <Row>
          {offers.map((item, index) => (
            <Col lg='4' key={index}>
              <div className='offer-box'>
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </div>
            </Col>
          ))}
        </Row>
        <span className='more'>View more</span>
      </div>
    </div>
  )
}

export default AboutHouse

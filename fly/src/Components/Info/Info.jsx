import React from 'react'


//import icons

import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'
import { RxCalendar } from 'react-icons/rx'

export const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">


        <div className="titleDiv flex">
          <h2>Travel to make memories around the world</h2>
          <button className='btn'>
            View All
          </button>
        </div>
        
        <div className="cardsDiv grid">

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardTitle">Book and Relax</span>
            <p>You can also call airlines from your Phones and book a flight
              ticket!
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTitle ">Smart checklist</span>
            <p>You can also call airlines from your Phones and book a flight
              ticket!
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="cardTitle ">Save more</span>
            <p>You can also call airlines from your Phones and book a flight
              ticket!
            </p>
          </div>

        </div>
      
      </div>
    </div>
  )
}


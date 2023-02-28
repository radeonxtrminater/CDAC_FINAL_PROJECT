import React from 'react'

//imported images

import imageGrid from '../../assets/grid-image.png'

export const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        
          <div className="imgDiv">
            <img src={imageGrid} alt="" />
          </div>

          <div className="textDiv">
            <h2>Unaccompanied Minor Lounge</h2>
          </div>

          <div className="grids grid">
         
            <div className="singleGrid">
              <span className='gridTitle'>
                   Help through the airport.
              </span>
              <p>
              You can also call airlines from your Phones and book a flight
              ticket!
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                   Priority Borading
              </span>
              <p>
              You can also call airlines from your Phones and book a flight
              ticket!
              </p>
            </div>
            
            <div className="singleGrid">
              <span className='gridTitle'>
                  Care on the flight
              </span>
              <p>
              You can also call airlines from your Phones and book a flight
              ticket!
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                   Chauffer drive service
              </span>
              <p>
              You can also call airlines from your Phones and book a flight
              ticket!
              </p>
            </div>

          </div>



      </div>
    </div>
  )
}

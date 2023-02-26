import React from 'react'

//imported images

import gridImage from '../../assets/grid-image.png'

export const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>We are here for you.</h2>
          <p>Find help with booking and Travel plans,see what
            to expect in your journey!</p>
            </div>

            <div className="infoDiv grid">


              <div className="textDiv grid">

                <div className="singleInfo">
                  <span className='number'>01</span>
                  <h4>Travel requirements</h4>
                  <p>Find help with booking and travel plans, see what to expect
                    along the journey to your destinations!
                  </p>
                </div>

                <div className="singleInfo">
                  <span className='number colorTwo'>02</span>
                  <h4>Chauffer services at your arrival</h4>
                  <p>Find help with booking and travel plans, see what to expect
                    along the journey to your destinations!
                  </p>
                </div>

                <div className="singleInfo">
                  <span className='number colorOne'>03</span>
                  <h4>Multi-risk travel insurance</h4>
                  <p>Find help with booking and travel plans, see what to expect
                    along the journey to your destinations!
                  </p>
                </div>

              </div>


              <div className="imgDiv">
                <img src={gridImage} />
              </div>
            </div>
      </div>
    </div>
  )
}

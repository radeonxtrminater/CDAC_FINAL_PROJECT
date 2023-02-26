import React from 'react'

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleFill} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

export const Search = () => {
  return (
    <div className="search container section">
      <div className="sectionContainer grid">

        <div className="btns flex">
          
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          
          <div className="singleBtn">
            <span>Business class</span>
          </div>
          
          <div className="singleBtn">
            <span>First class</span>
          </div>
        </div>



          <div className="searchInputs flex">
            {/*single input*/}
            <div className="singleInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className='icon'/>
              </div>
              <div className="texts">
                <h4>Location</h4>
                  <input type="text" placeholder='where do you want to go?' />
            </div>
          </div>

          {/*single input*/}
          <div className="singleInput flex">
              <div className="iconDiv">
                <RiAccountPinCircleFill className='icon'/>
              </div>
              <div className="texts">
                <h4>Travelers</h4>
                  <input type="text" placeholder='Add companions' />
            </div>
          </div>

          {/*single input*/}
          <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className='icon'/>
              </div>
              <div className="texts">
                <h4>Check in</h4>
                  <input type="text" placeholder='Add date' />
            </div>
          </div>

           {/*single input*/}
           <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className='icon'/>
              </div>
              <div className="texts">
                <h4>Check Out</h4>
                  <input type="text" placeholder='Add date' />
            </div>
          </div>

          <button className='btn btnBlock flex'>Search Flight</button>
        </div>
      </div>

    </div>
  )
}

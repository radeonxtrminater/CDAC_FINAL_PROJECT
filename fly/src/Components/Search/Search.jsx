import React,{useEffect} from 'react'

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleFill} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

//import AOS 

import Aos from 'aos'
import 'aos/dist/aos.css'


export const Search = () => {


  //Effects to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <div className="search container section">
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">

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



          <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
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

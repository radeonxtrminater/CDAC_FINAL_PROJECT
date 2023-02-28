import React,{useEffect} from 'react'

//import assets
import video from '../../assets/aerial-18390.mp4'
import aeroplane from '../../assets/Takeoff.png'

//import AOS 

import Aos from 'aos'
import 'aos/dist/aos.css'

export const Home = () => {

  //Effects to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting
         Memories with us</h1>
      </div>
      <div className="homeImages flex">

        <div className="videoDev">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={aeroplane} className='plane' />
      </div>
    </div>
  )
}

import React from 'react'

//import assets
import video from '../../assets/aerial-18390.mp4'
import aeroplane from '../../assets/Takeoff.png'

export const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Memories with us</h1>
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

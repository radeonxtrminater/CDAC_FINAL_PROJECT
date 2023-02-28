import React from 'react'

export const Subscribe = () => {
  return (
    <div className="subscribe section">
        <div className="sectionContainer container">
            <h2>Subscribe newsletters & get Latest News</h2>
            <div className="inputDiv flex">
                <input type="text" placeholder='Enter your Email Address' />
                <button className='btn'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

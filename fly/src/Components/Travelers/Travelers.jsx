import React from 'react'

//import images
import delhi from '../../assets/Delhi.jpg'
import paris from '../../assets/paris.jpg'
import france from '../../assets/france.jpg'
import austria from '../../assets/austria.jpg'
import traveler1 from '../../assets/user (1).jpg'
import traveler4 from '../../assets/user (4).jpg'
import traveler3 from '../../assets/user (3).jpg'
import traveler2 from '../../assets/user (2).jpg'

const travelers= [

  {
    id:1,
    destinationImage:paris,
    travelerImage:traveler1,
    travelerName:'Yogi ji',
    socialLink:'@yogiji'
  },
  {
    id:2,
    destinationImage:france,
    travelerImage:traveler4,
    travelerName:'Napoleon',
    socialLink:'@Oui'
  },
  {
    id:3,
    destinationImage:austria,
    travelerImage:traveler3,
    travelerName:'Adolf',
    socialLink:'@Postman'
  },
  {
    id:4,
    destinationImage:delhi,
    travelerImage:traveler2,
    travelerName:'Narendra Modi',
    socialLink:'@Chai'
  },

]


export const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>
          Top Travelers of this month!
        </h2>

        <div className="travelersContainer grid">
      

          {
            //    {/* single passenger card */}
            travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
              return(
                <div key={id} className="singleTraveler">

            <img src={destinationImage} className='destinationImage'/>

            <div className="travelersDetails">
              <div className="travelerPicture">
                <img src={travelerImage} className='travelerImage'/>
              </div>
              <div  className="travelerName">
                <span>{travelerName}</span>
                <p>{socialLink}</p>
              </div>
            </div>


          </div>
              )
            })
          }


        </div>
      </div>

    </div>
  )
}

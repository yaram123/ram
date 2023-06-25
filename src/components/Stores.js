import React from 'react'
import Rectangle  from './Rectangle.png'
import Frame from './Frame.png'
import Vector from './Vector.png'
import hm from './hm.png'
import white from './white.png'
import Feeds from './Feeds'





function Stores() {
  return (
    <div className='black'>
    <div className='main1'>
    <img src={Rectangle}/>
    <div className='main-a'><p>Aashna Shroff</p></div>
    <div className='main-b'><p>@Odette</p></div>
    <div className='main-c'><p>12k Followers</p></div>
    <div className='main-d'><p>12 Collections</p></div>
    <div className='main-e'><img src={Frame}></img></div>
    </div>
    <div className='main2'>
      <p>Check out Aashna Shroff's top pic for Myntra's Beauty Sale !</p>
      </div>
      <div className='hm'><img src={Vector}></img></div>
      <div className='brand'><img src={hm}></img></div>
      <div className='cont'><p>BRIGHTER THAN EVER</p></div>
      <div className='white'><img src={white}></img></div>
      <div className='cont1'><p>Get 20% off on your first order</p></div>
      <div className='cont2'><p>Use code FIRST20 to get 10% off </p></div>
      <div className='feeds'>
        <p> Feeds</p>
        </div>
      <div className='collections'>
        <p> Collections</p>
        </div>
       
     <Feeds/>
      
    </div>
    
  )
}

export default Stores
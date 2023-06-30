import React from 'react'
import Frame2 from './Frame2.png'
import Rectangle4 from './Rectangle4.png'
import Product from './Product.png'
import Frame3 from './Frame3.png'
import Frame4 from './Frame4.png'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { useState } from 'react'


function Feeds() {
  const [openmodal,setopenmodal] = useState(false)

  return (
    <div>
         <div className='main3'>
          <div className='main21'><img src={Frame2}></img></div>
          <div className='main22'><img src={Rectangle4}></img></div>
          <div className='scrool'><div className='main23'><img src={Product} onClick={()=>{setopenmodal(true)}} ></img></div>
          <div className='main24'><img src={Product}></img></div></div>
          <div className='main25'><p className='likes'>12 Likes</p></div>
          <div className='main26'><p>I create fashion content and express myself through my dressing style. I create fashion content and express myself through my dressing style express   See More</p></div>
          <div className='main27'>
            <input type='text' placeholder='Your Comment here'></input>
            <button>Post</button>
          </div>
       </div>

       <div className='main4'>
          <div className='main21'><img src={Frame2}></img></div>
          <div className='main22'><img src={Rectangle4}></img></div>
          <div className='scrool'><div className='main23'><img src={Product}></img></div>
          <div className='main24'><img src={Product}></img></div></div>
          <div className='main25'><p className='likes'>12 Likes</p></div>
          <div className='main26'><p>I create fashion content and express myself through my dressing style. I create fashion content and express myself through my dressing style express   See More</p></div>
          <div className='main27'><input type='text' placeholder='Your Comment here'></input>
            <button>Post</button></div>
       </div>
        
        {openmodal && <Modal modal={setopenmodal}/>}
      
    </div>
  )
}

export default Feeds
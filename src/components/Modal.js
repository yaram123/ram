import React from 'react'
import ProductImage from './ProductImage.png'
import Frame19065 from './Frame19065.png'
import Frame19072 from './Frame19072.png'
import Frame19073 from './Frame19073.png'
import Frame19163 from './Frame19163.png'
import Frame19077 from './Frame19077.png'
import Frame18975 from './Frame18975.png'





function Modal() {
  return (
    <div className='new'>
        <div className='img1'><img src={ProductImage}></img></div>
        <div className='img2'><img src={Frame19065}></img></div>
        <div className='img3'><img src={Frame19072}></img></div>
        <div className='img4'><img src={Frame19073}></img></div>
        <div className='img5'><img src={Frame19163}></img></div>
        <div className='img6'><img src={Frame19077}></img></div>
        <div className='img7'><img src={Frame18975}></img></div>

        


    </div>
  )
}

export default Modal
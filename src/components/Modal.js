import React from "react";
import ProductImage from "./ProductImage.png";
import Frame19065 from "./Frame19065.png";
import Frame19072 from "./Frame19072.png";
import Frame19073 from "./Frame19073.png";
import Frame19163 from "./Frame19163.png";
import Frame19077 from "./Frame19077.png";
import Frame18975 from "./Frame18975.png";
import Vector2 from "./Vector2.png";
import "./Modal.css";
import { useState } from "react";


function Modal({ modal }) {
    const [quantity,setquantity] = useState(1)
    const [active,setactive] = useState()
    const [highlight,sethighlight] = useState()

    const handleclick = (e) => {
        setactive(e.target.id)
    }

    const handlehighlight = (e) => {
        sethighlight(e.target.id)
        console.log("iam ok");
    }

    const handleDecrement = () => {
        if(quantity > 1){
            setquantity(prevCount => prevCount - 1)
        }
        
    }
    const handleIncrement = () => {
        setquantity(prevCount => prevCount + 1)
    }

  return (
    <div className="modal">
      <div className="img1">
        <img src={ProductImage}></img>
      </div>
      <div className="button">
        <img
          src={Vector2}
          onClick={() => {
            modal(false);
          }}
        ></img>
      </div>
      <div className="second">
        {" "}
        <div className="align-text">
        <p className="img2"> $567</p>
        <p className="img3">$678</p>
        </div>
        
        <p className="img4">67% off</p>
    
          <p className="img5">Special Price For you*</p>

      </div>
      <div className=""><p className="img6">Mast and Harbour and Tan Brown Solid and Tan Brown Solid Harbour and Tan Brown Solid and Tan Brown Solid </p></div>
      <div className=""><p className="img7">100% Cotton. Available in plain or floral print. Straight design. Mao neckline. Long sleeve. Button fastening on the front section... Read more</p></div>
      <div className=""><p className="img8">Quality</p></div>
      <div className="quality">
        <button onClick={handleDecrement}>-</button>
        <p>{quantity}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p className="size">Size</p>
      <div className="sizebutton">
        <button onClick={handleclick} className={active === "1" ? "active" : undefined} id={"1"}>XS</button>
        <button onClick={handleclick} className={active === "2" ? "active" : undefined} id={"2"}>S</button>
        <button onClick={handleclick} className={active === "3" ? "active" : undefined} id={"3"}>M</button>
        <button onClick={handleclick} className={active === "4" ? "active" : undefined} id={"4"}>L</button>

      </div>
      <p className="color">Color</p>
      <div className="colorbutton">
       <div  >
         <div onClick={handlehighlight} className={highlight === "1" ? "highlight" : undefined} id={"1"} >
        <button className="color1button"></button>
        <p className="color1p">Orange</p>
         </div>
       </div>
     <div >
       <div onClick={handlehighlight} className={highlight === "2" ? "highlight" : undefined} id={"2"} >
        <button className="color2button"></button>
        <p className="color2p">Yellow</p>
       </div>
      </div>
      <div >
        <div onClick={handlehighlight} className={highlight === "3" ? "highlight" : undefined} id={"3"}>
        <button className="color3button"></button>
        <p className="color3p">Sea Green</p>
        </div>
      </div>
      <div >
        <div onClick={handlehighlight} className={highlight === "4" ? "highlight" : undefined} id={"4"}>
        <button className="color4button"></button>
        <p className="color4p">Blue</p>
        </div>
      </div>
      <div >
        <div  onClick={handlehighlight} className={highlight === "5" ? "highlight" : undefined} id={"5"}>
        <button className="color5button"></button>
        <p className="color5p">white</p>
        </div>
      </div>
      <div > 
       <div onClick={handlehighlight} className={highlight === "6" ? "highlight" : undefined} id={"6"} >
        <button className="color6button"></button>
        <p className="color6p">Gold</p>
       </div>
      </div>
      </div>
      <div className='add'><img src={Frame19077}></img></div>
        <div className='buynow'><img src={Frame18975}></img></div>
      
    </div>
  );
}

export default Modal;

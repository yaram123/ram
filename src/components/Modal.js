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

function Modal({ modal }) {
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
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
      <p className="size">Size</p>
      <div className="sizebutton">
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>

      </div>
      <p className="color">Color</p>
      <div className="colorbutton">
        <button className="orange"></button>
        
        <button className="yellow"></button>
        
        <button className="seagreen"></button>
        
        <button className="blue"></button>
        
        <button className="white"></button>
       
        <button className="gold"></button>
        
      </div>
      <div className="colorpara">
      <p>Orange</p>
      <p>Yellow</p>
      <p>Seagreen</p>
      <p>Blue</p>
      <p>White</p>
      <p>Gold</p>
      </div>
      <div className='add'><img src={Frame19077}></img></div>
        <div className='buynow'><img src={Frame18975}></img></div>
      
    </div>
  );
}

export default Modal;

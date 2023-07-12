import React from 'react'
import Vector2 from "./Vector2.png";

function Comments({comments,data}) {
    console.log(data,"ss");
  return (
    <div className='commentbox'>
       <img src={Vector2} onClick={() => {
            comments(false);
          }}></img>
           
         {data.length>0?data.map((item)=><div className='comments'>
            {item.command}
          </div>):<p>NO coments</p>}
    </div>
  )
}

export default Comments
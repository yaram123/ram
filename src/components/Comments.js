import React from 'react'
import Vector2 from "./Vector2.png";

function Comments({comments,data}) {
    console.log(data,"ss");
  return (
    <div className='commentbox'>
       <img src={Vector2} onClick={() => {
            comments(false);
          }}></img>

         {data.map((item)=><div className='comments'>
            {item.command}


          </div>)}
    </div>
  )
}

export default Comments
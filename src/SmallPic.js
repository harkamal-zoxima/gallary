import React, { useState } from 'react'
import main1 from "./Assets/main1.jpeg";

function SmallPic({imagee}) {

    const [bigImage,setBigImage] = useState(main1)
    return (
        <div>
            <img onClick={()=>setBigImage(imagee)} className="smallImg" src={imagee}></img>
        </div>
    )
}

export default SmallPic

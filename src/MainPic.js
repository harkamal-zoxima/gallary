import React from 'react'
import './App.css'

function MainPic({image}) {
    return (
        <div>
            <img className="largeImg" src={image}  alt="No pic" ></img>
        </div>
    )
}

export default MainPic

import "./App.css";
import MainPic from './MainPic'
import main1 from "./Assets/main1.jpeg";
import main2 from "./Assets/main2.jpeg";
import main3 from "./Assets/main3.jpeg";
import main4 from "./Assets/main4.jpeg";
import { useState } from "react";

function App(props) {

  const [bigImage,setBigImage] = useState(main1)
  const [firstSmall,setFirstSmall] = useState(main3)
  const [secondSmall,setSecondSmall] = useState(main2)
  const [thirdSmall,setThirdSmall] = useState(main4)

  const swapImage = (id)=>{
     id && id===1?setBigImage(main3) :id===2?setBigImage(main2):id===3?setBigImage(main4):setBigImage(main1)
  }

  return (
    <div className="App">
      <div className="upper">
        <div className="upperLeft">
          <img onClick={()=>swapImage(1)} className="smallImg" src={firstSmall}></img>
          <img onClick={()=>swapImage(2)} className="smallImg" src={secondSmall}></img>
          <img onClick={()=>swapImage(3)} className="smallImg" src={thirdSmall}></img>
        </div>
        <div className="upperRight">
          <MainPic image={bigImage} />
        </div>
      </div>

      <div className="bottomDiv">
        <div className="bottomLeftDiv">
          <h4>New Apple iPhone 12 Pro Max (128GB) - Pacific Blue</h4>
        </div>
        <div className="priceDiv">
          <h3>Buy Now <br />$1599</h3>
        </div>
      </div>
    </div>
  );
}

export default App;

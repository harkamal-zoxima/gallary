import "./App.css";
import MainPic from './MainPic'
import main1 from "./Assets/main1.jpeg";
import main2 from "./Assets/main2.jpeg";
import main3 from "./Assets/main3.jpeg";
import main4 from "./Assets/main4.jpeg";
import { useState } from "react";

function App() {
  const [images,setImages] = useState([main1,main2,main4])
  const [bigImage,setBigImage] = useState(main1)

  const swapImage = (id)=>{
     if(id===0){
      setBigImage(main1)
     }else if(id===1){
      setBigImage(main2)
     }else if(id===2){
      setBigImage(main4)
     }
  }

  return (
    <div className="App">
      <div className="upper">
        <div className="upperLeft">
          {images.map((item, index)=><img onClick={()=>swapImage(index)} className="smallImg" src={item} />)}
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


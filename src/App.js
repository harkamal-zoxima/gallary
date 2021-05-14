import "./App.css";
import main1 from "./Assets/main1.jpeg";
import main2 from "./Assets/main2.jpeg";
import main3 from "./Assets/main3.jpeg";
import main4 from "./Assets/main4.jpeg";
import { useEffect, useState } from "react";
import Conditions from './Conditions'

function App() {
  const [images, setImages] = useState([main1, main2, main4]);
  const [bigImage, setBigImage] = useState(main1);
  const [isOpen, setIsOpen] = useState(false);
  const [percentage, setPercentage] = useState(0)

  const swapImage = (id) => {
    switch (id) {
      case 0:
        setIsOpen(true)
        setBigImage(main1);
        break;
      case 1:
        setIsOpen(true)
        setBigImage(main2);
        break;
      case 2:
        setIsOpen(true)
        setBigImage(main4);
        break;

      default:
        break;
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(percentage+1)
    }, 50);
    return () => clearInterval(interval);
  }, [percentage])


  return (
    <div className="App">
      <div className="upper">
        <div className="upperLeft">
          {images.map((item, index) => (<img onClick={() => swapImage(index)} className="smallImg" src={item} /> ))}
        </div>
        <div className="upperRight">
          <img className="largeImg" src={bigImage} alt="No pic"></img>
        </div>
      </div>

      <div className="bottomDiv">
        <div className="bottomLeftDiv">
          <h4>New Apple iPhone 12 Pro Max (128GB) - Pacific Blue</h4>
        </div>
        <div  className="priceDiv">
          <h3>
            Buy Now <br />
            $1599
          </h3>
        </div>
        
      </div>
      <Conditions open={isOpen} onClose={() => setIsOpen(false)} percentage={percentage}/>
    </div>
    
  );
}

export default App;

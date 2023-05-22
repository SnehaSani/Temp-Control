import React,{ useState } from 'react';
import './App.css';

const App = () => {
  const [temperatureValue,setTemperatureValue] = useState(10);
  const [temperatureColor,setTemperatureColor] = useState('cold');
  
  const tempIncrease = () => {
    const newTemperature=temperatureValue+1;
    if(newTemperature>=15){
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTemperature);
  }
  
  const tempDecrease = () => {
    const newTemperature=temperatureValue-1;
    if(newTemperature<15){
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemperature);
  }

  return(
      <div className="temp_box">
        <div className={`temp_circle ${temperatureColor}`}>{temperatureValue} oC</div>
        <div className="button_container">
          <button onClick={() => tempDecrease() }>-</button>
          <button onClick={() => tempIncrease() }>+</button>
        </div>
      </div>
  )
}

export default App;

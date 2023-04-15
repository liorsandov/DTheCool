import React from "react";
import Picture1 from './assets/Picture1.png';
import Picture2 from './assets/Picture2.png';
import Picture3 from './assets/Picture3.png';
import Picture4 from './assets/Picture4.jpg';
import Picture5 from './assets/Picture5.png';
import Picture6 from './assets/Picture6.png';
import Picture7 from './assets/Picture7.png';
import Picture8 from './assets/Picture8.png';
import BasicSelect from '../src/components/Select/Select'
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <div className="top-images">
        <img src={Picture1}></img>
        <img src={Picture2}></img>
      </div>
      <div className="main-content">
        <BasicSelect />
      </div>
      <div className="bottom-images">
        <img src={Picture3}></img>
        <img src={Picture4}></img>
        <img src={Picture5}></img>
        <img src={Picture6}></img>
        <img src={Picture7}></img>
        <img src={Picture8}></img>
      </div>
    </div>
  );
};

export default App;

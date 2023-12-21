import React from "react";
import { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Instructions } from "../components/Instructions";
import profileFrame from '../components/Images/profileFrame.png';


export const GamePage = () => {
  const [elementPos, setElementPos] = useState({ x: 0, y: 0});
  const bindElementPos= useDrag((params) => {
setElementPos({
x:params.offset[0],
y:params.offset[1],
  });
});
  return ( 
  <div style={{marginTop: "25px"}}>
    <div {...bindElementPos()} style={{
        position: 'relative',
        top: elementPos.y,
        left: elementPos.x,
        touchAction: 'none',
      }}>
         <img className="profileFrame" src={profileFrame}/>
      </div>

    <Instructions/>
   
  </div>
)};

export default GamePage;




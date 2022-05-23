import React from 'react';
import bg from "../../assests/bg.png";
import WAttitude from "../../assests/WAttitude.png";
import Circle from "../../assests/Circle.png";
import Group26 from "../../assests/Group26.png";
import welcome from "../../assests/welcome.png";
import Group25 from "../../assests/Group25.png";
import WebLoginComponent from "../../assests/WebLoginComponent .png";
import Rectangle32 from "../../assests/Rectangle32.png";
import Spiral from "../../assests/Spiral.png";
import wel from "../../assests/wel.svg";
import weblogcom from "../../assests/weblogcom.svg"
import carbon_idea from "../../assests/carbon_idea.png";
import Rectangle31 from "../../assests/Rectangle31.png";

export const FirstSec = () => {
  const backgroundImageStyle ={
    backgroundImage: `url("${weblogcom}")`,
    backgroudSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",


  }
  return (
    <div className="w-screen h-1/2 sm:w-1/2  sm:h-full sm:bg-cover object-cover flex bg-blue-800 justify-center items-center relative overflow-hidden " style={backgroundImageStyle}>
    
        <img src={WAttitude} className="absolute w-40 top-10 left-16" />
        <img src={Circle} className="absolute -top-32  left-2/3 rotate-2 z-1 " />
        <img src={Group26} style={{right: "20vw"}} className="absolute top-7" />
        <div className='flex flex-col w-1/2 justify-center gap-y-4 items-center h-2/3'>
          <img src={Group25} className="w-1/2"/>
          <img src={wel} className="w-full"/>
          <button className='text-xs leading-6 w-24 text-white rounded-md border-blue-500 border-2'>Learn More</button>
        </div>
        <img src={Rectangle32} className="absolute bottom-32 left-36" />
        <img src={Rectangle32} className="absolute bottom-20	right-14" />
        <img src={Spiral} className="absolute -bottom-2	-left-10 w-48 -rotate-12" />
        <img src={Rectangle31} className="absolute bottom-40 right-10" />
       <div  className="absolute bottom-14 left-44 flex flex-row gap-x-4">
        <img src={carbon_idea}/>
        <span className='text-white'>Turn your Ideas into Reality</span>
       </div>
    
    </div>
  )
}
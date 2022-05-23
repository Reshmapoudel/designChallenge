import React from 'react';
import { FirstSec } from './components/firstsection/FirstSec';
import { Weblogin } from './components/weblogin/Weblogin';


export const App = () => {
  return (
    <div className='flex-col flex  sm:flex-row h-screen w-screen'>
      <FirstSec />
      <Weblogin />   
       </div>
  )
};
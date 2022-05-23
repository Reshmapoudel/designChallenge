import React from 'react'
import './weblogin.css';
import { IoCaretBackOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from 'react';

import stack from '../../assests/stack.png'
import { Form } from './Form';
import { Links } from './Links';


export const Weblogin = () => {
  
  const [type, setType] = useState('password');
  const[icon, setIcon] = useState(eye);
  const[values, setValues] = React.useState({
    firstname:"",
    lastname:"",
    business:"",
    passeord:"",
    confirmpassword:"",
  });
  const handleSubmit =(e) =>{
    e.preventDefault();
 
  }

  const handleToggle =() =>{
    if(type=== 'password'){
      setIcon(eye);
      setType('text');

    }else{
      setIcon(eyeOff);
      setType('password');
    }
  }


 
  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  };
  console.log(values);

 

  return (
    <div className='flex flex-1 flex-col h-1/2  sm:h-screen sm:justify-center sm:px-10 overflow-auto  '>
      <div className=' mt-12 flex flex-col items-center px-5'>

        <div className='flex flex-col'>
          <div className='flex flex-row '>
            <button className='flex flex-row items-center pl-4 pr-4 mr-10 h-[3rem] w-[6rem] sm:h-[2.25rem] border-solid border-2 border-indigo-100 rounded-md' >
              <IoCaretBackOutline />back
            </button>
            <div className='flex flex-row items-center '>
              <img src={stack} className="w-11 h-9 mr-2" />
              <h1 className='font-bold text-xl'> Design Challenge</h1>
            </div>

          </div>
          <h1 className='font-bold text-2xl text-left mt-6'>
            Create an Account
          </h1>
        </div>

        <div className='flex flex-col  border-indigo-600 mt-2 text-left w-96 lg:max-w-xl'>
          <div>Please enter your regestired email address so we can send you a link to to reset your password.</div>

          <form onSubmit={handleSubmit}>
            
            <Form
              id='1'
              name='firstname'
              value={values.firstname}
              // value={clear}
              errorMessage="Please Enter your first name"
              type='text'
              placeholder='Enter Your First Name'
              label='First Name'
              onChange={onChange}
              icon={<GrFormClose className='absolute content-center right-0 mr-4 w-4 h-5 bg-zinc-100 rounded-lg'  onClick=''/>}
            // onChanged={handlechange}
            // setFirstName={setFirstName}
            />
            <Form 
            id='2' 
            name='lastname' 
            type='text'
            value={values.lastname} 
            onChange={onChange}
            errorMessage="Please Enter your Last name"
            placeholder='Enter Your Last Name' label='Last Name' />


            <Form id='3' 
            name='businessname' 
            type='text'
            onChange={onChange}
            value={values.business} 
            placeholder='Enter Your Business Name' 
            errorMessage="Please Enter your Business name"
            label='Business Name' />

            <Form id='4' 
            name='password'    
            type={type}            
            onChange={onChange}
            value={values.password} 
            placeholder='******'
            label='Password' 
            errorMessage="Password should be at least 5 character"
            icon={<Icon icon={icon} className='absolute content-center right-0 mr-4 w-4 bg-zinc-100 rounded-lg' onClick={handleToggle}/>} />
            {/* icon={<Icon icon={eyeOff}/>} */}
            <Form id='5' 
            name='confirmpassword'     
            type='password'           
            onChange={onChange}
            value={values.confirmpassword}  
            placeholder='password6738' 
            errorMessage="Password don't match"
            label=' confirm Password' 
            // icon={<Icon icon={icon} className='absolute content-center right-0 mr-4 w-4 bg-zinc-100 rounded-lg' onClick={handleToggleoff}/>} 
            

            />
          <button className='bg-blue-900 rounded-lg mt-2 py-3 text-white text-sm font-bold w-96'>Create</button>
          </form>
        </div>

      </div>

      <div className='flex flex-row space-beetween my-2 items-center '>
        <span className='text-xs font-bold text-slate-700	'> © 2022 LOGO™ . All rights reserved.</span>   <Links />
      </div>
    </div>
  )
}

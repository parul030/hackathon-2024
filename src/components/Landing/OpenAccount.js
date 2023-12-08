import React from 'react'
import { useState } from 'react'


function OpenAccount() {

    const [toggleButtonInvest , setToggleButton] = useState(true)
    const [toggleButtonBorrower ,setToggleButtonBorrower ] = useState(false)

 
    const handleClick  = (value) =>{
    if(value === "invest"){
    setToggleButton(true)
    setToggleButtonBorrower(false)
}
    else{
     setToggleButtonBorrower(true)
     setToggleButton(false)}  
    }

  return (
   <div className='bg-[#35354D] pt-[51px] pb-[40px]'>
    <div className='text-white text-[60px] font-normal'>Open an account in  few easy steps</div>
    <div className='mt-[41px]'>
        <button onClick = {() =>handleClick("invest")} className={`${toggleButtonInvest ? "" :"opacity-60"}  bg-[#F5BD74] capitalize text-white  text-[20px] font-medium w-[161px] rounded-[50px] py-[15px]`}>investor</button>
        <button onClick = {() =>handleClick("borrower")} className={` ${toggleButtonBorrower ? "" :"opacity-60"} capitalize text-white  bg-[#F5BD74] text-[20px] ml-[10px] font-medium w-[161px] rounded-[50px] py-[15px]`}>borrower</button>
    </div>

    <div className='text-center px-[94px] mt-[40px]'><img src= {toggleButtonInvest ? "imgs/investor.png" : 'imgs/borrower.png'} alt = "abc"/></div>
    <div className='mt-[75px]'> <button onClick = {() =>handleClick("invest")} className={` bg-[#36C3D6] capitalize text-white  text-[20px] font-medium rounded-[10px] py-[16px] px-[59px]  mb-[48px]`}>{toggleButtonInvest ? 'become an investor':'become a borrower'}</button></div>
   </div>
  );
}

export default OpenAccount;

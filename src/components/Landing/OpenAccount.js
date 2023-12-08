import React from 'react'
import { useState } from 'react'


function OpenAccount() {

    const [toggleButtonInvest , setToggleButton] = useState(true)
    const [toggleButtonBorrower , setToggleButtonBorrower] = useState(false)

const handleClick  = () =>{
    
}


  return (
   <div className='bg-[#35354D] h-[746px] pt-[51px]'>
    <div className='text-white text-[60px] font-normal'>Open an account in  few easy steps</div>
    <div className='mt-[41px]'>
        <button className={`Capitalize text-white bg-[#F5BD74] text-[20px] font-medium w-[161px] rounded-[50px] py-[15px]`}>investor</button>
        <button className={`Capitalize text-white bg-[#F5BD74] text-[20px] font-medium w-[161px] rounded-[50px] py-[15px]`}>borrower</button>
    </div>
   </div>
  );
}

export default OpenAccount;

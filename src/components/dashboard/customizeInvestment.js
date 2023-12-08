import React from 'react'
import RiskStepper from './RiskStepper'

export default function CustomizeInvestment() {
  return (
<div className='flex mt-[21px]'>
  <div className='w-[40%]'>

    <div className='bg-[#FFE8E3] h-[531px] py-[40px] capitalize rounded-[20px] shadow-v2'>
      <img src = {'imgs/test.svg'} alt = "test" className='mt-[100px] block mx-auto' />
      <p className='text-[28px] px-[40px] mt-[20px] text-center font-normal text-[#35354D] leading-normal'>Understand your risk tolerance and invest accordingly. It's crucial to align your investments with your comfort level</p>
     
    </div>
    
  </div>
  <div className='w-[60%] pt-[40px] text-center rounded-[30px] ml-[20px] bg-[#35354D] shadow-v2'>
    <p className='text-[20px] font-semibold text-white capitalize'>customize your investments in 3 easy steps</p>
    <RiskStepper/>

  </div>

</div>)
}
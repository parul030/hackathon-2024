import { Button } from '@mui/material';
import React from 'react'

function Landing() {
  return (
    <div className="flex">
    <div className='w-[683px] text-5xl  h-[768px] bg-[#35354D]'>
    <button className='w-[109px] bg-[#2B2B40] text-[#36C3D6] text-base font-normal py-[16px] pl-[23px] pr-[26px]'>Fin<span className='text-[#F5BD74]'>Ease</span></button>
    </div>
    
    <div className=''>
    <div className='relative float-right'>
    <button className='text-[#36C3D6] w-[109px] border border-[#58C3CC] bg-[#FFFFFF] text-base font-normal py-[16px] pl-[23px] pr-[26px] rounded-[10px]' variant="text">Login</button>

    <button className='bg-[#36C3D6] text-[#FFFFFF] text-base font-normal py-[16px] pl-[23px] pr-[26px] rounded-[10px]' variant="text">Sign Up</button>
    </div>
    </div>
    </div>
   
  );
}

export default Landing;

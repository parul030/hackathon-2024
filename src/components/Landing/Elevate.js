import React from 'react'


function Elevate() {
  return (
    <div className="flex justify-between relative pl-[97px] pr-[120px] pt-[37px]">
      <div className='absolute left-0 top-[60%]'> <img src = {'imgs/leftRibbon.png'} alt="lendingRIbbon"   className=' '/></div>
      <div className='mt-[53px] relative '>
        <div className=' text-left w-[441px] leading-[69.09px] text-[60px] font-normal text-#2A2A3D'>Elevate your financial journey with us</div>
        <div className=' text-left w-[380px] mt-[19px] text-[18px] font-nornal text-[#5D5D70] '>Discover why FinEase is your go-to crowdlending platform</div>
<div className='absolute right-0'>  <img src = {'imgs/card2.png'} alt="lendingRIbbon"   className='w-[317px] h-[304px] mt-[58px] '/></div>

      </div>

    
      
      <div className='mt-[53px]'>
      <img src = {'imgs/card1.png'} alt="lendingRIbbon"  className='w-[317px] h-[304px]'/>
      <img src = {'imgs/card3.png'} alt="lendingRIbbon"  className='w-[317px] h-[304px] mt-[22px]'/>
      </div>
      <div>
      <img src = {'imgs/card4.png'} alt="lendingRIbbon"  className='w-[317px] h-[304px]'/>
      <img src = {'imgs/card5.png'} alt="lendingRIbbon"  className='w-[317px] h-[304px]  mt-[22px]'/>
      </div>
    </div>
   
  );
}

export default Elevate;

import * as React from 'react';

export default function Step1(props) {

  const {handleSelect ,riskType} = props
  return (
   <div>
    <p className='text-[#BDBDE4] text-lg font-normal mt-[30px]'>What’s your risk appetite</p>
    <div className='flex justify-between px-[87px] mt-[25px]'>
      <div onClick={() =>handleSelect("aggressive")} 
      className={`${riskType === 'aggressive' ? "border border-1 border-[#F5BD74] text-[#F5BD74]" : "text-white"} w-[170x] h-[173px] cursor-pointer text-center py-[30px] px-[42px] rounded-[30px] bg-[#3F3F58]`}>
        <img src = {"imgs/aggresive.png"} alt ="aggresiv"  className='w-[67px] h-[76px] border'/>
        <p className=' mt-[18px] text-base font-normal'>Aggressive</p>
      </div>
      <div onClick={() =>handleSelect("moderate")} 
     className={`${riskType === 'moderate' ? "border border-1 border-[#F5BD74] text-[#F5BD74]" : "text-white"} w-[170x] h-[173px] cursor-pointer text-center py-[30px] px-[42px] rounded-[30px] bg-[#3F3F58]`}>
        <img src = "imgs/moderate.png" alt ="aggresive" className='w-[67px] h-[76px] border' />
        <p className=' mt-[18px] text-base font-normal'>Moderate</p>
      </div>
      <div  onClick={() =>handleSelect("conservative")}
      className={`${riskType === 'conservative' ? "border border-1 border-[#F5BD74] text-[#F5BD74]" : "text-white"} w-[170x] h-[173px] cursor-pointer text-center py-[30px] px-[42px] rounded-[30px] bg-[#3F3F58]`}>
        <img src = "imgs/conservative.png" alt ="conservative" className='w-[67px] h-[76px] border' />
        <p className='mt-[18px] text-base font-normal'>Conservative</p>
      </div>
    </div>   
   </div>
  );
}
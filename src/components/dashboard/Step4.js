import * as React from 'react';

export default function Step4(props) {

  const {handleSelect ,riskType} = props
  return (
   <div>
  <img className='w-[135px] h-[130px] display mx-auto' src = "imgs/final.png"  alt = "" />
  <p className='mt-[30px] text-[20px] font-semibold text-white'>Your proposals have been sent to the borrowers</p>
  <p  className='mt-[34px] text-lg font-normal text-[#BDBDE4]'>You can track the progress in the proposal below</p>

  <button className='text-base py-[16px] ml-[20px] px-[21px] rounded-[10px] border  mt-[30px] border-1 border-[#36C3D6] capitalize bg-[#36C3D6] text-white font-semibold'>go to proposals</button>
   </div>
  );
}
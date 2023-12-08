import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between bg-transparent'>
        <div className='w-[201px] mt-[14px] h-[64px] ml-[70px] bg-[#2B2B40] text-[#36C3D6] text-base font-normal py-[16px] pl-[67px] text-[30px] pr-[13px]'>Fin<span className='text-[#F5BD74]'>Ease</span></div>
        {/* <div className='mr-[58px] mt-[35px]'>
        <button className='text-[#36C3D6] w-[109px]  border border-[#58C3CC] bg-[#FFFFFF] text-base font-normal py-[16px] pl-[23px] pr-[26px] rounded-[10px]' variant="text">Login</button>
        <button className='bg-[#36C3D6] text-[#FFFFFF] ml-[20px] text-base font-normal py-[16px] pl-[23px] pr-[26px] rounded-[10px]' variant="text">Sign Up</button>
        </div> */}

        <div className='mr-[58px] mt-[35px] flex'>
            <img  className = "w-[51px] h-[60px] " src = {'imgs/guest.png'} alt = "guest" />
            <div className='ml-[10px]'>
                <div className='text-sm font-normal text-[#35354D] mt-2'>Hello</div>
                <div className='text-lg font-normal capitalize '>Shreya Kumar</div>
            </div>
        </div>


    </div>
  )
}
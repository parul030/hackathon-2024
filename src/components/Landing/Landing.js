import React from 'react'
import Elevate from './Elevate';


function Landing() {
  return (
    <>
    <div className="flex relative">
    <div className='w-[683px] h-[768px] pl-[70px]  bg-[#35354D]'>
    <div className='w-[201px] mt-[12px] bg-[#2B2B40] text-[#36C3D6] text-base font-normal py-[16px] pl-[67px] text-[30px] pr-[13px]'>Fin<span className='text-[#F5BD74]'>Ease</span></div>

    <h1 className='text-left mt-[106px] text-[45px] font-light text-white'>Become an</h1>
    <h2 className=' text-left text-[#F5BD74] text-[100px] font-normal'>Investor</h2>
    <div className='w-[385px] text-left text-white text-sm font-normal'>Unlock exclusive investor benefits and multiply your wealth. Diversify your portfolio, support entrepreneurs, and watch your wealth grow. Ready to make your money work for you?</div>

    <div className='text-left mt-[55px]'><button className='rounded-[10px] capitalize bg-[#36C3D6] w-[165px] text-white  text-base font-semibold py-[17px] px-[26px]'>start investing</button></div>
    
    <img src = {'imgs/landing.png'} alt="lendingRIbbon"  className='w-[243px] absolute bottom-0 h-[121px]'/>
    </div>
    
    <div className='absolute top-[40%] left-[35%]'>
    <img src = {'imgs/lenderBorrower.png'} alt="lendingRIbbon"  className=' w-[352px] h-[350px]'/>
    </div>
   
   <div className='absolute right-3 pt-[20px]'>
    
   <button className='text-[#36C3D6] w-[109px]  border border-[#58C3CC] bg-[#FFFFFF] text-base font-normal py-[16px] pl-[23px] pr-[26px] rounded-[10px]' variant="text">Login</button>

    <button className='bg-[#36C3D6] text-[#FFFFFF] ml-[20px] text-base font-normal py-[16px] pl-[23px] pr-[26px] rounded-[10px]' variant="text">Sign Up</button>

    <div className='mt-[303px] mr-10'>
    <div className='mt-[106px] text-left text-[45px] font-light text-[#2A2A3D]'>Become an</div>
    <div className='text-[#F5BD74] text-left leading-normal text-[100px] font-normal'>Borrower</div>
    <div className='w-[385px] text-left text-[#717182] text-sm font-normal'>Low-interest rates, flexible terms, and a hassle-free application process. Get the financial boost you need and take the first step towards your goals today.</div>
    <div className='text-left mt-[24px]'><button className='rounded-[10px] capitalize bg-[#36C3D6] w-[165px] text-white  text-base font-semibold py-[16px] px-[21px]'>start borrowing</button></div>
    </div>
    </div>
    </div>
    <Elevate/>
    </>
  );
}

export default Landing;


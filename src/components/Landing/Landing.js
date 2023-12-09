import React from 'react'
import Header from '../Common/header';
import Elevate from './Elevate';
import OpenAccount from './OpenAccount'
import Roadmap from './Roadmap'
import {Link } from 'react-router-dom'



function Landing() {
  return (
    <>
    <div className='relative'>
      <div className='absolute top-0 right-0 left-0'>
      <Header/>
      </div>
    <div className="flex relative">
    <div className='w-[50%] h-[768px] pl-[70px]  bg-[#35354D]'>


    <h1 className='text-left mt-[106px] text-[45px] font-light text-white'>Become an</h1>
    <h2 className=' text-left text-[#F5BD74] text-[100px] font-normal'>Investor</h2>
    <div className='w-[385px] text-left text-white text-sm font-normal'>Unlock exclusive investor benefits and multiply your wealth. Diversify your portfolio, support entrepreneurs, and watch your wealth grow. Ready to make your money work for you?</div>

    <div className='text-left mt-[55px]'><Link to = "/investor"><button className='rounded-[10px] capitalize bg-[#36C3D6] w-[165px] text-white  text-base font-semibold py-[17px] px-[26px]'>start investing</button></Link></div>
    
    <img src = {'imgs/landing.png'} alt="lendingRIbbon"  className='w-[243px] absolute bottom-0 h-[121px]'/>
    </div>
    
    <div className='absolute top-[30%] left-[38%]'>
    <img src = {'imgs/lenderBorrower.png'} alt="lendingRIbbon"  className=' w-[352px] h-[350px]'/>
    </div>
   
   <div className='absolute right-3 pt-[20px]'>
    <div className='mt-[303px] mr-10'>
    <div className='mt-[106px] text-left text-[45px] font-light text-[#2A2A3D]'>Become an</div>
    <div className='text-[#F5BD74] text-left leading-normal text-[100px] font-normal'>Borrower</div>
    <div className='w-[385px] text-left text-[#717182] text-sm font-normal'>Low-interest rates, flexible terms, and a hassle-free application process. Get the financial boost you need and take the first step towards your goals today.</div>
    <div className='text-left mt-[24px]'><Link to = "/borrower"><button className='rounded-[10px] capitalize bg-[#36C3D6] w-[165px] text-white  text-base font-semibold py-[16px] px-[21px]'>start borrowing</button></Link></div>
    </div>
    </div>
    </div>
    <Elevate/>
    <OpenAccount/>
    <Roadmap/>
    </div>
    </>
  );
}

export default Landing;


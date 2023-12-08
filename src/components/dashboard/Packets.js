import React from 'react'
import {useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function Packets() {
const [activeStep, setActiveStep] = useState(0)

 const data = [
    {
        tenure:'tenure',
        month:'03 Months',
        invest:'Min. Investment amt.',
        investAmount:'₹25,000',
        expected:"Expected returns",
        percent:'12% - 14%',
        risk:"Risk Type",
        riskType:'Aggressive',
        index:0

    },
    {
        tenure:'tenure',
        month:'03 Months',
        invest:'Min. Investment amt.',
        investAmount:'₹25,000',
        expected:"Expected returns",
        percent:'12% - 14%',
        risk:"Risk Type",
        riskType:'Aggressive',
        index:0

    },
    {
        tenure:'tenure',
        month:'03 Months',
        invest:'Min. Investment amt.',
        investAmount:'₹25,000',
        expected:"Expected returns",
        percent:'12% - 14%',
        risk:"Risk Type",
        riskType:'Aggressive',
        index:0

    },
    {
        tenure:'tenure',
        month:'03 Months',
        invest:'Min. Investment amt.',
        investAmount:'₹25,000',
        expected:"Expected returns",
        percent:'12% - 14%',
        risk:"Risk Type",
        riskType:'Aggressive',
        index:0

    },
    {
      tenure:'tenure',
      month:'03 Months',
      invest:'Min. Investment amt.',
      investAmount:'₹25,000',
      expected:"Expected returns",
      percent:'12% - 14%',
      risk:"Risk Type",
      riskType:'Aggressive',
      index:0

  },
  {
    tenure:'tenure',
    month:'03 Months',
    invest:'Min. Investment amt.',
    investAmount:'₹25,000',
    expected:"Expected returns",
    percent:'12% - 14%',
    risk:"Risk Type",
    riskType:'Aggressive',
    index:0

}
    
 ]

 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
return(
<div className='pb-[100px]'>
    <p className='text-[20px] font-semibold mt-[40px] mb-[20px]'>Investment packets</p>

    <Carousel showDots={true}
    infinite={true}
    autoPlay={true}
    dotListClass="custom-dot-list-style"
    removeArrowOnDeviceType={["desktop"]}
    responsive = {responsive}>
    {data.map((item, index) =>{
      return(
        <div key={index} className= "ml-[20px]">
        <div className='h-[371px] text-center shadow-v2 rounded-[30px]'>
        <div className='flex py-[30px] h-[99px] bg-[#F5BD74] rounded-t-[30px]'>
        <p><img className='block mx-auto' src = {'imgs/calendar.svg'}  alt = "calendar"/></p>
        <div>
        <p>{item.tenure}</p>
        <p>{item.month}</p>
        </div>     
        </div>
        <div className='text-center mt-[30px]'>
        <div className='text-sm font-normal text-[#5D5D70]'>{item.invest}</div>
        <div className='text-[26px] font-normal text-[#35354D]'>{item.investAmount}</div>
        <div className='flex justify-space ml-[25px] mt-[30px]'>
            <div>
                <div className='text-sm font-normal text-[#5D5D70]'>{item.expected}</div>
                <div className='text-base font-normal text-[#35354D]'>{item.percent}</div></div>
        
           <div>
            <div className='text-sm font-normal text-[#5D5D70]' >{item.risk}</div>
            <div className='text-base font-normal text-[#35354D]'>{item.riskType}</div>
            </div>
            </div>
            <div className='mt-[38px]'>  <button className='text-base py-[16px] ml-[20px] px-[21px] rounded-[10px] border  border-1 border-[#36C3D6] capitalize bg-[#36C3D6] text-white font-semibold'>add funds</button></div>
        </div>
        </div>
        </div>)})}
        </Carousel>
    </div>
)
}
import React from 'react'
import { useState } from 'react'
import MyChartComponent from './Chart'
import CustomizedSlider from './slider'
import { currencyFormat } from '../Utils'

function Roadmap() { 

    function valuetext(value) {
        console.log(value,"value")
        return `${value}°C`;
      }

      const [conservative , setConvervative] = useState(true)
      const [moderate , setModerate] = useState(false)
      const [aggressive , setAggresive] = useState(false)
      const [loanValue, setLoanValue] = useState(currencyFormat(100000))

      const handleRiskData = (value) =>{
        if(value === "conservative"){
            setConvervative(true)
            setModerate(false)
            setAggresive(false)
        }
        else if(value === "moderate"){
            console.log(value)
        setConvervative(false)
        setModerate(true)
        setAggresive(false)
    }
        else if(value === 'aggressive'){
            setConvervative(false)
            setModerate(false)
            setAggresive(true)
        }
      }
  return (
  <div className='pt-[77px] pl-[73px] pb-[108px] relative'>
    <p className=' text-left text-[60px] font-normal leading-normal w-[50%]'>A roadmap to sustainable wealth growth</p>
    <p className=' text-left w-[40%] text-lg font-normal'>Optimizing returns and managing risk along with the strategic advantage of diversifying your investment portfolio</p>

    <div className='h-[716px] text-left rounded-[40px] pt-[93px] pl-[85px] pr-[91px] bg-white shadow-v1 w-[598px] z-[1] mt-[63px]'>
        <div>
            <p className='capitalize text-[30px] text-[#35354D] font-light'>one-time deposit</p>
       
     <div>
       <CustomizedSlider
          value={loanValue}
          setValue={setLoanValue}
          minRange={100000}
          maxRange={50000000}
          steps={100000}
          title={''}
          marks={
            []
            }
        />
        </div>
       
    </div>
    <div>
        <div>
     <p className='capitalize text-[30px] mt-[62px] text-[#35354D] font-light'>monthly deposit</p>
       
     <div>
       <CustomizedSlider
          value={loanValue}
          setValue={setLoanValue}
          minRange={100000}
          maxRange={50000000}
          steps={100000}
          title={''}
          marks={[]}
        />
        </div>
      
    </div>
    </div>
   <p className='text-[#35354D] text-[30px] font-light'> Risk Level</p>
    <div className='flex w-[418px] bg-[#FFF1E0] mt-[14px]  capitalize rounded-[100px]'>

   <div onClick={() =>handleRiskData("conservative")}
    className={`${conservative ?  "bg-[#F5BD74] text-white rounded-[100px]" :  "bg-[#FFF1E0] text-[#717182] rounded-l-[100px] "}  cursor-pointer py-[20px] px-[24px]  text-base  w-[141px]`}>
   conservative
   </div>
   <div onClick={() =>handleRiskData("moderate")}  
   className={`${moderate ?  "bg-[#F5BD74] text-white  rounded-[100px]" :  "bg-[#FFF1E0] text-[#717182]"}  cursor-pointer py-[20px] px-[35px] text-base`}>
   Moderate
   </div>
   <div onClick={() =>handleRiskData("aggressive")}
     className={`${aggressive ?  "bg-[#F5BD74] text-white  rounded-[100px]" :  "bg-[#FFF1E0] text-[#717182] rounded-r-[100px] "}  cursor-pointer py-[20px] px-[40px] text-base`}>
   aggressive
   </div>
    </div>
    </div>
    <div className='h-[893px] pt-[93px] pl-[163px]  pr-[51px] absolute right-0 top-[20%] rounded-l-[40px] bg-[#2A2A3D] z-[-1] shadow-v1 w-[800px] mt-[63px]'>
        <div className='flex justify-between'>
            <div className='w-[255.285px] rounded-[20px] text-left pt-[30px] pl-[21px] pb-[27px] border border-dashed border-1 border-[#F9F885]'>
                <p className='text-white text-lg capitalize font-normal'>Traditional Investing</p>
                <p className='text-[34px] font-normal text-[#F9F885]'>₹ 2,00,000</p>

            </div>
            <div className='w-[255.285px] rounded-[20px] text-left pt-[30px] pl-[21px] pb-[27px] border border-dashed border-1 border-[#86EA9C]'>
                <p className='text-white capitalize text-lg font-normal'>FinEase</p>
                <p className='text-[34px] font-normal text-[#86EA9C]'>₹ 2,00,000</p>

            </div>
        </div>

        <MyChartComponent/>
    </div>
  </div>
  );
}

export default Roadmap;

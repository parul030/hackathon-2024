import * as React from 'react';
import { Grid, Typography, LinearProgress ,Box , TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

export default function Step3(props) {

    const { formState, handleSubmit, control } = useForm({
        mode: 'onBlur',
      })

  const {handleSelect ,riskType ,  investor , handleInvestorValue ,handleChange , investValue , tenure , handleTenure} = props


  const renderInvestorBox = (name, amt, pVal, item, fAmt, rAmt, purpose, risk) => {
    return <div onClick = {() =>handleInvestorValue (item)} className={` ${ investor === item ?  "text-[#F5BD74]" : "text-[#AEAEB7]"} w-[197px] h-[252px] cursor-pointer rounded-[10px] color-[#AEAEB7] mr-[10px] text-xs font-medium mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 `}>
          <Typography className='text-[#AEAEB7] text-[10px] font-light'>borrower’s name</Typography>
          <Typography>{name}</Typography>
          <Typography>Total Loan Required</Typography>
          <Typography>{amt}</Typography>
          <LinearProgress variant="determinate"  color="success"  value={pVal} style={{ backgroundColor: 'red', height: '8px', borderRadius: '8px'  }}
          sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }}/>
          <div className='flex justify-center'>
            <div>
              <div>Funded Amt.</div>
              <div>{fAmt}</div>
            </div>
            <div>
              <div>Remaining Amt.</div>
              <div>{rAmt}</div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div>
              <div>Purpose of Loan</div>
              <div>{purpose}</div>
            </div>
            <div>
              <div>Risk Type</div>
              <div>{risk}</div>
            </div>
          </div>
          </div>
      }

  return (
   <div>
   <p className="text-[#BDBDE4] text-[18px] font-normal mt-[50px]">How much you wish to invest?</p>
  <div className='flex mx-[50px]'>
  <div>
    {renderInvestorBox("Vandana Singh", "₹ 5,00,000",40, '₹ 2,00,000', '₹ 4,00,000', "Business", "Moderate")}
  </div>
  <div>
    
      <div className='mt-[50px]'> 
     <input  value = {investValue} onChange = {handleChange} className='border border-1 border-[#C3C4FE] rounded-[10px] pl-4 w-[400px] text-base text-white bg-[#35354D] h-[64px]' type = "text"/>
              
     <input  value = {tenure} onChange = {handleTenure} className='border border-1 border-[#C3C4FE] rounded-[10px] pl-4 mt-[40px] text-base text-white bg-[#35354D]  w-[400px] h-[64px]' type = "text"/>
     </div>   
     
      
  </div>
    </div>
   </div>
  );
}
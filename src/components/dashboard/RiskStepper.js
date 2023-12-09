import React from 'react'
import HorizontalLinearStepper from './stepper'
import {useState} from 'react'
import {Box, Button} from '@mui/material';
import Step1 from './Step1'
import Step2  from './Step2'
import  Step3 from './Step3'
import Step4 from './Step4'
import axios from 'axios'


export default function RiskStepper() {
const [activeStep, setActiveStep] = useState(0)
const [riskType , setRiskType] = useState("")
const [investment , setInvestment] = useState("")
const [incomeType , setIncomeType] = useState("")
const [innerStep, setInnerStep] = useState(0)
const [fundValue , setFundValue] = useState(0)
const [investor , setInvestor] = useState(0)
const [investValue , SetInvestValue] = useState("150000")
const [tenure , setTenure] = useState("6 months")

const handleSelect  = (value) =>{
  setRiskType(value)
 }

 const handleInvestment = (value) =>{
  setInvestment(value)
 }
 const handleButton = (value) =>{
  setInnerStep(innerStep+value)
  if(innerStep === 4){
    setActiveStep(2)
  }
 }
 const handleEMployementType = (value) =>{
  setIncomeType(value)
 }

 const handleFundValue =(value) =>{
  setFundValue(value)
 }

 const onSubmit = async (data) => {
  const memeberId= localStorage.getItem("memberId")
  const resp = await axios.post(
    `https://finease-b5044a79ab8d.herokuapp.com/api/v1/lender/invest`,
    {
    lender_id: memeberId,
  amount: investValue,
  tenure: tenure,
  risk_type:riskType ,
  risk_category: "",
  borrower_employment_type: incomeType ,
  borrower_already_funded: "no",
  borrower_payable_grade: "A",
  borrower_id: "borrower456",
    }
  )
}
 const handleInvestorValue =(value) =>{
  setInvestor(value)
 }

 const handleChange = (event) =>{
  SetInvestValue(event.target.value)
 }

 const handleTenure = (event) =>{
  setTenure(event.target.value)
 }


const resolveActiveScreen = () => {
    switch (activeStep) {
      case 0:
        return (
          <div><Step1 riskType = {riskType} handleSelect= {handleSelect} /></div>
        )
      case 1:
        return (
            <div><Step2 investment = {investment}
             setInnerStep = {setInnerStep}
             innerStep = {innerStep}
             handleInvestment = {handleInvestment}
             handleEMployementType = {handleEMployementType}
             handleButton = {handleButton}
             incomeType ={incomeType}
             handleFundValue = { handleFundValue}
             fundValue={fundValue}
             handleInvestorValue={handleInvestorValue}
             investor={investor} /></div>
        )
      case 2:
        return <div>< Step3 
         investValue = {investValue}
         handleInvestorValue={handleInvestorValue}
         tenure ={tenure}
        investor={investor}
        handleChange  ={ handleChange }
        handleTenure= {handleTenure} /></div>
     
    case 3:
        return <div>< Step4
         investValue = {investValue}
         handleInvestorValue={handleInvestorValue}
         tenure ={tenure}
        investor={investor}
        handleChange  ={ handleChange }
        handleTenure= {handleTenure} /></div>
      default:
        break
    }
  }

const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((activeStep) => activeStep + 1)
    }
    if(activeStep === 3){
      onSubmit()
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((activeStep) => activeStep - 1)
    }
  }

  console.log(activeStep ,"activestep")
  return (
<div className='mt-[21px]'>
 {activeStep <= 2 ?  <HorizontalLinearStepper activeStep = {activeStep} /> : null} 
   {resolveActiveScreen()}


     {activeStep <= 2 ?  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, px:['45px'] , mt:["40px"]}}>
       <img src = {"imgs/back.svg"} alt = "prevIcon" />
            <button className='text-[#36C3D6] text-base font-semibold' onClick={handleBack}>
             Back 
            </button>
            
            <Box sx={{ flex: '1 1 auto' }} />
          
            <button className={`${innerStep < 4  ? "opacity-2 "  : ""} text-[#36C3D6] text-base font-semibold`}
             onClick={handleNext}>
              {activeStep > 2 ?   "Done"  : 'Next' }
            </button>
            <img src = {"imgs/nextIcon.svg"} alt = "nextIcon" />
          </Box>
          : null}
</div>)
}
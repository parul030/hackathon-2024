import React from 'react'
import HorizontalLinearStepper from './stepper'
import {useState} from 'react'
import {Box, Button} from '@mui/material';
import Step1 from './Step1'
import Step2  from './Step2'


export default function RiskStepper() {
const [activeStep, setActiveStep] = useState(0)
const [riskType , setRiskType] = useState("")
const [investment , setInvestment] = useState("")
const [innerStep, setInnerStep] = useState(0)

const handleSelect  = (value) =>{
  setRiskType(value)
 }

 const handleInvestment = (value) =>{
  setInvestment(value)
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
             handleInvestment = {handleInvestment} /></div>
        )
      case 2:
        return <div></div>
      default:
        break
    }
  }

const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((activeStep) => activeStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((activeStep) => activeStep - 1)
    }
  }

  return (
<div className='mt-[21px]'>
 <HorizontalLinearStepper activeStep = {activeStep} />
   {resolveActiveScreen()}


     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, px:['45px'] , mt:["40px"]}}>
            <button className='text-[#36C3D6] text-base font-semibold' onClick={handleBack}>
             Back 
            </button>
            <img src = {"imgs/back.svg"} alt = "nextIcon" />
            <Box sx={{ flex: '1 1 auto' }} />
          
            <button className='text-[#36C3D6] text-base font-semibold' onClick={handleNext}>
               Next 
            </button>
            <img src = {"imgs/nextIcon.svg"} alt = "nextIcon" />
          </Box>
</div>)
}
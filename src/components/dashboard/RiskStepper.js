import React from 'react'
import HorizontalLinearStepper from './stepper'
import {useState} from 'react'
import {Box, Button} from '@mui/material';
import Step1 from './Step1'


export default function RiskStepper() {
const [activeStep, setActiveStep] = useState(0)


// const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

const resolveActiveScreen = () => {
    switch (activeStep) {
      case 0:
        return (
          <div><Step1/></div>
        )
      case 1:
        return (
            <div></div>
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

         {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
          
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box> */}
</div>)
}
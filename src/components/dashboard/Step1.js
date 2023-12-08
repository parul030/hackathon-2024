import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import PropTypes from 'prop-types'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { Image } from '@mui/icons-material';


const steps = ['choose risk type', 'select category', 'select borrower'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped?.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
   <div>
    <p>What’s your risk appetite</p>
    <div className='flex'>
      <div className='w-[170x] h-[173px] rounded-[30px] bg-[#3F3F58]'>
        <Image src = {"imgs/aggresive.svg"} alt ="aggresiv" />
        <p>Aggressive</p>
      </div>
      <div  className='w-[170x] h-[173px] rounded-[30px] bg-[#3F3F58]'>
        <img src = "imgs/moderate.png" alt ="aggresiv" />
        <p>Moderate</p>
      </div>
      <div  className='w-[170x] h-[173px] rounded-[30px] bg-[#3F3F58]'>
        <img src = "imgs/conservative.svg" alt ="conservative" />
        <p>Conservative</p>
      </div>
    </div>
    
   </div>
  );
}
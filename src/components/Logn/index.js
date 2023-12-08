import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { KeyboardArrowLeft } from '@mui/icons-material'
import CustomizedSteppers from '../Common/stepper'
import ContactDetails from './contactDetails'
import PersonalDetails from './personalDetails'
import KYC from './kyc'

const Login = () => {
  const [activeStep, setActiveStep] = useState(0)

  const resolveActiveScreen = () => {
    switch (activeStep) {
      case 0:
        return (
          <ContactDetails handleNext={handleNext} handleBack={handleBack} />
        )
      case 1:
        return (
          <PersonalDetails handleNext={handleNext} handleBack={handleBack} />
        )
      case 2:
        return <KYC />
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
    if (activeStep < 3) {
      setActiveStep((activeStep) => activeStep - 1)
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <div>
          <KeyboardArrowLeft />
          <span>Become an investor</span>
        </div>
        <div>Hello investor!</div>
        <p>Ready to make your money work for you?</p>
        <div>Money Img</div>
      </Grid>
      <Grid item xs={7}>
        <div className='bg-white rounded-2xl px-11 py-6 shadow-md'>
          <CustomizedSteppers count={3} activeStep={activeStep} />
          {resolveActiveScreen()}
        </div>
      </Grid>
    </Grid>
  )
}

export default Login

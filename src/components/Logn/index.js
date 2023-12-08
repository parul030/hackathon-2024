import { Grid } from '@mui/material'
import React from 'react'
import { KeyboardArrowLeft } from '@mui/icons-material'
import CustomizedSteppers from '../Common/stepper'
import ContactDetails from './contactDetails'
import PersonalDetails from './personalDetails'

const Login = () => {
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
          <CustomizedSteppers count={4} activeStep={2} />
          {/* <ContactDetails /> */}
          <PersonalDetails />
        </div>
      </Grid>
    </Grid>
  )
}

export default Login

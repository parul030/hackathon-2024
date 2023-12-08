import { Grid } from '@mui/material'
import React from 'react'
import Logo from '../Common/logo'

const Login = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div><span>Become an investor</span></div>
      </Grid>
      <Grid item xs={4}>
        <div>xs=4</div>
      </Grid>
    </Grid>
  )
}

export default Login

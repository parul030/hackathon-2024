import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ValidationRules } from '../../constants/ValidationRules'
import CustomizedSlider from '../Common/slider'

const LoadDetails = ({ handleNext, handleBack }) => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })
  const [selectedGender, setSelectedGender] = useState()
  const [selectedMaritialStatus, setSelectedMaritialStatus] = useState()

  const { errors } = formState

  const onSubmit = (data) => {
    console.log(data)
    handleNext()
  }
  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col'
    >
      <div variant='h3' className='text-left text-[20px] mt-[46px]  font-light text-[#35354D] font-[roboto] mb-4'>
        Personal Details
      </div>
      <Box className='flex mt-[34px] flex-col gap-4'>
        <CustomizedSlider/>
        <Box>
          <Controller
            control={control}
            name='fullName'
            rules={{
              required: {
                value: true,
                message: 'This field cannot be left blank',
              },
              pattern: {
                value: ValidationRules.firstName,
                message: 'Please enter the correct name',
              },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label='Full Name.'
                variant='outlined'
                name='fullName'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className='w-full'
              />
            )}
          />
          {errors.fullName && (
            <Typography className='text-red-400 text-sm'>
              {errors.fullName.message}
            </Typography>
          )}
        </Box>
      </Box>
      <Box className='flex justify-between mt-4'>
        <Button
          variant='contained'
          onClick={handleBack}
          disabled={false}
          className='w-8 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-0'
        >
          Back
        </Button>
        <Button
          variant='contained'
          type='submit'
          disabled={false}
          className='w-8 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-0'
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default LoadDetails

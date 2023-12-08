import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ValidationRules } from '../../constants/ValidationRules'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const KYC = ({ handleNext, handleBack }) => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })

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
      <Typography variant='h3' className='text-center font-bold mb-4'>
        KYC
      </Typography>
      <Box className='flex flex-col gap-4'>
        <Box>
          <Controller
            control={control}
            name='pan'
            rules={{
              required: {
                value: true,
                message: 'This field cannot be left blank',
              },
              pattern: {
                value: ValidationRules.mobileNumber,
                message: 'Please enter the correct PAN.',
              },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label='Mobile No.'
                variant='outlined'
                name='pan'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className='w-full'
              />
            )}
          />
          {errors.pan && (
            <Typography className='text-red-400 text-sm'>
              {errors.pan.message}
            </Typography>
          )}
        </Box>
        <Controller
          control={control}
          name='dob'
          rules={{
            required: {
              value: true,
              message: 'This field cannot be left blank',
            },
            pattern: {
              value: ValidationRules.emailID,
              message: 'Please enter the correct EmailId.',
            },
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker label='DOB' value={value} onChange={onChange} />
              </DemoContainer>
            </LocalizationProvider>
          )}
        />
        {errors.dob && (
          <Typography className='text-red-400 text-sm'>
            {errors.dob.message}
          </Typography>
        )}
        <Controller
          control={control}
          name='aadhaar'
          rules={{
            required: {
              value: true,
              message: 'This field cannot be left blank',
            },
            pattern: {
              value: ValidationRules.alphanumericCharacters,
              message: 'Please enter the correct Password.',
            },
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextField
              label='Aadhaar No.'
              variant='outlined'
              name='aadhaar'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className='w-full'
            />
          )}
        />
        {errors.aadhaar && (
          <Typography className='text-red-400 text-sm'>
            {errors.aadhaar.message}
          </Typography>
        )}
      </Box>
      <Button
        variant='contained'
        disabled={false}
        onClick={handleBack}
        className='w-8 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-0'
      >
        Back
      </Button>
      <Box className='flex justify-end mt-4'>
        <Button
          variant='contained'
          type='submit'
          disabled={false}
          className='w-8 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-0'
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default KYC

import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ValidationRules } from '../../constants/ValidationRules'
import GenderButtons from '../Common/radioOptions'

const PersonalDetails = () => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })

  const { errors } = formState

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col'
    >
      <Typography variant='h3' className='text-center font-bold mb-4'>
        Personal Details
      </Typography>
      <Box className='flex flex-col gap-4'>
        <Box>
          <Controller
            control={control}
            name='mobileNo'
            rules={{
              required: {
                value: true,
                message: 'This field cannot be left blank',
              },
              pattern: {
                value: ValidationRules.mobileNumber,
                message: 'Please enter the correct Mobile Number.',
              },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label='Mobile No.'
                variant='outlined'
                name='mobileNo'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className='w-full'
              />
            )}
          />
          {errors.mobileNo && (
            <Typography className='text-red-400 text-sm'>
              {errors.mobileNo.message}
            </Typography>
          )}
        </Box>
        <GenderButtons/>
      </Box>
      <Box className='flex justify-end mt-4'>
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

export default PersonalDetails

import React from 'react'
import {  Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ValidationRules } from '../../constants/ValidationRules'

const ContactDetails = ({handleNext, handleBack}) => {
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
      <div variant='h3' className='text-left capitalize text-[20px] mt-[46px]  font-light text-[#35354D] font-[roboto] mb-4'>
      contact details
      </div>
      <Box className='flex mt-[34px] flex-col gap-4'>
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

        <Controller
          control={control}
          name='emailId'
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
            <TextField
              label='Email Id'
              variant='outlined'
              type='email'
              name='emailId'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className='w-full mt-[34px]'
            />
          )}
        />
        {errors.emailId && (
          <Typography className='text-red-400 text-sm'>
            {errors.emailId.message}
          </Typography>
        )}
        <Controller
          control={control}
          name='password'
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
              label='Set Password'
              variant='outlined'
              type='password'
              name='password'
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              className='w-full mt-[34px]'
            />
          )}
        />
        {errors.password && (
          <Typography className='text-red-400 text-sm'>
            {errors.password.message}
          </Typography>
        )}
        <Controller
          control={control}
          name='confirmPassword'
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
              label='Confirm Password'
              variant='outlined'
              type='password'
              name='confirmPassword'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className='w-full mt-[34px]'
            />
          )}
        />
        {errors.confirmPassword && (
          <Typography className='text-red-400 text-sm'>
            {errors.confirmPassword.message}
          </Typography>
        )}
      </Box>
      <Box className='flex justify-end mt-4'>
        <Button 
          variant='contained'
          type='submit'
          disabled={false}
          className='w-[185px] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-0'
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default ContactDetails

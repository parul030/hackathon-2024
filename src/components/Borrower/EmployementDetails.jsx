import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

const EmployementDetails = ({
  handleNext,
  handleBack,
  investorData,
  setInvestorData,
}) => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })

  const { errors } = formState

  const onSubmit = (data) => {
    console.log(data)
    let newData = {}
    if (investorData) {
      newData = { ...investorData }
    }
    newData = { ...newData, empDetails: data }
    setInvestorData(newData)
    handleNext()
  }
  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col'
    >
      <Typography variant='h3' className='text-center font-bold mb-4'>
        Employement Details
      </Typography>
      <Box className='flex flex-col gap-4'>
        <Box>
          <Controller
            control={control}
            name='companyName'
            rules={{
              required: {
                value: true,
                message: 'This field cannot be left blank',
              },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label='Company Name'
                variant='outlined'
                name='companyName'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className='w-full'
              />
            )}
          />
          {errors.companyName && (
            <Typography className='text-red-400 text-sm'>
              {errors.companyName.message}
            </Typography>
          )}
        </Box>
        <Controller
          control={control}
          name='companyType'
          render={({ field: { value, onChange, onBlur } }) => (
            <TextField
              label='Company Type'
              variant='outlined'
              name='companyType'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className='w-full'
            />
          )}
        />
        <Box className='flex justify-center'>
          <Controller
            control={control}
            name='expInYrs'
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label='Years'
                variant='outlined'
                name='expInYrs'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className='w-full'
              />
            )}
          />
          <Controller
            control={control}
            name='expInMonths'
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label='Months'
                variant='outlined'
                name='expInMonths'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className='w-full'
              />
            )}
          />
        </Box>
        <Controller
          control={control}
          name='city'
          render={({ field: { value, onChange, onBlur } }) => (
            <TextField
              label='City.'
              variant='outlined'
              name='city'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className='w-full'
            />
          )}
        />
        <Controller
          control={control}
          name='pincode'
          render={({ field: { value, onChange, onBlur } }) => (
            <TextField
              label='Pincode.'
              variant='outlined'
              name='pincode'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className='w-full'
            />
          )}
        />
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

export default EmployementDetails

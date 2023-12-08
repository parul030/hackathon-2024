import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ValidationRules } from '../../constants/ValidationRules'
import RadioOptions from '../Common/radioOptions'
import {
  MaleOutlined,
  FemaleOutlined,
  TransgenderOutlined,
} from '@mui/icons-material'

const PersonalDetails = ({
  handleNext,
  handleBack,
  investorData,
  setInvestorData,
}) => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })
  const [selectedGender, setSelectedGender] = useState()
  const [selectedMaritialStatus, setSelectedMaritialStatus] = useState()

  const { errors } = formState

  const onSubmit = (data) => {
    debugger
    console.log(data)
    let newData = {}
    if (investorData) {
      newData = { ...investorData }
    }
    newData = {
      ...newData,
      personalDetails: {
        ...data,
        maritialStatus: selectedMaritialStatus,
        gender: selectedGender,
      },
    }
    setInvestorData(newData)
    handleNext()
  }
  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col'
    >
      <div
        variant='h3'
        className='text-left text-[20px] mt-[46px]  font-light text-[#35354D] font-[roboto] mb-4'
      >
        Personal Details
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
        <RadioOptions
          options={[
            { label: 'Male', icon: <MaleOutlined /> },
            { label: 'Female', icon: <FemaleOutlined /> },
            { label: 'Other', icon: <TransgenderOutlined /> },
          ]}
          selectedOption={selectedGender}
          title={'Gender'}
          handleOptionChange={setSelectedGender}
        />
        <RadioOptions
          options={[
            { label: 'Married', icon: <MaleOutlined /> },
            { label: 'unmarried', icon: <FemaleOutlined /> },
            { label: 'divorced', icon: <TransgenderOutlined /> },
            { label: 'Widowed', icon: <TransgenderOutlined /> },
          ]}
          selectedOption={selectedMaritialStatus}
          title={'Marital Status'}
          handleOptionChange={setSelectedMaritialStatus}
        />
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

export default PersonalDetails

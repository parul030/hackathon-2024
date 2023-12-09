import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ValidationRules } from '../../constants/ValidationRules'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const KYC = ({ handleNext, handleBack, investorData, setInvestorData }) => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })

  const navigate = useNavigate();

  const { errors } = formState

  const onSubmit = async (data) => {
    console.log(data)
    
    let newData = {}
    if (investorData) {
      newData = { ...investorData }
    }
    newData = { ...newData, kycDetails: data }
    setInvestorData(newData)
    const resp = await axios.post(
      `https://finease-b5044a79ab8d.herokuapp.com/api/v1/member/update`,
      {
        fullname: newData.personalDetails.fullName,
        mobile_no: newData.personalDetails.mobileNo,
        email: newData.contactDetails.emailId,
        password: newData.contactDetails.password,
        date_of_birth: dayjs(newData.kycDetails.dob).format('YYYY-MM-DD'),
        gender: newData.personalDetails.gender,
        marital_status: newData.personalDetails.maritialStatus,
        // address: '123 Main St',
        pan: newData.kycDetails.pan,
        aadhaar: newData.kycDetails.aadhaar,
        // employment_company_name: 'ABC Inc',
        // employment_company_type: 'Tech',
        // employment_total_exp: '5',
        // employment_annual_salary: '100000',
        // employment_receive_salary_type: 'Bank',
        role: 'Lender',
      }
    )
    if(resp){
      navigate('/dashboard')
    }

    console.log(resp)
    // handleNext()
  }
  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col'
    >
     <div
        variant='h3'
        className='text-left capitalize text-[20px] mt-[46px]  font-light text-[#35354D] font-[roboto] mb-4'
      >
       Kyc
      </div>
      <Box className='flex mt-[34px] flex-col gap-4'>
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
                value: ValidationRules.pancard,
                message: 'Please enter the correct PAN.',
              },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label='PAN'
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
      <Box className='flex justify-between mt-4'>
      <Button
        variant='contained'
        disabled={false}
        onClick={handleBack}
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
          Submit
        </Button>
      
      </Box>
    
    </Box>
  )
}

export default KYC

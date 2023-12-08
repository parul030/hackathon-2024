import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ValidationRules } from '../../constants/ValidationRules'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const ContactDetails = ({
  handleNext,
  handleBack,
  investorData,
  setInvestorData,
  role = 'Lender',
}) => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })

  const { errors } = formState
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false)
  const [cookies, setCookie] = useCookies(['user'])
  const [serverError, setServorError] = useState()

  const onSubmit = async (data) => {
    console.log(data)
    
    try {
      const resp = await axios.post(
        `https://finease-b5044a79ab8d.herokuapp.com/${
          !hideConfirmPassword ? 'api/v1/register' : 'api/v1/login'
        }`,
        { email: data.emailId, role: role, password: data.password }
      )
      let newData = {}
      if (investorData) {
        newData = { ...investorData }
      }
      newData = { ...newData, contactDetails: data }
      setInvestorData(newData)
      setCookie('accessJWT', resp.data.response.data.accessJWT, { path: '/' })
      localStorage.setItem('memberId', resp.data.response.data.additionalData.member_id)
      handleNext()
      setServorError(undefined)
    } catch (error) {
      setServorError('Something went wrong!!')
    }
  }

  const emailCheck = async (email) => {
    try {
      const resp = await axios.post(
        'https://finease-b5044a79ab8d.herokuapp.com/get-user-by-email',
        { email }
      )
      setHideConfirmPassword(true)
      console.log(resp)
    } catch (error) {
      setHideConfirmPassword(false)
      console.log(error)
    }
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
        contact details
      </div>
      <Box className='flex mt-[34px] flex-col gap-4'>
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
              onBlur={(e) => {
                onBlur(e)
                emailCheck(e.currentTarget.value)
              }}
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
              label={!hideConfirmPassword ? 'Set Password' : 'Enter Password'}
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
        {!hideConfirmPassword && (
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
        )}
        {errors.confirmPassword && (
          <Typography className='text-red-400 text-sm'>
            {errors.confirmPassword.message}
          </Typography>
        )}
      </Box>
      {serverError && (
        <Typography className='text-red-400 text-sm'>{serverError}</Typography>
      )}
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

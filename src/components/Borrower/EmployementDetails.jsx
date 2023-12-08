import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import dayjs from 'dayjs'
import axios from 'axios'
import RadioOptions from '../Common/radioOptions'
import SquareOptions from '../Common/squareOptions'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { CheckBox } from '@mui/icons-material'

const recieveSalaries = [
  { label: 'bank transfer' },
  { label: 'cash' },
  { label: 'cheque' },
]

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))

const EmployementDetails = ({
  handleNext,
  handleBack,
  investorData,
  setInvestorData,
}) => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })
  const [empType, setEmpType] = useState()
  const [recieveSalary, setRecieveSalary] = useState()
  const [payingEMI, setPayingEMI] = useState(false)

  const { errors } = formState

  const onSubmit = async (data) => {
    debugger
    console.log(data)
    let newData = {}
    if (investorData) {
      newData = { ...investorData }
    }
    newData = { ...newData, empDetails: data }
    setInvestorData(newData)
    const resp = await axios.post(
      `https://finease-b5044a79ab8d.herokuapp.com/api/v1/member/update`,
      {
        fullname: newData.personalDetails.fullName,
        mobile_no: newData.personalDetails.mobileNo,
        email: newData.contactDetails.emailId,
        password: newData.contactDetails.password,
        date_of_birth: dayjs(newData.contactDetails.dob).format('YYYY-MM-DD'),
        gender: newData.personalDetails.gender,
        marital_status: newData.personalDetails.maritialStatus,
        address: `${
          newData.contactDetails.addressLine1
            ? newData.contactDetails.addressLine1
            : ''
        } ${
          newData.contactDetails.addressLine2
            ? newData.contactDetails.addressLine2
            : ''
        } ${
          newData.contactDetails.city ? newData.contactDetails.addressLine1 : ''
        } ${
          newData.contactDetails.pincode ? newData.contactDetails.pincode : ''
        }`.trim(),
        pan: newData.contactDetails.pan,
        employment_company_name: newData.empDetails.companyName,
        employment_company_type: newData.empDetails.companyType,
        employment_total_exp: newData.empDetails.expInYrs,
        // employment_annual_salary: Number(newData.empDetails.monthlyIncome) * 12,
        // employment_receive_salary_type: recieveSalary,
        role: 'Borrower',
      }
    )
    console.log(resp)
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
        <RadioOptions
          options={[{ label: 'Salaried' }, { label: 'Self Employed' }]}
          selectedOption={empType}
          title={'Employment Type'}
          handleOptionChange={setEmpType}
        />
        <Controller
          control={control}
          name='monthlyIncome'
          render={({ field: { value, onChange, onBlur } }) => (
            <TextField
              label='Monthly Income'
              variant='outlined'
              name='monthlyIncome'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className='w-full'
            />
          )}
        />
        <SquareOptions
          options={recieveSalaries}
          selectedOption={recieveSalary}
          handleOptionChange={setRecieveSalary}
          title={'Recieve Salary'}
        />
        <Box>
          <Typography component={'span'}>
            Are you currently paying any EMIs?
          </Typography>
          <IOSSwitch
            sx={{ m: 1 }}
            value={payingEMI}
            onClick={() => {
              setPayingEMI((payingEMI) => !payingEMI)
            }}
          />
          {payingEMI && (
            <Controller
              control={control}
              name='emi'
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='Monthly EMI'
                  variant='outlined'
                  name='emi'
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  className='w-full'
                />
              )}
            />
          )}
          <Box className='flex'>
            <span>
              <CheckBox color='success' />
            </span>
            <Typography>
              You acknowledge that checking your credit score is your
              responsibility, and you agree to use authorized, secure channels
              while understanding the potential impact on your credit rating
            </Typography>
          </Box>
        </Box>
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

import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ValidationRules } from '../../constants/ValidationRules'
import CustomizedSlider from '../Common/slider'
import { currencyFormat } from '../Utils'
import OvalOptions from '../Common/ovalOptions'
import SquareOptions from '../Common/squareOptions'

const loanPurposes = [
  { label: 'credit card refinancing' },
  { label: 'debt consolidation' },
  { label: 'home improvement' },
  { label: 'medical expenses' },
  { label: 'home buying' },
  { label: 'car financing' },
  { label: 'green loan' },
  { label: 'business' },
  { label: 'vacation' },
  { label: 'moving & relocation' },
  { label: 'major purchases' },
]

const LoanDetails = ({ handleNext, handleBack }) => {
  const { formState, handleSubmit, control } = useForm({
    mode: 'onBlur',
  })
  const [loanValue, setLoanValue] = useState(currencyFormat(100000))
  const [tenure, setTenure] = useState()
  const [loanPurpose, setLoanPurpose] = useState()

  const { errors } = formState

  const getAgeArray = () => {
    return [...Array(30)].map((item, i) => {
      return { label: i + 1 }
    })
  }

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
      <div
        variant='h3'
        className='text-left text-[20px] mt-[46px]  font-light text-[#35354D] font-[roboto] mb-4'
      >
        Personal Details
      </div>
      <Box className='flex mt-[34px] flex-col gap-4'>
        <CustomizedSlider
          value={loanValue}
          setValue={setLoanValue}
          minRange={100000}
          maxRange={50000000}
          steps={100000}
          title={'Loan Amount'}
          marks={[
            {
              value: 100000,
              label: '₹1L',
            },
            {
              value: 50000000,
              label: '₹5Cr',
            },
          ]}
        />
        <OvalOptions
          options={getAgeArray()}
          selectedOption={tenure}
          handleOptionChange={setTenure}
          title={"Loan Tenure"}
        />
        <SquareOptions
          options={loanPurposes}
          selectedOption={loanPurpose}
          handleOptionChange={setLoanPurpose}
          title={"Loan Option"}
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

export default LoanDetails

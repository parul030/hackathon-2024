import { Button as MuiButton, Box } from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material/styles'

const Button = styled(MuiButton)(({ theme, pill, active }) => ({
  borderRadius: 20,
  border: '0px',
  backgroundColor: active ? '#FFF1E0' : '#FFF1E0',
  '&:hover': {
    backgroundColor: '#FFF1E0',
    border: '0px',
  },
}))

const RadioOptions = (options, selectedOption, handleOptionChange) => {
  const [selectedGender, setSelectedOption] = useState('')

  const handleGenderChange = (gender) => {
    setSelectedOption(gender)
  }

  return (
    <Box
      className={
        'flex justify-center items-center bg-[#FFF1E0] w-fit m-auto rounded-2xl'
      }
    >
      {/* {options.forEach(({ label, icon }) => (
        <Button
          className={'mx-2'}
          variant={selectedOption === label ? 'contained' : 'outlined'}
          onClick={() => handleOptionChange(label)}
          active={selectedOption === label}
        >
          {label}
        </Button>
      ))} */}
    </Box>
  )
}

export default RadioOptions

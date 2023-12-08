import * as React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import { Box, TextField } from '@mui/material'
import { currencyFormat } from '../Utils'

const PrettoSlider = styled(Slider)({
  color: '#36C3D6',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 0,
    height: 0,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#36C3D6',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
  },
})

export default function CustomizedSlider({
  minRange,
  maxRange,
  steps,
  marks,
  value,
  setValue,
  title,
}) {
  const convertToNumber = (stringNum) => {
    return Number(stringNum.replace(/,/g, ''))
  }

  const handleSetValue = (stringValue) => {
    setValue(currencyFormat(stringValue))
  }

  const handleSliderChange = (event, newValue) => {
    handleSetValue(typeof newValue === 'number' ? newValue : minRange)
  }

  const handleInputChange = (event) => {
    let inputValue = convertToNumber(event.target.value)
    !isNaN(inputValue) && handleSetValue(inputValue)
  }

  const handleBlur = () => {
    if (convertToNumber(value) < minRange) {
      handleSetValue(minRange)
    } else if (convertToNumber(value) > maxRange) {
      handleSetValue(maxRange)
    }
  }

  return (
    <Box>
      <TextField
        label={title}
        variant='outlined'
        name='fullName'
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className='w-full'
      />
      <PrettoSlider
        valueLabelDisplay='auto'
        aria-label='pretto slider'
        defaultValue={minRange}
        // disabled={!isActive}
        min={minRange}
        max={maxRange}
        step={steps}
        marks={marks}
        value={
          convertToNumber(value) > maxRange ? maxRange : convertToNumber(value)
        }
        onChange={handleSliderChange}
      />
    </Box>
  )
}

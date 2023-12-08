import { Button as MuiButton, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Button = styled(MuiButton)(({ theme, pill, active }) => ({
  borderRadius: 20,
  border: '0px',
  backgroundColor: active ? '#F5BD74' : '#FFF1E0',
  '&:hover': {
    backgroundColor: '#F5BD74',
    border: '0px',
  },
}))

const RadioOptions = ({
  options,
  selectedOption,
  handleOptionChange,
  title,
}) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Box
        className={
          'flex justify-start bg-[#FFF1E0] w-fit rounded-2xl'
        }
      >
        {options.map(({ label, icon }) => {
          return (
            <Button
              className={'mx-2'}
              variant={selectedOption === label ? 'contained' : 'outlined'}
              onClick={() => handleOptionChange(label)}
              active={selectedOption === label}
            >
              {icon && <span>{icon}</span>}
              {label}
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}

export default RadioOptions

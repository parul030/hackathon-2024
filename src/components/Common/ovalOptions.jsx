import { Button as MuiButton, Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Button = styled(MuiButton)(({ theme, pill, active }) => ({
  borderRadius: 9999,
  border: '1px',
  height: 60,
  width: 50,
  backgroundColor: active ? '#F5BD74' : '#FFF1E0',
  '&:hover': {
    backgroundColor: '#F5BD74',
    border: '1px',
  },
}))

const OvalOptions = ({
  options,
  selectedOption,
  handleOptionChange,
  title,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {title && (
          <Grid item xs={12}>
            <Typography>{title}</Typography>
          </Grid>
        )}
        {options.map(({ label, icon }) => {
          return (
            <Grid item xs={2}>
              <Button
                variant={selectedOption === label ? 'contained' : 'outlined'}
                onClick={() => handleOptionChange(label)}
                active={selectedOption === label}
              >
                {icon && <span>{icon}</span>}
                {label}
              </Button>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default OvalOptions

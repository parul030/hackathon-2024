import { Button as MuiButton, Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Button = styled(MuiButton)(({ theme, pill, active }) => ({
  borderRadius: 6,
  border: '1px #C2C2C9 solid',
  height: 200,
  width: 150,
  backgroundColor: active ? '#F5BD74' : '#FFFF',
  '&:hover': {
    backgroundColor: '#F5BD74',
  },
}))

const SquareOptions = ({
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
            <Grid item xs={3}>
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

export default SquareOptions

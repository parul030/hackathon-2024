import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Payment(props:any) {
    const {radioButnChange ,radioButton } = props
  return (
    <div>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={radioButton}
        onChange={radioButnChange}
      >
        <FormControlLabel className='mb-2' value="Funds" control={<Radio />} label=" Funds available details" />
        <FormControlLabel className='mb-2' value="Pay" control={<Radio />} label="Pay via UPI" />
        <FormControlLabel className='mb-2' value="Netbanking" control={<Radio />} label="Netbanking" />
        <FormControlLabel className='mb-2' value="Others" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}
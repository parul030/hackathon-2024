import { Button, Box } from '@mui/material';
import { useState } from 'react';

const GenderButtons = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <Box className={'flex justify-center items-center'}>
      <Button
        className={'mx-2'}
        variant={selectedGender === 'male' ? 'contained' : 'outlined'}
        onClick={() => handleGenderChange('male')}
      >
        Male
      </Button>
      <Button
        className='mx-2'
        variant={selectedGender === 'female' ? 'contained' : 'outlined'}
        onClick={() => handleGenderChange('female')}
      >
        Female
      </Button>
      <Button
        className='mx-2'
        variant={selectedGender === 'other' ? 'contained' : 'outlined'}
        onClick={() => handleGenderChange('other')}
      >
        Other
      </Button>
    </Box>
  );
};

export default GenderButtons;

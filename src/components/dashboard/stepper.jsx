import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import PropTypes from 'prop-types'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'


const steps = ['choose risk type', 'select category', 'select borrower'];

export default function HorizontalLinearStepper(props) {

  const {activeStep} = props
  // const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped?.has(step);
  };

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 14,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#D9D9FF',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#86EA9C',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))



function ColorlibStepIcon(props) {
  const { active, completed, className, icon } = props

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
        
      {icon}
    </ColorlibStepIconRoot>
  )
}



  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: '#F3F4F6',
    zIndex: 1,
    color: '#fff',
    width: 32,
    height: 32,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: '#D9D9FF',
    }),
    ...(ownerState.completed && {
      backgroundColor: '#86EA9C',
    }),
  }))

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
    sno: PropTypes.string,
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}
       connector={<ColorlibConnector />}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={ColorlibStepIcon}  {...labelProps}>
              <div className='text-[#DADAFF]'>{label}</div>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

    </Box>
  );
}
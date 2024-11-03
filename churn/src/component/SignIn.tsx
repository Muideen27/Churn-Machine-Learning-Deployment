import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} className="tw-flex tw-justify-center tw-items-center">
      <Box className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-md tw-w-96">
        <Typography variant="h5" className="tw-font-bold tw-text-center tw-mb-6">Sign In</Typography>
        
        {/* Email and Password Fields */}
        <TextField
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          className="tw-mb-4"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          className="tw-mb-6"
        />

        {/* Sign In Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="tw-mb-4 tw-bg-gray-800 tw-text-white"
        >
          Sign In
        </Button>

        {/* Sign In with Google */}
        <Button
          variant="outlined"
          fullWidth
          className="tw-mb-4 tw-border-gray-800 tw-text-gray-800"
        >
          Sign in with Google
        </Button>

        {/* Switch to Sign Up */}
        <Typography variant="body2" className="tw-text-center tw-mt-4">
          Don't have an account?{' '}
          <Button color="primary" onClick={() => navigate('/signup')} className="tw-font-bold">
            Sign Up
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default SignIn;

import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

interface SignInProps {
  onClose: () => void;
  onSwitch: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose, onSwitch }) => {
  return (
    <Modal open={true} onClose={onClose} className="tw-flex tw-justify-center tw-items-center">
      <Box
        className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg"
        sx={{
          width: '100%',
          maxWidth: 400, // Limit width for a more compact look
          mx: 'auto',
          my: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" className="tw-font-bold tw-text-center tw-mb-6">
          Sign In
        </Typography>

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
          <Button color="primary" onClick={onSwitch} className="tw-font-bold">
            Sign Up
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default SignIn;

import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

interface SignUpProps {
  onClose: () => void;
  onSwitch: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onClose, onSwitch }) => {
  return (
    <Modal open={true} onClose={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          backgroundColor: 'white', // White background
          padding: 4, // Padding inside the modal
          borderRadius: 2, // Rounded corners
          boxShadow: 3, // Shadow for elevation
          width: '100%',
          maxWidth: 400, // Max width to contain it
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 3 }}>
          Sign Up
        </Typography>

        {/* Sign Up with Google */}
        <Button
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2, borderColor: 'gray', color: 'gray' }}
        >
          Sign up with Google
        </Button>

        {/* Email and Password Fields */}
        <TextField
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 3 }}
        />

        {/* Sign Up Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginBottom: 2, backgroundColor: 'gray', color: 'white' }}
        >
          Sign Up
        </Button>

        {/* Switch to Sign In */}
        <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
          Already have an account?{' '}
          <Button color="primary" onClick={onSwitch} sx={{ fontWeight: 'bold' }}>
            Sign In
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default SignUp;

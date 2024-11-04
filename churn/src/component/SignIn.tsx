import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography, Link } from '@mui/material';

interface SignInProps {
  onClose: () => void;
  onSwitch: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose, onSwitch }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const handleForgotPasswordOpen = () => {
    setForgotPasswordOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
  };

  return (
    <>
      <Modal open={true} onClose={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 3 }}>
            Sign In
          </Typography>

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
            sx={{ marginBottom: 1 }}
          />

          {/* Forgot Password Link */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 3 }}>
            <Link href="#" underline="none" sx={{ color: 'gray' }} onClick={handleForgotPasswordOpen}>
              Forgot Password?
            </Link>
          </Box>

          {/* Sign In Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginBottom: 2, backgroundColor: 'gray', color: 'white' }}
          >
            Sign In
          </Button>

          {/* Switch to Sign Up */}
          <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
            Don't have an account?{' '}
            <Button color="primary" onClick={onSwitch} sx={{ fontWeight: 'bold' }}>
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Modal>

      {/* Forgot Password Modal */}
      <Modal open={forgotPasswordOpen} onClose={handleForgotPasswordClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 3 }}>
            Reset Password
          </Typography>
          
          <Typography variant="body2" sx={{ marginBottom: 2, textAlign: 'center', color: 'gray' }}>
            Enter your email address and we'll send you instructions to reset your password.
          </Typography>

          {/* Email Input for Forgot Password */}
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 3 }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ backgroundColor: 'gray', color: 'white' }}
            onClick={handleForgotPasswordClose}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SignIn;

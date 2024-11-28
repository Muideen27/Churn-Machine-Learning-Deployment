import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography, Link } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface SignInProps {
  onClose: () => void;
  onSwitch: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose, onSwitch }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SignIn form submitted');

    try {
      console.log('Sending signin request with:', { email, password }); // Log request payload
      const response = await axios.post('https://churn-machine-learning-deployment.onrender.com/auth/signin', {
        email,
        password,
      });

      if ((response.data as { access_token: string }).access_token) {
        localStorage.setItem('access_token', (response.data as { access_token: string }).access_token);
        setError('');

        // Redirect to home page
        navigate('/home');
        onClose();
      }
    } catch (err: any) {
      console.log('Signin error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Sign-in failed!');
    }
  };

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

          {/* Error Message */}
          {error && (
            <Typography variant="body2" sx={{ color: 'red', marginBottom: 2 }}>
              {error}
            </Typography>
          )}

          {/* Email and Password Fields */}
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 3 }}
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
            onClick={handleSignIn}
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

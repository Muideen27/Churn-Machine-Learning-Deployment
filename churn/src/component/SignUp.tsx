import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import axios from 'axios';

interface SignUpProps {
  onClose: () => void;
  onSwitch: () => void;
}

interface SignUpResponse {
  message: string;
}

const SignUp: React.FC<SignUpProps> = ({ onClose, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SignUp form submitted');

    try {
      console.log('Sending signup request with:', { email, password }); // Log request payload
      const response = await axios.post<SignUpResponse>('https://churn-machine-learning-deployment.onrender.com/auth/signup', {
        email,
        password,
      });

      console.log('Signup response:', response.data);
      setSuccess(response.data.message);
      setError('');
    } catch (err: any) {
      console.log('Signup error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Sign-up failed!');
      setSuccess('');
    }
  };

  return (
    <Modal
      open={true}
      onClose={onClose}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
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
          Sign Up
        </Typography>

        {error && <Typography color="error" variant="body2">{error}</Typography>}
        {success && <Typography color="success" variant="body2">{success}</Typography>}

        <Button
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2, borderColor: 'gray', color: 'gray' }}
        >
          Sign up with Google
        </Button>

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

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginBottom: 2, backgroundColor: 'gray', color: 'white' }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

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

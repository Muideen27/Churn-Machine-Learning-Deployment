import React, { useState } from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import Header from './Header';
import Sponsor from './Sponsor';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LandingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  // Functions to control the modal
  const handleOpenSignIn = () => {
    setIsSignIn(true);
    setModalOpen(true);
  };

  const handleOpenSignUp = () => {
    setIsSignIn(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container maxWidth="lg" className="tw-h-screen tw-bg-white tw-flex tw-flex-col">
      {/* Header Section */}
      <Header
        onOpenSignIn={handleOpenSignIn}
        onOpenSignUp={handleOpenSignUp}
      />

      {/* Main Content Section */}
      <Grid container spacing={4} alignItems="center" className="tw-flex-grow tw-py-16">
        {/* Left Side - CTA Section */}
        <Grid item xs={12} md={6} marginTop={10}>
          <Box>
            <Typography variant="h4" className="tw-font-bold tw-text-gray-800 tw-mb-4">
              Ready to Retain More Customers?
            </Typography>
            <p className="tw-text-lg tw-text-gray-600 tw-mb-6">
              Our churn prediction model leverages transactional and behavioral data across 18 variables to proactively identify customers at risk of churning, helping reduce the bank’s exposure to customer loss and enabling targeted retention strategies.
            </p>
            <Button
              variant="contained"
              color="primary"
              className="tw-bg-primary tw-text-white tw-font-semibold tw-px-8 tw-py-3"
              onClick={handleOpenSignIn} // Open SignIn modal when clicked
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        {/* Right Side - SVG Image */}
        <Grid item xs={12} md={6} marginTop={10} className="tw-flex tw-justify-center">
          <img
            src="/02.svg"
            alt="Churn Prediction Illustration"
            className="tw-max-w-full tw-h-auto"
            style={{ maxWidth: '100%' }}
          />
        </Grid>
      </Grid>

      {/* Sponsor Section */}
      <Sponsor />

      {/* Conditionally render SignIn or SignUp modal */}
      {modalOpen && isSignIn ? (
        <SignIn onClose={handleCloseModal} onSwitch={handleOpenSignUp} />
      ) : modalOpen && !isSignIn ? (
        <SignUp onClose={handleCloseModal} onSwitch={handleOpenSignIn} />
      ) : null}
    </Container>
  );
};

export default LandingPage;

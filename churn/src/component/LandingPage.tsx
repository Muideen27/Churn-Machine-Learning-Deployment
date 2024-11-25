import React from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import Header from './Header';
import Sponsor from './Sponsor';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="lg" className="tw-h-screen tw-bg-white tw-flex tw-flex-col">
      {/* Header Section */}
      <Header />

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
              component={Link} to='/home'
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        {/* Right Side - SVG Image */}
        <Grid item xs={12} md={6} marginTop={10} className="tw-flex tw-justify-center">
          <img
            src="/src/assets/02.svg"
            alt="Churn Prediction Illustration"
            className="tw-max-w-full tw-h-auto"
            style={{ maxWidth: '100%' }} // Set max width to 50% of its original size
          />
        </Grid>
      </Grid>

      {/* Sponsor Section */}
      <Sponsor />
      
    </Container>
  );
};

export default LandingPage;

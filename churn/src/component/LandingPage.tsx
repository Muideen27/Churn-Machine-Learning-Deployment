import React from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import Header from './Header';

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
            <Typography variant="h3" className="tw-font-bold tw-text-gray-800 tw-mb-4">
              Ready to Retain More Customers?
            </Typography>
            <Typography variant="body1" className="tw-text-lg tw-text-gray-600 tw-mb-6">
              Predict and Prevent Customer Churn with AI-Driven Insights
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="tw-bg-primary tw-text-white tw-font-semibold tw-px-8 tw-py-3"
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
    </Container>
  );
};

export default LandingPage;

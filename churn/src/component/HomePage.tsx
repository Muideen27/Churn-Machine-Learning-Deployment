import React from 'react';
import { Box, Typography, Container, Divider, Button } from '@mui/material';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" className="tw-h-screen tw-flex tw-flex-col tw-py-8 tw-bg-gradient-to-r tw-from-blue-50 tw-to-indigo-50">
      {/* Header Section */}
      <MainHeader />

      {/* Hero Section */}
      <Box className="tw-flex tw-flex-col tw-items-center tw-text-center tw-my-8 tw-py-16 tw-bg-gradient-to-r tw-from-blue-500 tw-to-indigo-500 tw-rounded-lg tw-shadow-lg">
        <Typography
          variant="h3"
          className="tw-font-bold tw-text-white tw-mb-4 tw-transition-transform hover:tw-scale-105"
          sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}
        >
          Welcome to the Customer Churn Prediction Platform
        </Typography>
        <Typography variant="body1" className="tw-text-lg tw-text-gray-200 tw-mb-6">
          Unlock actionable insights to predict and prevent customer churn using cutting-edge machine learning models.
        </Typography>
      </Box>

      <br />

      {/* Animated Divider */}
      <Divider
        className="tw-my-8"
        sx={{
          height: '3px',
          background: 'linear-gradient(to right, #4CAF50, #FF5722)',
          animation: 'glow 2s ease-in-out infinite',
          '@keyframes glow': {
            '0%': { opacity: 0.7 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.7 },
          },
        }}
      />

      {/* Business Context Section */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          className="tw-font-semibold tw-text-gray-800 tw-mb-2 tw-transition-transform hover:tw-scale-105"
        >
          Business Context
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700 tw-leading-relaxed tw-mb-4">
          In today's highly competitive financial landscape, customer retention is more critical than ever for banks.
          FINTECH Bank has observed a concerning trend: a growing number of customers are closing their accounts or
          significantly reducing their engagement with the bank's services. Customer churn not only impacts the bank's
          revenue but also increases the cost of acquiring new customers to replace those lost.
        </Typography>
      </Box>

      <Divider
        className="tw-my-8"
        sx={{
          height: '3px',
          background: 'linear-gradient(to right, #4CAF50, #FF5722)',
          animation: 'glow 2s ease-in-out infinite',
          '@keyframes glow': {
            '0%': { opacity: 0.7 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.7 },
          },
        }}
      />

      {/* Objective Section */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          className="tw-font-semibold tw-text-gray-800 tw-mb-2 tw-transition-transform hover:tw-scale-105"
        >
          Project Objective
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700 tw-leading-relaxed tw-mb-4">
          The objective of this project is to develop a robust Machine Learning model that accurately predicts customer
          churn for FINTECH Bank. By leveraging historical customer data—including transaction patterns, product usage,
          account tenure, and demographic information—the model aims to identify key factors contributing to customer
          attrition.
        </Typography>
      </Box>

      <Divider
        className="tw-my-8"
        sx={{
          height: '3px',
          background: 'linear-gradient(to right, #4CAF50, #FF5722)',
          animation: 'glow 2s ease-in-out infinite',
          '@keyframes glow': {
            '0%': { opacity: 0.7 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.7 },
          },
        }}
      />

      {/* Data Description Section */}
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          className="tw-font-semibold tw-text-gray-800 tw-mb-2 tw-transition-transform hover:tw-scale-105"
        >
          Data Description
        </Typography>
        <Box className="tw-grid tw-grid-cols-2 tw-gap-4 tw-text-gray-700">
          {/* Map the data fields dynamically for better scalability */}
          {[
            { title: 'Acct_ID', description: 'A unique identifier for each customer account.' },
            { title: 'YEARS_WITH_BANK', description: 'The number of years a customer has been with the bank.' },
            { title: 'CHURN', description: 'A binary indicator of whether the customer has churned.' },
            { title: 'RISK_RATING', description: 'A rating that reflects the financial risk associated with the customer.' },
            { title: 'CURRENCY', description: 'The currency used in the customer’s account (e.g., NGN, USD, EUR).' },
            { title: 'AVE BAL', description: 'The average balance in the customer’s account over a specified period.' },
            { title: 'SCHEME_TYPE', description: 'The type of banking scheme or product the customer is using.' },
            { title: 'MOBILE_APP_ADOPTION', description: 'Indicates whether the customer uses the bank’s mobile app.' },
            { title: 'LAST_12_MONTHS_CREDIT_VOLUME', description: 'Total volume of credit transactions over the last year.' },
            { title: 'LAST_12_MONTHS_DEBIT_VOLUME', description: 'Total volume of debit transactions over the last year.' },
          ].map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              className="tw-transition-transform hover:tw-scale-105"
            >
              <strong>{item.title}:</strong> {item.description}
            </Typography>
          ))}
        </Box>
      </Box>

      <Divider className="tw-my-8" />

      {/* Call to Action */}
      <Box className="tw-text-center tw-mt-12">
        <Button
          variant="contained"
          color="primary"
          className="tw-bg-primary tw-text-white tw-font-semibold tw-px-8 tw-py-3 tw-rounded-full hover:tw-bg-indigo-600 hover:tw-shadow-lg"
          component={Link}
          to="/predict"
        >
          Explore the Model
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;

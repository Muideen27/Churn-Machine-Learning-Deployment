import React from 'react';
import { Box, Typography, Container, Divider, Button } from '@mui/material';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" className="tw-h-screen tw-flex tw-flex-col tw-py-8 tw-bg-white">
      {/* Header Section */}
      <MainHeader />

      {/* Main Content Section */}
      <Box className="tw-flex tw-flex-col tw-text-center tw-my-8">
        <Typography variant="h3" className="tw-font-bold tw-text-primary tw-mb-4">
          Welcome to the Customer Churn Prediction Platform
        </Typography>
        <Typography variant="body1" className="tw-text-lg tw-text-gray-600">
          Unlock actionable insights to predict and prevent customer churn using cutting-edge machine learning models.
        </Typography>
      </Box>

      <Divider className="tw-my-8" />

      {/* Business Context Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" className="tw-font-semibold tw-text-gray-800 tw-mb-2">
          Business Context
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700">
          In today's highly competitive financial landscape, customer retention is more critical than ever for banks.
          FINTECH Bank has observed a concerning trend: a growing number of customers are closing their accounts or
          significantly reducing their engagement with the bank's services. Customer churn not only impacts the bank's
          revenue but also increases the cost of acquiring new customers to replace those lost.
        </Typography>
      </Box>

      <Divider className="tw-my-8" />

      {/* Objective Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" className="tw-font-semibold tw-text-gray-800 tw-mb-2">
          Project Objective
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700">
          The objective of this project is to develop a robust Machine Learning model that accurately predicts customer
          churn for FINTECH Bank. By leveraging historical customer data—including transaction patterns, product usage,
          account tenure, and demographic information—the model aims to identify key factors contributing to customer
          attrition.
        </Typography>
      </Box>

      <Divider className="tw-my-8" />

      {/* Data Description Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" className="tw-font-semibold tw-text-gray-800 tw-mb-2">
          Data Description
        </Typography>
        <Box className="tw-grid tw-grid-cols-2 tw-gap-4 tw-text-gray-700">
          <Typography variant="body2"><strong>Acct_ID:</strong> Unique identifier for each customer account.</Typography>
          <Typography variant="body2"><strong>YEARS_WITH_BANK:</strong> Number of years a customer has been with the bank.</Typography>
          <Typography variant="body2"><strong>CHURN:</strong> Binary indicator of customer churn.</Typography>
          <Typography variant="body2"><strong>RISK_RATING:</strong> Customer financial risk rating.</Typography>
          <Typography variant="body2"><strong>CURRENCY:</strong> Account currency type.</Typography>
          <Typography variant="body2"><strong>AVE BAL:</strong> Average balance in the account.</Typography>
          <Typography variant="body2"><strong>MOBILE_APP_ADOPTION:</strong> Mobile app usage indicator.</Typography>
          <Typography variant="body2"><strong>INTERNET_BANKING_ADOPTION:</strong> Internet banking usage indicator.</Typography>
          <Typography variant="body2"><strong>LAST_12_MONTHS_CREDIT_VOLUME:</strong> Total credit transactions over the last year.</Typography>
          <Typography variant="body2"><strong>LAST_12_MONTHS_DEBIT_VOLUME:</strong> Total debit transactions over the last year.</Typography>
        </Box>
      </Box>

      <Divider className="tw-my-8" />

      {/* Call to Action */}
      <Box className="tw-text-center tw-mt-12">
        <Button variant="contained" color="primary" className="tw-bg-primary tw-text-white tw-font-semibold tw-px-8 tw-py-3" component={Link} to="/predict">
          Explore the Model
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;

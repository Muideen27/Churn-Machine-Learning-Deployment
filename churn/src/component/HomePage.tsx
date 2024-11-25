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
          <Typography variant="body2"><strong>Acct_ID:</strong> A unique identifier for each customer account.</Typography>
          <Typography variant="body2"><strong>YEARS_WITH_BANK:</strong> The number of years a customer has been with the bank.</Typography>
          <Typography variant="body2"><strong>CHURN:</strong> A binary indicator of whether the customer has churned (e.g., 0 for not churned, 1 for churned).</Typography>
          <Typography variant="body2"><strong>RISK_RATING:</strong> A rating or score that reflects the financial risk associated with the customer.</Typography>
          <Typography variant="body2"><strong>CURRENCY:</strong> The currency used in the customer’s account (e.g., NGN, USD, EUR).</Typography>
          <Typography variant="body2"><strong>AVE BAL:</strong> The average balance in the customer’s account over a specified period.</Typography>
          <Typography variant="body2"><strong>SCHEME_TYPE:</strong> The type of banking scheme or product the customer is using. Y = Yes; N = No.</Typography>
          <Typography variant="body2"><strong>MOBILE_APP_ADOPTION:</strong> Indicates whether the customer uses the bank’s mobile app. Y = Yes; N = No.</Typography>
          <Typography variant="body2"><strong>INTERNET_BANKING_ADOPTION:</strong> Indicates whether the customer uses internet banking. Y = Yes; N = No.</Typography>
          <Typography variant="body2"><strong>USSD_BANKING_ADOPTION:</strong> Indicates whether the customer uses USSD banking services. Y = Yes; N = No.</Typography>
          <Typography variant="body2"><strong>DIGITAL_LOAN:</strong> Indicates whether the customer has taken a digital loan. Y = Yes; N = No.</Typography>
          <Typography variant="body2"><strong>UNSECURED_LOAN:</strong> Indicates whether the customer has an unsecured loan. Y = Yes; N = No.</Typography>
          <Typography variant="body2"><strong>TERMLOAN_STATUS:</strong> Status of the customer’s term loan. Y = Yes; N = No.</Typography>
          <Typography variant="body2"><strong>CREDIT_CARD:</strong> Indicates whether the customer holds a credit card with the bank. Y = Yes; N = No.</Typography>
          <Typography variant="body2"><strong>SUBSEGMENT:</strong> A total volume of credit transactions over the last 12 months.</Typography>
          <Typography variant="body2"><strong>LAST_12_MONTHS_CREDIT_VOLUME:</strong> Total volume of credit transactions over the last 12 months.</Typography>
          <Typography variant="body2"><strong>LAST_12_MONTHS_DEBIT_VOLUME:</strong> Total volume of debit transactions over the last 12 months.</Typography>
          <Typography variant="body2"><strong>LAST_12_MONTHS_DEBIT_VALUE:</strong> Total value of debit transactions over the last 12 months.</Typography>
          <Typography variant="body2"><strong>LAST_12_MONTHS_CREDIT_VALUE:</strong> Total value of credit transactions over the last 12 months.</Typography>
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

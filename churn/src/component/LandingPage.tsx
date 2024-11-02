import React from 'react';
import { Box, Button, Typography, Container, Divider } from '@mui/material';
import Header from './Header';

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="lg" className="tw-h-screen tw-flex tw-flex-col tw-py-8 tw-bg-white">
      {/* Header Section */}
        <Header />

      {/* Main Content Section */}
      <Box className="tw-flex tw-flex-col tw-items-center tw-text-center tw-mb-12">
        <Typography variant="h3" className="tw-font-bold tw-text-primary tw-mb-2">
          Welcome to the Churn Prediction Project
        </Typography>
        <Typography variant="body1" className="tw-text-lg tw-text-gray-600">
          Discover how FINTECH Bank is using machine learning to understand and reduce customer churn.
        </Typography>
      </Box>

      <Divider className="tw-my-8" />

      {/* Blog Content */}
      <Box className="tw-space-y-8">
        {/* Business Context */}
        <Box>
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

        {/* Project Objective */}
        <Box>
          <Typography variant="h5" className="tw-font-semibold tw-text-gray-800 tw-mb-2">
            Project Objective
          </Typography>
          <Typography variant="body1" className="tw-text-gray-700">
            The objective of this project is to develop a robust Machine Learning model that accurately predicts customer
            churn for FINTECH Bank. By leveraging historical customer data—including transaction patterns, product usage,
            account tenure, and demographic information—the model aims to identify key factors contributing to customer
            attrition and enable the bank to take proactive measures.
          </Typography>
        </Box>

        {/* Data Description */}
        <Box>
          <Typography variant="h5" className="tw-font-semibold tw-text-gray-800 tw-mb-2">
            Data Description
          </Typography>
          <Typography variant="body1" className="tw-text-gray-700">
            Our dataset includes various features that describe the customer’s account activity and demographics:
          </Typography>
          <Box component="ul" className="tw-list-disc tw-list-inside tw-text-gray-700 tw-mt-2">
            <li><strong>Acct_ID:</strong> Unique identifier for each customer account.</li>
            <li><strong>YEARS_WITH_BANK:</strong> Number of years a customer has been with the bank.</li>
            <li><strong>CHURN:</strong> Binary indicator of whether the customer has churned.</li>
            <li><strong>RISK_RATING:</strong> Financial risk score associated with the customer.</li>
            <li><strong>CURRENCY:</strong> Account currency (e.g., NGN, USD, EUR).</li>
            <li><strong>AVE BAL:</strong> Average balance over a specified period.</li>
            {/* Add additional fields as necessary */}
          </Box>
        </Box>
      </Box>

      <Divider className="tw-my-8" />

      {/* Call to Action */}
      <Box className="tw-text-center tw-mt-12">
        <Button variant="contained" color="primary" className="tw-bg-primary tw-text-white tw-font-semibold tw-px-8 tw-py-3">
          Explore the Model
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;

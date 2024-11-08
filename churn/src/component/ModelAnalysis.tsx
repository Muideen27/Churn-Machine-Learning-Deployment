import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import MainHeader from './MainHeader';

const ModelAnalysis: React.FC = () => {
  return (
    <Container maxWidth="lg" className="tw-h-screen tw-flex tw-flex-col tw-py-8 tw-bg-white">
      {/* Header Section */}
      <MainHeader />

      {/* Page Title */}
      <Box className="tw-mb-8 tw-text-center">
        <Typography variant="h3" className="tw-font-bold tw-text-primary">
          Machine Learning Model Performance Analysis
        </Typography>
        <Typography variant="body1" className="tw-text-gray-600">
          A detailed comparison of various ML models used for predicting customer churn.
        </Typography>
      </Box>

      {/* Content Section */}
      <Grid container spacing={4} alignItems="stretch">
        {/* Image Section - Metrics Table */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="tw-p-4 tw-bg-white tw-h-full">
            <Typography variant="h6" className="tw-font-semibold tw-mb-2 tw-text-gray-800">
              Performance Metrics Table
            </Typography>
            <img
              src="/src/assets/analysisTable.png"
              alt="Performance Metrics Table"
              className="tw-w-full tw-rounded-md tw-object-contain tw-mb-2"
              style={{ maxHeight: '300px' }}
            />
            <Typography variant="body2" className="tw-text-gray-600">
              This table provides an overview of the model's accuracy, precision, recall, and F1-score.
            </Typography>
          </Paper>
        </Grid>

        {/* Image Section - Score Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="tw-p-4 tw-bg-white tw-h-full">
            <Typography variant="h6" className="tw-font-semibold tw-mb-2 tw-text-gray-800">
              Model Score Chart
            </Typography>
            <img
              src="/src/assets/analysisChart.png"
              alt="Model Score Chart"
              className="tw-w-full tw-rounded-md tw-object-contain tw-mb-2"
              style={{ maxHeight: '300px' }}
            />
            <Typography variant="body2" className="tw-text-gray-600">
              This bar chart visualizes the model's performance across training and test datasets.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Analysis Summary */}
      <Box className="tw-mt-8">
        <Typography variant="h5" className="tw-font-semibold tw-text-gray-800 tw-mb-2">
          Key Insights
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700 tw-mb-4">
          The analysis highlights the strengths and weaknesses of various models, allowing us to identify the best performing model for predicting customer churn:
        </Typography>
        <ul className="tw-list-disc tw-list-inside tw-text-gray-700">
          <li>
            <strong>Random Forest:</strong> Achieved the highest test accuracy with excellent precision and recall.
          </li>
          <li>
            <strong>XGBoost:</strong> Comparable performance to Random Forest with slightly lower precision.
          </li>
          <li>
            <strong>Gradient Boost:</strong> Consistently performed well across all metrics, offering a balanced approach.
          </li>
        </ul>
        <Typography variant="body1" className="tw-text-gray-700 tw-mt-4">
          Models like <strong>AdaBoost</strong> and <strong>K-Neighbors</strong> also performed well, but with slight trade-offs in precision or recall. 
          The trade-offs need to be considered depending on whether the focus is on minimizing false negatives or false positives.
        </Typography>
      </Box>
    </Container>
  );
};

export default ModelAnalysis;

import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import MainHeader from './MainHeader';

const ModelAnalysis: React.FC = () => {
  return (
    <Container maxWidth="lg" className="tw-h-full tw-flex tw-flex-col tw-py-8 tw-bg-white">
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
      <Grid container spacing={4}>
        {/* Performance Metrics */}
        <Grid item xs={12}>
          <Paper elevation={3} className="tw-p-4 tw-bg-white">
            <Typography variant="h6" className="tw-font-semibold tw-mb-2 tw-text-gray-800">
              Performance Metrics Table
            </Typography>
            <img
              src="/src/assets/analysisTable.png"
              alt="Performance Metrics Table"
              className="tw-w-full tw-rounded-md tw-object-contain tw-mb-4"
            />
            <Typography variant="body2" className="tw-text-gray-600">
              This table provides an overview of the model's accuracy, precision, recall, and F1-score.
            </Typography>
          </Paper>
        </Grid>

            {/* Key Insights Section */}
        <Box className="tw-mt-12">
        <Typography variant="h5" className="tw-font-semibold tw-text-gray-800 tw-mb-2">
            Key Insights
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700 tw-mb-4">
            The analysis provides a comprehensive look at the performance of various machine learning models in predicting customer churn. Here’s a breakdown of the key observations:
        </Typography>

        <ul className="tw-list-disc tw-list-inside tw-text-gray-700 tw-mb-4">
            <li>
            <strong>Random Forest:</strong> This model stood out as the best performer, achieving the highest test accuracy. Its ability to handle large datasets and complex interactions made it excel across precision and recall metrics. The balanced nature of Random Forest ensures that both false positives and false negatives are minimized, making it a reliable choice for churn prediction.
            </li>
            <li>
            <strong>XGBoost:</strong> A close competitor to Random Forest, XGBoost demonstrated exceptional performance with marginally lower precision. Its gradient boosting mechanism allows for superior handling of imbalanced data, contributing to robust recall scores. This model is ideal for scenarios where slight overfitting is acceptable to capture more nuanced patterns.
            </li>
            <li>
            <strong>Gradient Boost:</strong> Known for its versatility, Gradient Boost performed consistently well across all metrics. It provided a balanced approach, making it a strong contender for applications where both precision and recall are equally important. While not the absolute top performer, its reliability across various datasets makes it a great general-purpose model.
            </li>
            <li>
            <strong>AdaBoost:</strong> While AdaBoost didn’t outperform Gradient Boost or Random Forest, it still delivered competitive results. This model is particularly effective when the data is relatively clean and straightforward. However, it showed slight weaknesses in recall, indicating potential challenges in identifying all at-risk customers.
            </li>
            <li>
            <strong>K-Neighbors:</strong> The K-Neighbors algorithm performed decently but lagged behind ensemble methods like Random Forest and XGBoost. While it provides good results for smaller datasets or scenarios with distinct class boundaries, its scalability and sensitivity to noisy data may limit its application in large, complex datasets like customer churn.
            </li>
            <li>
            <strong>CatBoost:</strong> CatBoost proved to be a dark horse, showing strong performance particularly in handling categorical features seamlessly. With high accuracy and precision, it offers a user-friendly model with minimal preprocessing required.
            </li>
            <li>
            <strong>LightGBM:</strong> Similar to XGBoost, LightGBM showed competitive performance with fast training times. It slightly underperformed in precision compared to its counterparts but made up for it in terms of efficiency and speed, making it a great option for real-time applications.
            </li>
        </ul>
        </Box>

        {/* Model Score Chart */}
        <Grid item xs={12}>
          <Paper elevation={3} className="tw-p-4 tw-bg-white">
            <Typography variant="h6" className="tw-font-semibold tw-mb-2 tw-text-gray-800">
              Model Score Chart
            </Typography>
            <img
              src="/src/assets/analysisChart.png"
              alt="Model Score Chart"
              className="tw-w-full tw-rounded-md tw-object-contain"
            />
            <Typography variant="body2" className="tw-text-gray-600 tw-mt-2">
              This bar chart visualizes the model's performance across training and test datasets.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

        <Box>
        <Typography variant="h6" className="tw-font-semibold tw-text-gray-800 tw-mb-2">
            Recommendations
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700 tw-mb-4">
            Based on the analysis, we recommend the use of <strong>Random Forest</strong> or <strong>XGBoost</strong> for predicting customer churn, given their high accuracy and balanced performance. For scenarios requiring rapid deployment or real-time applications, <strong>LightGBM</strong> is an excellent choice due to its speed and efficiency.
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700">
            While other models like <strong>Gradient Boost</strong> and <strong>CatBoost</strong> offer competitive performance, they can be considered depending on the specific business objectives and computational constraints.
        </Typography>

        <Typography variant="h6" className="tw-font-semibold tw-text-gray-800 tw-mb-2 tw-mt-6">
            Conclusion
        </Typography>
        <Typography variant="body1" className="tw-text-gray-700">
            In conclusion, leveraging machine learning models for churn prediction provides valuable insights into customer behavior. By deploying the right model, FINTECH Bank can proactively address customer attrition, enhance customer satisfaction, and ultimately improve its bottom line. Moving forward, continual evaluation and retraining of these models on new data will ensure sustained accuracy and relevance.
        </Typography>
        </Box>
      
    </Container>
  );
};

export default ModelAnalysis;

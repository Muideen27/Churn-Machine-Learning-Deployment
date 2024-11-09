import React from 'react';
import { Box, Typography, Container, Grid, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainHeader from './MainHeader';

const EDA: React.FC = () => {
  return (
    <Container maxWidth="lg" className="tw-h-full tw-flex tw-flex-col tw-py-8 tw-bg-white">
      {/* Header Section */}
      <MainHeader />

      {/* Page Title */}
      <Box className="tw-mb-8 tw-text-center">
        <Typography variant="h3" className="tw-font-bold tw-text-primary">
          Exploratory Data Analysis
        </Typography>
        <Typography variant="body1" className="tw-text-gray-600">
          Discover insights, visualize trends, and explore the story behind the data.
        </Typography>
      </Box>

      {/* Content Section */}
      <Grid container spacing={4}>
        {/* Left Column - Explanations/Expandable Sections */}
        <Grid item xs={12} md={5}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
              <Typography variant="h6" className="tw-font-semibold">Real-time Data Visualization</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="tw-text-gray-700">
                Explore live data visualizations including trends, patterns, and outliers for key metrics.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
              <Typography variant="h6" className="tw-font-semibold">Key Performance Indicators</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="tw-text-gray-700">
                Track vital metrics such as average balances, product adoption rates, and churn probabilities.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
              <Typography variant="h6" className="tw-font-semibold">Customer Segmentation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="tw-text-gray-700">
                Understand your customer base by analyzing segments based on behavior, demographics, and preferences.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Right Column - Visualization Cards */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} className="tw-p-4 tw-mb-4 tw-bg-white">
            <Typography variant="h6" className="tw-font-semibold tw-mb-2 tw-text-gray-800">
              Expense Category Analysis
            </Typography>
            <img
              src="/src/assets/expenseCategoryChart.png"
              alt="Expense Category"
              className="tw-w-full tw-rounded-md tw-object-contain"
            />
            <Typography variant="body2" className="tw-text-gray-600 tw-mt-2">
              This chart visualizes the distribution of customer expenses across various categories.
            </Typography>
          </Paper>

          <Paper elevation={3} className="tw-p-4 tw-mb-4 tw-bg-white">
            <Typography variant="h6" className="tw-font-semibold tw-mb-2 tw-text-gray-800">
              Income vs. Expense Analysis
            </Typography>
            <img
              src="/src/assets/incomeVsExpenseChart.png"
              alt="Income vs. Expense"
              className="tw-w-full tw-rounded-md tw-object-contain"
            />
            <Typography variant="body2" className="tw-text-gray-600 tw-mt-2">
              Analyze monthly income and expense trends to identify potential areas for optimization.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EDA;

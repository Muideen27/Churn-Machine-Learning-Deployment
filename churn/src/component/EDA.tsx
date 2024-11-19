import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainHeader from './MainHeader';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const EDA: React.FC = () => {
  // Dummy dynamic data
  const insightsData = [
    {
      title: 'Total Observations',
      value: '500,000',
      change: '+1.1%',
      trend: 'up',
    },
    {
      title: 'Total Features',
      value: '19',
      change: '+1.1%',
      trend: 'up',
    },
    {
      title: 'Total Groups',
      value: '20',
      change: '-0.2%',
      trend: 'down',
    },
  ];

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

      {/* Top Insights Section */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {insightsData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: 'gray' }}>
                  {data.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {data.value}
                </Typography>
                <Box display="flex" alignItems="center">
                  {data.trend === 'up' ? (
                    <ArrowUpwardIcon sx={{ color: 'green', mr: 1 }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ color: 'red', mr: 1 }} />
                  )}
                  <Typography
                    variant="body2"
                    sx={{ color: data.trend === 'up' ? 'green' : 'red' }}
                  >
                    {data.change} last 7 days
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Content Section */}
      <Grid container spacing={4}>
        {/* Left Column - Explanations/Expandable Sections */}
        <Grid item xs={12} md={5}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
              <Typography variant="h6" className="tw-font-semibold">Univariate Analysis</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="tw-text-gray-700">
                Explore live data visualizations including trends, patterns, and outliers for each feature.
                <br />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontWeight: 'bold', ml: 'auto', px: 3 }}
                >
                  Visualize
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
              <Typography variant="h6" className="tw-font-semibold">Bivariate Analysis</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="tw-text-gray-700">
                Select two features to visualize the relationship between them.
                <br />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontWeight: 'bold', ml: 'auto', px: 3 }}
                >
                  Visualize
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
              <Typography variant="h6" className="tw-font-semibold">Multivariate Analysis</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="tw-text-gray-700">
                Visualize the relationship between multiple features at once.
                <br />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontWeight: 'bold', ml: 'auto', px: 3 }}
                >
                  Visualize
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Right Column - Placeholder for Visualization Cards */}
        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant="h5" className="tw-font-semibold tw-mb-4">
              Visualization Preview
            </Typography>
            <Typography variant="body1" className="tw-text-gray-700">
              Select a feature or combination of features to start exploring visualizations.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EDA;

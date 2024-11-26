import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Modal, Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainHeader from './MainHeader';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { fetchUnivariateData, fetchBivariateData, fetchMultivariateData } from '../api/dataApi';
import Visualization from './Visualization';

const features = [
  'Acct_ID', 'YEARS_WITH_BANK', 'CHURN', 'RISK_RATING', 'CURRENCY',
  'AVE_BAL', 'SCHEME_TYPE', 'MOBILE_APP_ADOPTION', 'INTERNET_BANKING_ADOPTION',
  'USSD_BANKING_ADOPTION', 'DIGITAL_LOAN', 'UNSECURED_LOAN',
  'TERMLOAN_STATUS', 'CREDIT_CARD', 'SUBSEGMENT',
  'LAST_12_MONTHS_CREDIT_VOLUME', 'LAST_12_MONTHS_DEBIT_VOLUME',
  'LAST_12_MONTHS_DEBIT_VALUE', 'LAST_12_MONTHS_CREDIT_VALUE'
];

const visualizationTypes = ['Bar Chart', 'Scatter Plot', 'Line Graph', 'Pie Chart', 'Heatmap', 'Box Plot'];

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
    title: 'Total Signups',
    value: '20',
    change: '-0.2%',
    trend: 'down',
  },
];

const EDA: React.FC = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [visualizationType, setVisualizationType] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [analysisType, setAnalysisType] = useState<'univariate' | 'bivariate' | 'multivariate' | null>(null);
  const [visualizationData, setVisualizationData] = useState<any>(null);
  const [visualizationModalOpen, setVisualizationModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [__error, setError] = useState<string | null>(null);
  

  //  Function to handle feature selection
  const handleFeatureSelect = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(prev => prev.filter(f => f !== feature));
    } else {
      setSelectedFeatures(prev => [...prev, feature]);
    }
  };

  const handleVisualize = (type: 'univariate' | 'bivariate' | 'multivariate') => {
    setAnalysisType(type);
    setModalOpen(true);
  };

  const handleVisualizationTypeChange = (event: SelectChangeEvent) => {
    setVisualizationType(event.target.value as string);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedFeatures([]);
    setVisualizationType('');
  };

  const handleVisualizationModalClose = () => {
    setVisualizationModalOpen(false);
  };

// Function to fetch data based on selected features and analysis type

const fetchVisualizationData = async () => {
  setLoading(true);
  setError(null);

  try {
      let data;

      if (analysisType === 'univariate' && selectedFeatures.length === 1) {
          data = await fetchUnivariateData(selectedFeatures[0]);
      } else if (analysisType === 'bivariate' && selectedFeatures.length === 2) {
          data = await fetchBivariateData(selectedFeatures[0], selectedFeatures[1]);
      } else if (analysisType === 'multivariate' && selectedFeatures.length >= 3) {
          data = await fetchMultivariateData(selectedFeatures);
      } else {
          throw new Error('Invalid feature selection or analysis type.');
      }

      console.log('Fetched data:', data); // Log data to check its structure
      setVisualizationData(data); // Pass data to state
      setVisualizationModalOpen(true); // Open the visualization modal
      setModalOpen(false);
  } catch (err) {
      console.error('Error during fetchVisualizationData:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred.');
  } finally {
      setLoading(false);
  }
};



// Handle the visualization type selection

  return (
    <Container maxWidth="lg" className="tw-h-full tw-flex tw-flex-col tw-py-8 tw-bg-white">
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
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: 'bold', px: 3, mt: 2 }}
                onClick={() => handleVisualize('univariate')}
                disabled={selectedFeatures.length !== 1}
              >
                Visualize
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content">
              <Typography variant="h6" className="tw-font-semibold">Bivariate Analysis</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="tw-text-gray-700">
                Select two features to visualize the relationship between them.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: 'bold', px: 3, mt: 2 }}
                onClick={() => handleVisualize('bivariate')}
                disabled={selectedFeatures.length !== 2}
              >
                Visualize
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content">
              <Typography variant="h6" className="tw-font-semibold">Multivariate Analysis</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="tw-text-gray-700">
                Visualize the relationship between multiple features at once.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: 'bold', px: 3, mt: 2 }}
                onClick={() => handleVisualize('multivariate')}
                disabled={selectedFeatures.length < 3}
              >
                Visualize
              </Button>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Right Column - Visualization Preview */}
        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant="h5" className="tw-font-semibold tw-mb-4">
              Visualization Preview
            </Typography>
            <Box>
              {features.map((feature, index) => (
                <Button
                  key={index}
                  variant={selectedFeatures.includes(feature) ? 'contained' : 'outlined'}
                  color="primary"
                  sx={{ m: 1 }}
                  onClick={() => handleFeatureSelect(feature)}
                >
                  {feature}
                </Button>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Modal for Visualization Type Selection */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', mt: 10, borderRadius: 2, width: 400 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            {analysisType ? `Performing ${analysisType} Analysis` : 'Choose Visualization Type'}
          </Typography>
          <Select
            value={visualizationType}
            onChange={handleVisualizationTypeChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            {visualizationTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              console.log(`Analysis Type: ${analysisType}`);
              console.log(`Selected Features: ${selectedFeatures}`);
              console.log(`Visualization Type: ${visualizationType}`);
              // handleModalClose();
              fetchVisualizationData();
            }}
            disabled={!visualizationType || loading}
            fullWidth
          >
            Submit
            {loading ? 'loading...' : 'Submit'}
          </Button>
        </Box>
      </Modal>
      
       {/* Visualization Modal */}
      <Modal open={visualizationModalOpen} onClose={handleVisualizationModalClose}>
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', mt: 10, borderRadius: 2, width: '80%', height: '80%' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Visualization
          </Typography>
          {visualizationData ? (
            <>
              {console.log("Visualization Data in Modal:", visualizationData)}
              <Visualization
                visualizationType={visualizationType}
                data={visualizationData}
                selectedFeatures={selectedFeatures}
              />
            </>
          ) : (
            <Typography>No data available for visualization.</Typography>
          )}
          <Button variant="contained" color="secondary" onClick={handleVisualizationModalClose} sx={{ mt: 4 }}>
            Close
          </Button>
        </Box>
      </Modal>

    </Container>
  );
};

export default EDA;

import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import HomePage from './component/HomePage';
import ModelAnalysis from './component/ModelAnalysis';
import EDA from './component/EDA';
import PredictionPage from './component/PredictionPage';

// Define the theme with Poppins font and primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63', // Custom primary color
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Set Poppins as the primary font
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Route for LandingPage */}
          <Route path="/" element={<LandingPage />} />
          {/* Route for HomePage */}
          <Route path="/home" element={<HomePage />} />
          {/* Route for Prediction Page */}
          <Route path="/predict" element={<PredictionPage />} />
          {/* Route for Machine Learning Model Analysis Page */}
          <Route path='ml-analysis'element={<ModelAnalysis />} />
          {/* Route for EDA Page */}
          <Route path='eda'element={<EDA />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

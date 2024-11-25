import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('access_token');
  return !!token; // Returns true if token exists
};

// Component for protected routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Route for LandingPage (Public) */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Protected Routes */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/predict" 
            element={
              <ProtectedRoute>
                <PredictionPage />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/ml-analysis" 
            element={
              <ProtectedRoute>
                <ModelAnalysis />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/eda" 
            element={
              <ProtectedRoute>
                <EDA />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

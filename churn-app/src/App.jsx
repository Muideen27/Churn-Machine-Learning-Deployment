import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';

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



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

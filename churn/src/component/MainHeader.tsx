import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear token from localStorage
    localStorage.removeItem('access_token');

    // Redirect to landing page
    navigate('/');

    console.log('User signed out successfully');
  };
  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo Section (Left) */}
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <img src="/src/assets/01.png" alt="FINTECH Bank Logo" style={{ height: 70, marginRight: 8 }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                FINTECH Bank
              </Typography>
            </Box>

            {/* Center Navigation Buttons */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }} onClick={() => navigate('/home')} >
                About
              </Button>
              <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }} onClick={() => navigate('/predict')} >
                Predict
              </Button>
              <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }} onClick={() => navigate('/eda')} >
                EDA
              </Button>
              <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }} onClick={() => navigate('/ml-analysis')} >
                ML Models Analysis
              </Button>
              <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }} onClick={() => navigate('/team')} >
                Team
              </Button>
            </Box>

            {/* Sign Out Button (Right) */}
            <Button
              variant="contained"
              color="secondary"
              sx={{ fontWeight: 'bold', ml: 'auto', px: 3 }}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo Section (Left) */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img src="/src/assets/01.png" alt="FINTECH Bank Logo" style={{ height: 0, marginRight: 8 }} />
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
            <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }}>
              About
            </Button>
            <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }}>
              Contact
            </Button>
          </Box>

          {/* Get Started Button (Right) */}
          <Button variant="contained" color="secondary" sx={{ fontWeight: 'bold', ml: 'auto', px: 3 }}>
            Get Started
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="tw-bg-white tw-shadow-md">
      <Container maxWidth="lg">
        <Toolbar disableGutters className="tw-flex tw-justify-between tw-items-center tw-py-1">
          
          {/* Logo Section (Left) */}
          <Box className="tw-flex tw-items-center">
            <img src="/src/assets/01.png" alt="FINTECH Bank Logo" className="tw-h-8 tw-mr-2" /> {/* Reduced to 32px height */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="tw-font-bold tw-text-gray-800 tw-tracking-wide"
            >
              FINTECH Bank
            </Typography>
          </Box>

          {/* Center Navigation Buttons */}
          <Box className="tw-flex tw-space-x-4">
            <Button color="inherit" className="tw-font-medium tw-text-gray-800 tw-text-sm">
              About
            </Button>
            <Button color="inherit" className="tw-font-medium tw-text-gray-800 tw-text-sm">
              Contact
            </Button>
          </Box>

          {/* Get Started Button (Right) */}
          <Button variant="contained" className="tw-font-semibold tw-text-white tw-bg-gray-800 tw-px-4 tw-py-1">
            Get Started
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

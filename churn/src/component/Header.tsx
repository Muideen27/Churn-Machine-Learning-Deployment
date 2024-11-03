import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleOpenSignIn = () => {
    setIsSignIn(true);
    setModalOpen(true);
  };

  const handleOpenSignUp = () => {
    setIsSignIn(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo Section (Left) */}
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <img src="/src/assets/01.png" alt="FINTECH Bank Logo" style={{ height: 50, marginRight: 8 }} />
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
            <Button
              variant="contained"
              color="secondary"
              sx={{ fontWeight: 'bold', ml: 'auto', px: 3 }}
              onClick={handleOpenSignIn} // Open SignIn modal by default
            >
              Get Started
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Conditionally render SignIn or SignUp modal */}
      {modalOpen && isSignIn ? (
        <SignIn onClose={handleCloseModal} onSwitch={() => handleOpenSignUp()} />
      ) : modalOpen && !isSignIn ? (
        <SignUp onClose={handleCloseModal} onSwitch={() => handleOpenSignIn()} />
      ) : null}
    </Box>
  );
};

export default Header;

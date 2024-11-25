import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

interface HeaderProps {
  onOpenSignIn: () => void;
  onOpenSignUp: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSignIn, onOpenSignUp }) => {
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
              <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }}>
                About
              </Button>
              <Button color="inherit" sx={{ fontWeight: 'medium', mx: 1 }}>
                Contact
              </Button>
            </Box>

            {/* Sign In and Sign Up Buttons */}
            <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: 'bold', px: 3 }}
                onClick={onOpenSignIn}
              >
                Sign In
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ fontWeight: 'bold', px: 3 }}
                onClick={onOpenSignUp}
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

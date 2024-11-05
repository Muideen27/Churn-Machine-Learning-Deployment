import React from 'react';
import { Box } from '@mui/material';

const Sponsor: React.FC = () => {
  return (
    <Box sx={{ mt: 10, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, alignItems: 'center', mt: 2 }}>
        <img src="/src/assets/01.png" alt="Sponsor 1" style={{ maxWidth: '10%', height: 'auto' }} />
        <img src="/src/assets/03.svg" alt="Sponsor 2" style={{ maxWidth: '10%', height: 'auto' }} />
        <img src="/src/assets/04.svg" alt="Sponsor 3" style={{ maxWidth: '10%', height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default Sponsor;

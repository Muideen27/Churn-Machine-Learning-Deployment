import React from 'react';
import { Box, Typography } from '@mui/material';

const Sponsor: React.FC = () => {
  return (
    <Box className="tw-flex tw-flex-col tw-items-center tw-mt-10">
      <Typography variant="subtitle1" className="tw-font-semibold tw-mb-4 tw-text-gray-700">
        Sponsored By
      </Typography>
      <Box className="tw-flex tw-justify-center tw-space-x-8">
        <img src="src/assets/01.png" alt="Sponsor 1" className="tw-h-12 tw-w-auto tw-max-w-full"
            style={{ maxWidth: '50%' }}/>
        <img src="/src/assets/03.svg" alt="Sponsor 2" className="tw-h-12 tw-w-auto" />
        <img src="/src/assets/04.svg" alt="Sponsor 3" className="tw-h-12 tw-w-auto" />
      </Box>
    </Box>
  );
};

export default Sponsor;

import { Container, Typography, Button, Box } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-bg-gray-50"
    >
      <Box className="tw-text-center">
        <Typography
          variant="h2"
          color="primary"
          className="tw-font-bold tw-text-primary tw-mb-4"
        >
          Welcome to Our Application
        </Typography>
        <Typography
          variant="body1"
          className="tw-text-lg tw-text-gray-700 tw-mb-6"
        >
          Discover the best solutions tailored for your needs.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="tw-px-6 tw-py-3 tw-font-semibold tw-bg-primary tw-text-white"
          href="#"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;

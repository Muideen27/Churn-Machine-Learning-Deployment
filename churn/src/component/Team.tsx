import React from 'react';
import { Box, Typography, Container, Grid, Card, Avatar, Button, Divider } from '@mui/material';
import MainHeader from './MainHeader';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const teamMembers = [
  {
    name: 'Muideen Ilori',
    email: 'ilorimuideen0000@gmail.com',
    expertise: 'Data Science Engineer',
    linkedin: 'https://www.linkedin.com/in/muideen-ilori-a2422a194/',
    cvLink: 'https://drive.google.com/file/d/1SEOKarVvUDd9NtPqRPrGc3acj9UY0DoS/view?usp=sharing',
    image: '/1.image.jpeg',
    bio: 'Passionate about building scalable tech solutions and data-driven insights.',
  },
  {
    name: 'Abdullahi Badrudeen',
    email: 'abdullahibadru66@gmail.com',
    expertise: 'Data Scientist',
    linkedin: 'https://linkedin.com/in/abdullahibadrudeen',
    cvLink: 'https://drive.google.com/file/d/1J_8V2VMYHp84kwUqUhuT4qJdn7ienD2p/view',
    image: '/2.image.jpeg',
    bio: 'Specializes in transforming data into actionable business solutions.',
  },
  {
    name: 'Omowunmi Adebayo',
    email: 'adebayoajeyomi@gmail.com',
    expertise: 'Data Scientist',
    linkedin: 'https://www.linkedin.com/in/omowunmi-adebayo',
    cvLink: 'https://drive.google.com/file/d/1_BV2VMYHp84kwUqUhuT4qJdn7ienD2p/view',
    image: '/3.image.jpeg',
    bio: 'Focused on predictive analytics and innovative data modeling.',
  },
  {
    name: 'Shuaib Akinyemi',
    email: 'akinyemishuaib1995@gmail.com',
    expertise: 'Data Science',
    linkedin: 'https://linkedin.com/in/akinyemi-shuaib-o-37524a1b2',
    cvLink: 'https://drive.google.com/file/d/MrOBabs/view',
    image: '/4.image.jpeg',
    bio: 'Expert in machine learning and AI-driven decision-making tools.',
  },
  {
    name: 'Oluwasegun Babawale',
    email: 'emperorshezy@gmail.com',
    expertise: 'Data Science',
    linkedin: 'https://linkedin.com/in/oluwasegunbabawale',
    cvLink: 'https://linktr.ee/MrOBabs',
    image: '/5.image.jpeg',
    bio: 'Drives data insights to power business growth and efficiency.',
  },
  {
    name: 'Olanike Aladeojebi',
    email: 'nikesolomi@gmail.com',
    expertise: 'Data Scientist',
    linkedin: 'https://linkedin.com/in/olanikealadeojebi',
    cvLink: 'https://drive.google.com/file/d/6.image.jpeg/view',
    image: '/6.image.jpeg',
    bio: 'Blends data analytics with storytelling to drive impactful change.',
  },
];

const TeamCard: React.FC<typeof teamMembers[0]> = ({
  name,
  email,
  expertise,
  linkedin,
  cvLink,
  image,
  bio,
}) => (
  <Card sx={{ boxShadow: 3, padding: 2 }}>
    {/* Profile Section */}
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <Avatar
        src={image}
        alt={name}
        sx={{ width: 80, height: 80, marginRight: 2 }}
      />
      <Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold' }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
        >
          {expertise}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontSize: '0.9rem', marginTop: '4px' }}
        >
          {email}
        </Typography>
      </Box>
    </Box>

    {/* Bio Section */}
    <Typography
      variant="body2"
      sx={{ color: 'text.primary', marginBottom: 2 }}
    >
      {bio}
    </Typography>
    {/* <Divider sx={{ marginY: 2 }} /> */}

    {/* Animated Divider */}
    <Divider
        // className="tw-my-8"
        sx={{
          marginY: 2,
          height: '3px',
          background: 'linear-gradient(to right, #4CAF50, #FF5722)',
          animation: 'glow 2s ease-in-out infinite',
          '@keyframes glow': {
            '0%': { opacity: 0.7 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.7 },
          },
        }}
      />

    {/* Buttons Section */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<LinkedInIcon />}
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textTransform: 'none', boxShadow: 2 }}
      >
        LinkedIn
      </Button>
      <Button
        variant="outlined"
        color="primary"
        href={cvLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textTransform: 'none' }}
      >
        View CV
      </Button>
    </Box>
  </Card>
);

const Teams: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingY: 8,
      }}
    >
      {/* Header Section */}
      <MainHeader />

      {/* Title Section */}
      <Box sx={{ textAlign: 'center', marginY: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            // color: 'primary.main',
            marginBottom: 1,
          }}
        >
          Meet the Team
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', fontSize: '1rem' }}
        >
          Our dedicated professionals bringing innovation to life.
        </Typography>
      </Box>

      {/* Team Cards */}
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TeamCard {...member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Teams;

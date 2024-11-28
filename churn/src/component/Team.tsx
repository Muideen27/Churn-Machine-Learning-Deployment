import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Button, Divider } from '@mui/material';
import MainHeader from './MainHeader';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const teamMembers = [
  {
    name: 'Muideen Ilori',
    email: 'ilorimuideen0000@gmail.com',
    expertise: 'Software Engineering and Data Science',
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

const TeamCard: React.FC<typeof teamMembers[0]> = ({ name, email, expertise, linkedin, cvLink, image, bio }) => (
  <Card sx={{ boxShadow: 3, p: 2 }}>
    <Box className="tw-flex tw-items-center">
      <Avatar
        src={image}
        alt={name}
        sx={{ width: 80, height: 80, marginRight: 2 }}
      />
      <Box>
        <Typography variant="h6" className="tw-font-bold">
          {name}
        </Typography>
        <Typography variant="body2" className="tw-text-gray-600">
          {expertise}
        </Typography>
      </Box>
    </Box>
    <Typography variant="body2" className="tw-my-2 tw-text-gray-700">
      {bio}
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Box className="tw-flex tw-flex-col tw-gap-2">
      <Button
        variant="contained"
        color="primary"
        startIcon={<LinkedInIcon />}
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textTransform: 'none', marginRight: '25px' }}
      >
        LinkedIn
      </Button>
      <Button
        variant="outlined"
        color="primary"
        href={cvLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ marginLeft: '25px'}}
      >
        View CV
      </Button>
    </Box>
  </Card>
);

const Teams: React.FC = () => {
  return (
    <Container maxWidth="lg" className="tw-h-screen tw-flex tw-flex-col tw-py-8 tw-bg-gradient-to-r tw-from-blue-50 tw-to-indigo-50">
      {/* Header Section */}
      <MainHeader />

      <Box className="tw-text-center tw-my-8">
        <Typography variant="h3" className="tw-font-bold tw-text-primary">
          Meet the Team
        </Typography>
        <Typography variant="body1" className="tw-text-gray-600">
          Our dedicated professionals bringing innovation to life.
        </Typography>
      </Box>

          <br />
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

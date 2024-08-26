'use client';
import AddIcon from '@mui/icons-material/Add';
import AssistantIcon from '@mui/icons-material/Assistant';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
    AppBar, Box, Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogTitle,
    Grid, IconButton, InputLabel, Menu, MenuItem, TextField, Toolbar, Typography, useMediaQuery, useTheme
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card sx={{
        textAlign: 'center',
        boxShadow: 5,
        background: 'linear-gradient(145deg, #2a2a2a, #1c1c1c)',
        borderRadius: 4,
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'scale(1.05)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)' }
      }}>
        <CardContent sx={{ p: 2 }}>
          {icon}
          <Typography variant="h6" fontWeight="bold" color="white" sx={{ mb: 2 }}>{title}</Typography>
          <Typography variant="body1" color="white">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const features = [
  {
    icon: <AssistantIcon style={{ fontSize: 30, marginBottom: 10, color: 'white' }} />,
    title: 'Conversational Assistant',
    description: 'Chat with our AI assistant for personalized guidance on finding the best professors based on student reviews.'
  },
  {
    icon: <SearchIcon style={{ fontSize: 30, marginBottom: 10, color: 'white' }} />,
    title: 'Professor Search',
    description: 'Easily search for professors by name or department to find ratings and reviews from fellow students.'
  },
  {
    icon: <AutoAwesomeIcon style={{ fontSize: 30, marginBottom: 10, color: 'white' }} />,
    title: 'Personalized Recommendations',
    description: 'Receive tailored professor recommendations based on your preferences and academic needs.'
  }
];

const LandingPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [teacherData, setTeacherData] = useState({ name: '', department: '', subject: '', rating: '' });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRMP = () => {
    router.push('/RMP');
  };

  const handleDataSet = () => {
    router.push('/Data-Set');
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = () => {
    // Here you can handle the form submission, e.g., sending data to a server
    console.log('Teacher data submitted:', teacherData);
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
        <Toolbar>
          <Link href="#" sx={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
            <BotIcon />
            <Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold', color: 'white' }}>ProfessAI</Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ '& .MuiPaper-root': { backgroundColor: '#121212' } }}
              >
                <MenuItem onClick={handleRMP} component="a" href="#" sx={{ color: 'white' }}>Explore Professors</MenuItem>
                <MenuItem onClick={handleClickOpen} sx={{ color: 'white' }}>Add Teacher</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                onClick={handleRMP}
                variant="outlined"
                sx={{
                  borderColor: '#9a9a9a',
                  color: '#121212',
                  textTransform: 'none',
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    color: 'white',
                    borderColor: '#121212',
                    backgroundColor: '#313131'
                  }
                }}
              >
                Explore Professors
              </Button>
              <Button
                onClick={handleClickOpen}
                variant="outlined"
                sx={{
                  borderColor: '#9a9a9a',
                  color: '#121212',
                  textTransform: 'none',
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    color: 'white',
                    borderColor: '#121212',
                    backgroundColor: '#313131'
                  }
                }}
                startIcon={<AddIcon />}
              >
                Add Teacher
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{
        flex: 1,
        background: '#121212',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        py: { xs: 10, md: 15 },
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to ProfessAI
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Your go-to tool for finding the best professors based on reviews.
          </Typography>
          <Button
            onClick={handleRMP}
            variant="contained"
            size="large"
            sx={{
              textTransform: 'none',
              color: '#121212',
              border: '2px solid white',
              background: 'white',
              '&:hover': {
                background: 'var(--primary)', 
                border: '2px solid #121212', 
                color: 'white'
              },
            }}
          >
            Get Started
          </Button>
          <Button
            onClick={handleDataSet}
            variant="contained"
            size="large"
            sx={{
              textTransform: 'none',
              color: '#121212',
              border: '2px solid white',
              background: 'white',
              '&:hover': {
                background: 'var(--primary)', 
                border: '2px solid #121212', 
                color: 'white'
              },
            }}
          >
            Data Set
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 8, background: '#1c1c1c' }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Grid>
      </Container>

      <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { backgroundColor: '#121212', color: 'white' } }}>
        <DialogTitle sx={{ backgroundColor: '#1c1c1c', color: 'white' }}>
            Add Review
        </DialogTitle>
        <DialogContent>
            <TextField
            autoFocus
            margin="dense"
            name="professor"
            label="Professor's Name"
            type="text"
            fullWidth
            variant="outlined"
            value={teacherData.professor}
            onChange={handleChange}
            sx={{
                mb: 2,
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#555' },
                '&.Mui-focused fieldset': { borderColor: '#fff' },
                },
                '& .MuiInputBase-input': { color: 'white' }
            }}
            />
            <TextField
            margin="dense"
            name="subject"
            label="Subject"
            type="text"
            fullWidth
            variant="outlined"
            value={teacherData.subject}
            onChange={handleChange}
            sx={{
                mb: 2,
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#555' },
                '&.Mui-focused fieldset': { borderColor: '#fff' },
                },
                '& .MuiInputBase-input': { color: 'white' }
            }}
            />
            <TextField
            margin="dense"
            name="rating"
            label="Rating (0-5)"
            type="number"
            fullWidth
            variant="outlined"
            value={teacherData.rating}
            onChange={handleChange}
            inputProps={{ min: 0, max: 5 }}
            sx={{
                mb: 2,
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#555' },
                '&.Mui-focused fieldset': { borderColor: '#fff' },
                },
                '& .MuiInputBase-input': { color: 'white' }
            }}
            />
            <TextField
            margin="dense"
            name="review"
            label="Review"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={teacherData.review}
            onChange={handleChange}
            sx={{
                mb: 2,
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#555' },
                '&.Mui-focused fieldset': { borderColor: '#fff' },
                },
                '& .MuiInputBase-input': { color: 'white' }
            }}
            />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#1c1c1c' }}>
            <Button onClick={handleClose} sx={{ color: 'white' }}>Cancel</Button>
            <Button onClick={handleSubmit} sx={{ color: 'white' }}>Submit</Button>
        </DialogActions>
        </Dialog>
    </Box>
  );
}

export default LandingPage;
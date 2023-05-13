import React from 'react';
import Activities from './Activities';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { styled, createTheme, ThemeProvider } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5', // Replace with your desired background color
    },
  },
});

// Define the styled component with custom styles
const FullPageComponentWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));



function Portfolio() {
  return (
    <div>
      <h1>Hello, Portfolio!</h1>
        <p>This is a basic text component.</p>
        <Grid container spacing={2}>
        <Grid item xs={8}>
          <h2>
            case 1
          </h2>
        </Grid>
        <Grid item xs={4}>
        <h2>
            case 2
          </h2>
        </Grid>
        <Grid item xs={4}>
        <h2>
            case 3
          </h2>
        </Grid>
        <Grid item xs={8}>
        <Activities>

        </Activities>
        </Grid>
      </Grid>
    
    
    </div>
        
  );
}

export default Portfolio;
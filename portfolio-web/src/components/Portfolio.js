import React from 'react';
import Activities from './Activities';
import Box from '@mui/material/Box';


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
    
    <Activities>

    </Activities>
    </div>
        
  );
}

export default Portfolio;
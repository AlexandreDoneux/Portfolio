import React from 'react';
import Activities from './Activities';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import theme from '../theme';


import { styled, createTheme, ThemeProvider } from '@mui/system';



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
      <h1>Vous trouverez ici l'ensemble des activités et leurs preuves</h1>
      <p>Cliquez sur les flèches pour faire apparaitre les preuves.</p>
      <Activities sx={{bgcolor : theme.palette.secondary.main}}>

      </Activities>
    
      <img src={process.env.PUBLIC_URL + '/logo192.png'} />
    </div>
        
  );
}

export default Portfolio;
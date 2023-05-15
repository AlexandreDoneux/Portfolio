import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Helmet} from 'react-helmet';

import Home from './components/Home';
import Cv from './components/Cv';
import Portfolio from './components/Portfolio';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';

import theme from './theme';


import {ThemeProvider, createTheme } from '@mui/material/styles';
import { unstable_styleFunctionSx, styled } from '@mui/system';

const Div = styled('div')(unstable_styleFunctionSx);

/*
const theme = createTheme({
  palette: {
    primary: {
      main: '#E4F2AE',
    },
    secondary: {
      main: '#E4F2AE',
      button: '#10812D'
    },
    box: {
      main: "#10812D",
      secondary: "#E4F2AE"
    }
  },
});
*/

// Define the styled component with custom styles
const FullPageComponentWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.secondary.two,
}));



const element = (
  
  <ThemeProvider theme={theme} >
    <FullPageComponentWrapper>
      <Box width="auto" height="auto" backgroundColor="secondary.two" >
        <AppBar position="static" sx={{bgcolor: "primary.main"}}> 
          <Box width="auto" height="auto"  sx={{ display: 'flex' }}>
            
            <Div  sx={{m:"auto", color:"secondary.two", fontSize:30}}>
              <h1 >Alexandre Doneux</h1>
            </Div>
            <Div sx={{ml:"auto", mr:3, display: 'flex'}}>
              {/**
               * <ListingCours sx={{ml:3, mr:4, my:2, py:2, bgcolor:"secondary.button", fontSize:12}}/>
               * <MonCompteMenu sx={{ml:3, mr:4, my:2, py:2, bgcolor:"secondary.button", fontSize:12}}></MonCompteMenu>
               * 
               */}
              
              <Button variant="contained" sx={{ml:2, mr:2, my:3, py:2, bgcolor:"secondary.two", fontSize:20, color: "primary.main", fontWeight: 'bold'}} onClick={() => window.location = "/Portfolio/cv"}>Mon CV</Button>
              <Button variant="contained" sx={{ml:2, mr:2, my:3, py:2, bgcolor:"secondary.two", fontSize:20, color: "primary.main", fontWeight: 'bold'}} onClick={() => window.location = "/Portfolio/portfolio"}>Mon portfolio</Button>
              
              
            </Div>
            
          </Box>
        </AppBar>
      
      
        <Div id="main" sx={{mx:4, my:4}}>
          <Router>
              <Routes>

                  <Route path="/Portfolio/cv" element={<Cv/>}> </Route>
                  <Route path="/Portfolio/portfolio" element={<Portfolio sx={{bgcolor : "secondary.main"}}/>}> </Route>
              </Routes>
          </Router>
        </Div>
      </Box>
    </FullPageComponentWrapper>
    
  </ThemeProvider>
  

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Cv from './components/Cv';
import Portfolio from './components/Portfolio';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';


import {ThemeProvider, createTheme } from '@mui/material/styles';
import { unstable_styleFunctionSx, styled } from '@mui/system';

const Div = styled('div')(unstable_styleFunctionSx);

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


const element = (
  
  <ThemeProvider theme={theme} >
    <Box width="auto" height="auto" backgroundColor="primary.main" >
      <AppBar position="static"> 
        <Box width="auto" height="auto"  sx={{ display: 'flex' }}>
          
          <Div  sx={{m:"auto", color:"#000000", fontSize:20}}>
            <h1 >BeerLog</h1>
          </Div>
          <Div sx={{ml:"auto", mr:3, display: 'flex'}}>
            {/**
             * <ListingCours sx={{ml:3, mr:4, my:2, py:2, bgcolor:"secondary.button", fontSize:12}}/>
             * <MonCompteMenu sx={{ml:3, mr:4, my:2, py:2, bgcolor:"secondary.button", fontSize:12}}></MonCompteMenu>
             * 
             */}
             <Button variant="contained" sx={{ml:2, mr:20, my:2, py:2, bgcolor:"secondary.button", fontSize:12}} onClick={() => window.location = "/"}>Inscription au cours</Button>
             <Button variant="contained" sx={{ml:2, mr:20, my:2, py:2, bgcolor:"secondary.button", fontSize:12}} onClick={() => window.location = "/cv"}>Inscription au cours</Button>
             <Button variant="contained" sx={{ml:2, mr:20, my:2, py:2, bgcolor:"secondary.button", fontSize:12}} onClick={() => window.location = "/portfolio"}>Inscription au cours</Button>
            
            
          </Div>
          
        </Box>
      </AppBar>
     
    <Box width="auto" height="auto" backgroundColor="secondary.main" sx={{ display: 'flex' }}>
    </Box>
      <div id="main" >
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/cv" element={<Cv/>}> </Route>
                <Route path="/portfolio" element={<Portfolio/>}> </Route>
            </Routes>
        </Router>
      </div>
    </Box>
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
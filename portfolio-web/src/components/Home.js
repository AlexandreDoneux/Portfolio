import React from 'react';
import { unstable_styleFunctionSx, styled } from '@mui/system';

const Div = styled('div')(unstable_styleFunctionSx);

function Home() {
  return (
    <Div sx={{aligne:"center"}}>
      <h1>Hello, World !</h1>
      <h2>Rejoignez mon portfolio ou mon CV en cliquant sur les boutons</h2>
    </Div>
  );
}

export default Home;
import React from 'react';
import { unstable_styleFunctionSx, styled } from '@mui/system';

const Div = styled('div')(unstable_styleFunctionSx);
const Embed = styled('embed')(unstable_styleFunctionSx);

function Cv() {
  return (
    <Embed src={"/captures/cv/Curriculum Vitae copie.pdf"} sx={{width: '90vw', height: '100vh', flexGrow: 1, px:4}}></Embed>
  );
}

export default Cv;
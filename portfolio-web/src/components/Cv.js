import React from 'react';
import { unstable_styleFunctionSx, styled } from '@mui/system';
import image1 from "../captures.nosync/cv/Curriculum Vitae copie.pdf"

const Div = styled('div')(unstable_styleFunctionSx);
const Embed = styled('embed')(unstable_styleFunctionSx);

function Cv() {
  return (
    <div>
    <Embed loading="lazy" src={image1} sx={{width: '90vw', height: '100vh', flexGrow: 1, px:4}}></Embed>
    </div>
  );
}

export default Cv;
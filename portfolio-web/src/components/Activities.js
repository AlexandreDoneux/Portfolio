import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RedirectButton from './RedirectButton';

import { unstable_styleFunctionSx, styled } from '@mui/system';

import image1 from "../captures.nosync/hack2021/Capture d’ecran 2021-10-30 a 20.53.09.png"
import image2 from "../captures.nosync/hack2021/RecupEPHEC-2.pdf"
import image3 from "../captures.nosync/hack2021/deroulement site hackathon 2.pdf"
import image4 from "../captures.nosync/hack2021/Hackaton EPHEC 2021.pdf"
import image5 from "../captures.nosync/hack2022/certificat de participation.pdf"
import image6 from "../captures.nosync/cybersecurity/Capture d’ecran 2022-02-08 a 08.30.29.png"
import image7 from "../captures.nosync/cybersecurity/Capture d’ecran 2022-02-08 a 08.37.25.png"
import image8 from "../captures.nosync/cybersecurity/Capture d’ecran 2022-02-08 a 08.55.02.png"
import image9 from "../captures.nosync/cybersecurity/Capture d’ecran 2022-03-10 a 13.49.33.png"
import image10 from "../captures.nosync/cybersecurity/Capture d’ecran 2022-03-10 a 13.49.45.png"
import image11 from "../captures.nosync/cybersecurity/Capture d’ecran 2022-03-11 a 21.45.45.png"
import image12 from "../captures.nosync/cybersecurity/classement cyber security challenge.png"
import image13 from "../captures.nosync/cybersecurity/equipe cyber security challenge.png"
import image14 from "../captures.nosync/waterloo/Doneux_Alexandre.pdf"
import image15 from "../captures.nosync/reactjsorg/reactjs_org intro a react.pdf"
import image16 from "../captures.nosync/node big picture/Capture d’ecran 2022-03-20 a 12.10.55.png"
import image17 from "../captures.nosync/node big picture/Capture d’ecran 2022-03-21 a 00.13.02.png"
import image18 from "../captures.nosync/node big picture/Capture d’ecran 2022-03-21 a 00.14.55.png"
import image19 from "../captures.nosync/node big picture/Pluralsight Nodejs the big picture.pdf"
import image20 from "../captures.nosync/node web app/Capture d’ecran 2022-04-06 a 00.11.49.png"
import image21 from "../captures.nosync/node web app/Capture d’ecran 2022-04-06 a 01.35.10.png"
import image22 from "../captures.nosync/node web app/Capture d’ecran 2022-04-06 a 14.28.13.png"
import image23 from "../captures.nosync/node web app/Capture d’ecran 2022-04-06 a 14.46.29.png"
import image24 from "../captures.nosync/node web app/Capture d’ecran 2022-04-08 a 15.39.37.png"
import image25 from "../captures.nosync/node web app/Pluralsight webb app with nodejs and express.pdf"
import image26 from "../captures.nosync/node getting started/Capture d’ecran 2022-03-21 a 01.33.02.png"
import image27 from "../captures.nosync/node getting started/Capture d’ecran 2022-03-27 a 00.38.14.png"
import image28 from "../captures.nosync/node getting started/Capture d’ecran 2022-03-27 a 01.52.42.png"
import image29 from  "../captures.nosync/node getting started/Capture d’ecran 2022-03-27 a 03.31.00.png"
import image30 from  "../captures.nosync/node getting started/Capture d’ecran 2022-04-05 a 18.10.15.png"
import image31 from  "../captures.nosync/node getting started/Capture d’ecran 2022-04-05 a 23.27.12.png"
import image32 from  "../captures.nosync/node getting started/Capture d’ecran 2022-04-05 a 23.45.33.png"
import image33 from  "../captures.nosync/node getting started/Capture d’ecran 2022-04-05 a 23.46.03.png"
import image34 from "../captures.nosync/node getting started/Pluralsight Nodejs getting started.pdf"
import image35 from "../captures.nosync/audience/Capture d’ecran 2021-07-14 a 17.07.34.png"
import image36 from  "../captures.nosync/audience/Capture d’ecran 2021-07-14 a 17.07.41.png"
import image37 from  "../captures.nosync/audience/Capture d’ecran 2021-09-17 a 00.19.56.png"
import image38 from  "../captures.nosync/audience/Capture d’ecran 2021-07-14 a 17.07.22.png"
import image39 from  "../captures.nosync/audience/Capture d’ecran 2021-09-17 a 00.10.19.png"
import image40 from  "../captures.nosync/audience/Capture d’ecran 2021-09-17 a 00.10.26.png"
import image41 from  "../captures.nosync/audience/Capture d’ecran 2021-09-17 a 00.10.34.png"
import image42 from  "../captures.nosync/audience/Capture d’ecran 2021-09-17 a 00.10.46.png"
import image43 from  "../captures.nosync/audience/Capture d’ecran 2021-09-17 a 00.13.36.png"
import image44 from  "../captures.nosync/audience/Doc 14 mai 2023, 11.03.pdf"
import image45 from "../captures.nosync/cassis paprika/Doc 14 mai 2023, 11.11.pdf"





const Div = styled('div')(unstable_styleFunctionSx);
const Embed = styled('embed')(unstable_styleFunctionSx);
const Img = styled('img')(unstable_styleFunctionSx);




function createData(name, real_hours, valid_hours, link, proof,text) {
  return {
    name,
    real_hours,
    valid_hours,
    link,
    proof,
    text
  };
}




function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);



  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="left" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.real_hours}</TableCell>
        <TableCell align="center">{row.valid_hours}</TableCell>

        {row.link === "" ? (
      <TableCell align="center">Pas de lien</TableCell>
    ) : (
      <TableCell align="center">
        <RedirectButton url={row.link} label="Lien de la formation" />
      </TableCell>
    )}
        
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            align="center"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1}}>
              <Typography variant="h6" gutterBottom component="div">
                {row.text}
              </Typography>
              
              {row.proof.map((proof)=>{
                console.log(proof)
                if(proof.endsWith(".pdf")){
                    return <Embed loading="lazy" src={proof} sx={{width:"40%",height:"50em", py:2, display: "flex"}} ></Embed>
                }else{
                    return <Img loading="lazy" src={proof} sx={{width:"40%",py:2, display: "flex"}}/>
                }
              }
              )}
              
              
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    real_hours: PropTypes.number.isRequired,
    valid_hours: PropTypes.number.isRequired,
    proof: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    text: PropTypes.string.isRequired
  }).isRequired,
};

const rows = [
  createData('Hackaton 2021 - 2022', 48, 10, "", [image1,
  image2,
  image3,
  image4],
   "Hackaton organisé par l'EPHEC. Voici les différents fichiers qu'il me reste. Nous avons atteins la troisième place avec mon équipe. Je suis visible sur la vidéo postée sur l'EPHEC (https://www.facebook.com/watch/?v=226586492777445) aux minutes 1:16, 1:32 et 2:22. Des photos ont étés prises par les organisateurs mais je n'y ai pas accès."),
  createData('Hackaton 2022 - 2023', 48, 10, "", [image5], "Hackaton organisé par l'EPHEC. Voici un certificat de participation. Je suis également visible sur la vidéo postée par l'EPHEC (https://www.facebook.com/ephecofficiel/videos/656781492749723/) aux minutes 0:08, 0:59, 1:10 et 1:42."),
  createData('Cyber security Challenge', 32, 10, "", [image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13], 
  "Capture the flag où j'ai participé avec plusieurs autres personnes de l'EPHEC. Vous pouvez voir ici les différents mails reçus, les captures de la composition de l'équipe et les résultats. Il y a également quelques captures prises pendant mes recherches et de la présentation du Cyber security challenge."),
  createData('Ephec entreprendre : visite brasserie Waterloo', 2, 2, "", [image14],
  "Visite de la brasserie de Waterloo sitée à la ferme de Mont-St-Jean. Elle a été organisé par Ephec entreprendre. Voici un certificat de participation."),
  createData('Formation React (fr.reactjs.org)', 12, 10, "https://fr.legacy.reactjs.org/docs/hello-world.html", [image15],
  "Formation React éffectuée sur le site fr.reactjs.org. J'ai pris des notes ainsi que testé les exemples et d'autres tentatives."),
  createData('Formation "Node.js 12 : The big picture"  (Pluralsight )', 2, 0, "https://app.pluralsight.com/library/courses/nodejs-big-picture/table-of-contents", [image16,
  image17,
  image18,
  image19], 
  'Formation "Node.js 12: The Big Picture" présent sur le site de formation PluralSight. En voici quelques captures et les notes.'),
  createData('Formation "Building Web Applications with Node.js and Express" (Pluralsight)', 4, 0, "https://app.pluralsight.com/library/courses/nodejs-express-web-applications-building/table-of-contents", [image20,
  image21,
  image22,
  image23,
  image24,
  image25],
  'Formation "Building Web Applications with Node.js and Express" présent sur le site de formation PluralSight. En voici quelques captures et les notes.'),
  createData('Formation "Node.js 12: Getting Started" (Pluralsight)', 11, 10, "https://app.pluralsight.com/library/courses/nodejs-getting-started/table-of-contents", [image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34], 
  'Formation "Node.js 12: Getting Started" J\'ai pris des notes ainsi que testé les exemples et d\'autres tentatives.'),
  createData('Formation "Understanding your audience" (Pluralsight)', 4, 0, "https://app.pluralsight.com/library/courses/understanding-audience/table-of-contents", [image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44],
  "Formation se trouvant également sur pluralsight. Je l'ai effectuée dans le but d'améliorer mes soft skills de communication. Voici quelques captures d'écran et les notes prises. Bizarrement le site n'a pas enregistré toute ma progression mais elle a bien été effectuée comme le témoigne mes notes."),
  createData('Job étudiant (Cassis - Paprika)', 300, 10, "", [image45],
  'Job étudiant effectué chez "Cassis et Paprika" sur les différentes années passées à l\'EPHEC. J\'y ai fait du travail de manutention manutention. Voici une des fiches de paies pour attester des 10 heures.'),
];

export default function CollapsibleTable() {
  return (
    <div>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow >
            
            <TableCell align="left" sx={{fontWeight:"bold"}}>Nom</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold"}}>Heures réelles</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold"}}>Heures valides</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold"}}>Lien</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold"}}>Preuves</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <Div sx={{py:6, pr:"70%", align:"left"}}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        
        <TableBody>
          
            <TableRow key="real_hours">
                <TableCell align="left">Heures réelles</TableCell>
                <TableCell align="right">458</TableCell>
            </TableRow>
            <TableRow key="valid_hours">
                <TableCell align="left">Heures comptées</TableCell>
                <TableCell align="right">62</TableCell>
            </TableRow>
            
          
        </TableBody>
      </Table>
    </TableContainer>
    </Div>
    </div>
  );
}
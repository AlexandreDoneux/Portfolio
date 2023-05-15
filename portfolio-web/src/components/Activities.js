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
        <TableCell align="center"><RedirectButton url={row.link} label="Lien de la formation"></RedirectButton></TableCell>

        {()=>{if(row.link==""){
            return <TableCell align="center">Pas de lien</TableCell>
        }else{
            return <TableCell align="center"><RedirectButton url={row.link} label="Lien de la formation"></RedirectButton></TableCell>
        }}}
        
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
                    return <Embed loading="lazy" src={process.env.PUBLIC_URL + proof} sx={{width:"40%",height:"50em", py:2, display: "flex"}} ></Embed>
                }else{
                    return <Img loading="lazy" src={process.env.PUBLIC_URL + proof} sx={{width:"40%",py:2, display: "flex"}}/>
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
  createData('Hackaton 2021 - 2022', 48, 10, "", ["/captures.nosync/hack2021/Capture d’écran 2021-10-30 à 20.53.09.png",
  "/captures.nosync/hack2021/RécupEPHEC-2.pdf",
  "/captures.nosync/hack2021/déroulement site hackathon 2.pdf",
  "/captures.nosync/hack2021/Hackaton EPHEC 2021.pdf"],
   "Hackaton organisé par l'EPHEC. Voici les différents fichiers qu'il me reste. Nous avons atteins la troisième place avec mon équipe. Je suis visible sur la vidéo postée sur l'EPHEC (https://www.facebook.com/watch/?v=226586492777445) aux minutes 1:16, 1:32 et 2:22. Des photos ont étés prises par les organisateurs mais je n'y ai pas accès."),
  createData('Hackaton 2022 - 2023', 48, 10, "", ["/captures.nosync/hack2022/certificat de participation.pdf"], "Hackaton organisé par l'EPHEC. Voici un certificat de participation. Je suis également visible sur la vidéo postée par l'EPHEC (https://www.facebook.com/ephecofficiel/videos/656781492749723/) aux minutes 0:08, 0:59, 1:10 et 1:42."),
  createData('Cyber security Challenge', 32, 10, "", ["/captures.nosync/cybersecurity/Capture d’écran 2022-02-08 à 08.30.29.png",
  "/captures.nosync/cybersecurity/Capture d’écran 2022-02-08 à 08.37.25.png",
  "/captures.nosync/cybersecurity/Capture d’écran 2022-02-08 à 08.55.02.png",
  "/captures.nosync/cybersecurity/Capture d’écran 2022-03-10 à 13.49.33.png",
  "/captures.nosync/cybersecurity/Capture d’écran 2022-03-10 à 13.49.45.png",
  "/captures.nosync/cybersecurity/Capture d’écran 2022-03-11 à 21.45.45.png",
  "/captures.nosync/cybersecurity/classement cyber security challenge.png",
  "/captures.nosync/cybersecurity/équipe cyber security challenge.png"], 
  "Capture the flag où j'ai participé avec plusieurs autres personnes de l'EPHEC. Vous pouvez voir ici les différents mails reçus, les captures de la composition de l'équipe et les résultats. Il y a également quelques captures prises pendant mes recherches et de la présentation du Cyber security challenge."),
  createData('Ephec entreprendre : visite brasserie Waterloo', 2, 2, "", ["/captures.nosync/waterloo/Doneux_Alexandre.pdf"],
  "Visite de la brasserie de Waterloo sitée à la ferme de Mont-St-Jean. Elle a été organisé par Ephec entreprendre. Voici un certificat de participation."),
  createData('Formation React (fr.reactjs.org)', 12, 10, "https://fr.legacy.reactjs.org/docs/hello-world.html", ["/captures.nosync/reactjsorg/reactjs_org intro a react.pdf"],
  "Formation React éffectuée sur le site fr.reactjs.org. J'ai pris des notes ainsi que testé les exemples et d'autres tentatives."),
  createData('Formation "Node.js 12 : The big picture"  (Pluralsight )', 2, 0, "https://app.pluralsight.com/library/courses/nodejs-big-picture/table-of-contents", ["/captures.nosync/node big picture/Capture d’écran 2022-03-20 à 12.10.55.png",
  "/captures.nosync/node big picture/Capture d’écran 2022-03-21 à 00.13.02.png",
  "/captures.nosync/node big picture/Capture d’écran 2022-03-21 à 00.14.55.png",
  "/captures.nosync/node big picture/Pluralsight Nodejs the big picture.pdf"], 
  'Formation "Node.js 12: The Big Picture" présent sur le site de formation PluralSight. En voici quelques captures et les notes.'),
  createData('Formation "Building Web Applications with Node.js and Express" (Pluralsight)', 4, 0, "https://app.pluralsight.com/library/courses/nodejs-express-web-applications-building/table-of-contents", ["/captures.nosync/node web app/Capture d’écran 2022-04-06 à 00.11.49.png",
  "/captures.nosync/node web app/Capture d’écran 2022-04-06 à 01.35.10.png",
  "/captures.nosync/node web app/Capture d’écran 2022-04-06 à 14.28.13.png",
  "/captures.nosync/node web app/Capture d’écran 2022-04-06 à 14.46.29.png",
  "/captures.nosync/node web app/Pluralsight webb app with nodejs and express.pdf",
  "/captures.nosync/node web app/certificat de participation.pdf"],
  'Formation "Building Web Applications with Node.js and Express" présent sur le site de formation PluralSight. En voici quelques captures et les notes.'),
  createData('Formation "Node.js 12: Getting Started" (Pluralsight)', 11, 10, "https://app.pluralsight.com/library/courses/nodejs-getting-started/table-of-contents", ["/captures.nosync/node getting started/Capture d’écran 2022-03-21 à 01.33.02.png",
  "/captures.nosync/node getting started/Capture d’écran 2022-03-27 à 00.38.14.png",
  "/captures.nosync/node getting started/Capture d’écran 2022-03-27 à 01.52.42.png",
  "/captures.nosync/node getting started/Capture d’écran 2022-03-27 à 03.31.00.png",
  "/captures.nosync/node getting started/Capture d’écran 2022-04-05 à 18.10.15.png",
  "/captures.nosync/node getting started/Capture d’écran 2022-04-05 à 23.27.12.png",
  "/captures.nosync/node getting started/Capture d’écran 2022-04-05 à 23.45.33.png",
  "/captures.nosync/node getting started/Capture d’écran 2022-04-05 à 23.46.03.png",
  "/captures.nosync/node getting started/Pluralsight Nodejs getting started.pdf"], 
  'Formation "Node.js 12: Getting Started" J\'ai pris des notes ainsi que testé les exemples et d\'autres tentatives.'),
  createData('Formation "Understanding your audience" (Pluralsight)', 4, 0, "https://app.pluralsight.com/library/courses/understanding-audience/table-of-contents", ["/captures.nosync/audience/Capture d’écran 2021-07-14 à 17.07.34.png",
  "/captures.nosync/audience/Capture d’écran 2021-07-14 à 17.07.41.png",
  "/captures.nosync/audience/Capture d’écran 2021-09-17 à 00.19.56.png",
  "/captures.nosync/audience/Capture d’écran 2021-07-14 à 17.07.22.png",
  "/captures.nosync/audience/Capture d’écran 2021-09-17 à 00.10.19.png",
  "/captures.nosync/audience/Capture d’écran 2021-09-17 à 00.10.26.png",
  "/captures.nosync/audience/Capture d’écran 2021-09-17 à 00.10.34.png",
  "/captures.nosync/audience/Capture d’écran 2021-09-17 à 00.10.46.png",
  "/captures.nosync/audience/Capture d’écran 2021-09-17 à 00.13.36.png",
  "/captures.nosync/audience/Doc 14 mai 2023, 11.03.pdf"],
  "Formation se trouvant également sur pluralsight. Je l'ai effectuée dans le but d'améliorer mes soft skills de communication. Voici quelques captures d'écran et les notes prises. Bizarrement le site n'a pas enregistré toute ma progression mais elle a bien été effectuée comme le témoigne mes notes."),
  createData('Job étudiant (Cassis - Paprika)', 300, 10, "", ["/captures.nosync/cassis paprika/Doc 14 mai 2023, 11.11.pdf"],
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
import React from 'react';
import { Grid, Container, Typography, CardContent, CardMedia, Card, CardActionArea, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import img from '../assets/Logo.jpg'
import img2 from '../assets/SkolHops/Skol-Hops.png'
import img3 from '../assets/Robbyson_Land/Robbyson-Land.png'
import img4 from '../assets/Cacada_Autentica/Cacada-Autentica.png'
import {Link} from 'react-router-dom'


import './Projects.css'
// import { Container } from './styles';

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const useStyles = makeStyles({
  root: {    
    flexGrow:1,   
    paddingTop:"40px",
    justifyContent:"center",
    background:"#f5f5f5",
    alignItems: "center", 
    margin:"0px",
    
  },
  gridCont:{
    margin:"0px",
  },
  card:{
    maxWidth:"345px",
    alignItems: "center",  
    
  },
  link:{
    textDecoration:"none",
    
  }
});


function Projects() {
  const classes = useStyles()
  return (
    <Container maxWidth="xl" className={classes.root} xs={12} justify="center" >
      <Grid container item className={classes.gridCont}  xs={12}  spacing={8} justify="center" alignContent="center">

        <Grid container item xs={12} justify="center" alignContent="center">

          <Typography variant="h4" align="center">
            <Box fontWeight={600} fontSize={30}>
              Projects
            </Box>
            <Box fontWeight={600} >____</Box>
          </Typography>

        </Grid>

        <Grid container item className={classes.gridCont}  xs={12} sm={9}  direction="row" spacing={4} justify="flex-start" alignContent="center">
        
          <Grid container item xs={12} sm={4}>
            <li onClick={scrollToTop}><Link className={classes.link} to='/SkolHops'> 
            <Card className={classes.card} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt=""
                  height="240"
                  image={img2}
                  title="Contemplative Reptile"
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Skol Hops
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Aplicativos & Marketing & Simuladores
                  </Typography>
                </CardContent>
              </CardActionArea>
            
            
            </Card>
            </Link>
            </li>
          </Grid>

        
          <Grid container item xs={12} sm={4}>
          <li onClick={scrollToTop}><Link className={classes.link} to='/Robbyson_Land'>
            <Card className={classes.card} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt=""
                  height="240"
                  image={img3}
                  title="Contemplative Reptile"
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Robbyson Land
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Realidade Aumentada & Games
                  </Typography>
                </CardContent>
              </CardActionArea>
            
            
            </Card>
            </Link>
            </li>
          </Grid>
        

          
            <Grid container item xs={12} sm={4}>
            <li onClick={scrollToTop}><Link className={classes.link} to='/Cacada_Autentica'>
              <Card className={classes.card} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt=""
                    height="240"
                    image={img4}
                    title="Contemplative Reptile"
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Caçada Autêntica 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Games & Realidade Aumentada
                    </Typography>
                  </CardContent>
                </CardActionArea>
              
              
            </Card>
            </Link>
            </li>
          </Grid>

         
        </Grid>
      </Grid>
    
    </Container>
)}

export default Projects;
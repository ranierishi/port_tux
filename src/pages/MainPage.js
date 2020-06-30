import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import img from '../assets/Logo.jpg'
import About from '../components/about';
import Projects from '../components/projects';
import Form from '../components/form'
const useStyles = makeStyles((theme) => ({
  cont: {
    margin: '0',
    padding: '0',
    flexFlow: "colunm",
  },
  img: {      
    maxWidth: '100%',
    maxHeight: '100%',
    padding: '0',
    
    
  },

  title:{
    color: "#fff",
    
  },
  card:{
    boxShadow: "none",
    position:"absolute",
    textAlign: "center",
    backgroundColor:"transparent",
    marginTop: "15vh",
    marginLeft: "12vw",
    color: "#fff",
    width:"20vw",
    [theme.breakpoints.down('md')]:{
      visibility:"hidden",
    }
    
  },
  pos:{
    color:"#fff",
    textAlign:'Justify',
    
  }

}))

function MainPage() {
  const classes = useStyles();

  return (
  <Grid container item direction="column" xs={12} >
    <img className={classes.img} alt="main" src={img}></img>
    <Card className={classes.card} >
      <CardContent>
        <Typography variant="h3" className={classes.title} color="textSecondary" gutterBottom>
          Arthur Iung
        </Typography>
        <Typography variant="h4">
          Game Design
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Hello! My name is Arthur Iung, and I’m a Game Designer, Animator, Modeller and programmer.
         My most usual works are in the programming sector, but i have some experience in all stages of the production, 
         as you can see below.
        </Typography>        
      </CardContent>      
      </Card>

      <About/>
      <Projects/>
      <Form />
      
  </Grid>
)}

export default MainPage;
import React from 'react';
import { Grid, makeStyles, Typography, Container } from '@material-ui/core';
import {  Speed, FormatListNumbered, Camera, InsertEmoticon} from '@material-ui/icons';

import './About.css'
import Box from '@material-ui/core/Box';
import img2 from '../assets/tux.jpg'
// import { Container } from './styles';
// ICONS: multitask - import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// ICONS: Speed - import SpeedIcon from '@material-ui/icons/Speed';
// ICONS: Detailer - import CameraIcon from '@material-ui/icons/Camera';



const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow:1,   
    paddingTop:"40px",
    
    
  }, 

  item:{
    marginTop:"50px",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignItems:"center",
    

  },


  fundo:{
    backgroundColor:"#05c2c9",
    borderRadius: "130px",
    display: "flex",
    marginBottom: "15px",
    width: "100px",
    height:"100px",
    alignItems: "center",
    justifyContent:"center",      

  },
  text:{    
    alignContent:"justify",
    marginTop:"10px",
    width: "230px",
    [theme.breakpoints.down('md')]:{
      width: "140px",
    },
    
  },

  box:{
      display:"flex",
      paddingLeft:"50px",
      paddingRight:"25px",
      
      [theme.breakpoints.down('md')]:{
        justifyContent:"center",
        padding:"0",
      },
       
  },
  box2:{
    display:"flex",
    paddingRight:"50px",
    paddingLeft:"25px",
    [theme.breakpoints.down('md')]:{
      justifyContent:"center",
      padding:"0",
    },  
  },
  profile:{
    paddingTop:"120px",
  },
  profile2:{
    paddingTop:"30px",
  }
  

}))

function About() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>   

    <Grid container item xs={12} justify="center" alignContent="center">   

        <Grid xs={12} item  >

        <Typography variant="h4" align="center" >
          <Box fontWeight={600} fontSize={30}>
            About
          </Box>
          <Box fontWeight={600} >____</Box>

        </Typography>

        </Grid>
      <Grid container item className={classes.box} xs={12} sm={6} spacing={10} justify="space-around" >       
        <Grid container item className={classes.item}  xs={5} sm={3}>
          <div className={classes.fundo}>
            <Speed   htmlColor="#fff" style={{ fontSize: 50 }}></Speed>
          </div>

          <Typography component="div" color="textPrimary" align="center" >
            <Box fontWeight="fontWeightBold">Fast</Box> 
            </Typography>

          <Grid className={classes.text} item  >
            <Typography component="div" align="center" >
            <Box className="qualityText">
              I can think quickly of solutions that solve the problem in a short time.
            </Box>
              </Typography>
          </Grid>

        </Grid>

        <Grid container item className={classes.item}  xs={5} sm={3}> 
          <div className={classes.fundo}>
            <FormatListNumbered htmlColor="#fff" style={{ fontSize: 50 }}></FormatListNumbered>
          </div>
          <Typography component="div" color="textPrimary" align="center" >
            <Box fontWeight="fontWeightBold">Multitask</Box> 
            </Typography>

          <Grid className={classes.text} item  >
            <Typography component="div" align="center" >
              <Box className="qualityText">
                Work on multiple projects without delaying the schedule
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>  
    
      <Grid container item className={classes.box2}  spacing={2}  xs={12} sm={6} justify="space-around" >       

        <Grid container item className={classes.item}  xs={5} sm={3}> 
          <div className={classes.fundo}>
            <Camera htmlColor="#fff" style={{ fontSize: 50 }}></Camera>
          </div>
          <Typography component="div" color="textPrimary" align="center" >
            <Box fontWeight="fontWeightBold">Detailer</Box> 
            </Typography>

          <Grid className={classes.text} item >
          <Typography component="div" align="center" >
              <Box className="qualityText">
                  I believe that small details make more difference, than the whole.
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid container item className={classes.item} xs={5} sm={3}>  
          <div className={classes.fundo}>
            <InsertEmoticon htmlColor="#fff" style={{ fontSize: 50 }}></InsertEmoticon>
          </div>
          <Typography component="div" color="textPrimary" align="center" >
            <Box fontWeight="fontWeightBold">Dedicated</Box> 
            </Typography>

          <Grid className={classes.text} item >
          <Typography component="div" align="center" >
              <Box className="qualityText">
                Doing the same task several times, and each one in a different way.
              </Box>
            </Typography>
          </Grid>
        </Grid>


      </Grid>    
    </Grid>

    <Grid container item xs={12} justify="center" alignContent="center"> 
      
      <Grid  container item className={classes.profile} xs={12} sm={6} justify="center" alignContent="center"> 
        <Grid container item justify="center" >
          <Grid item >
            <img className="test" alt="" src={img2}></img>
          </Grid>
          <Grid container item justify="center" xs={12}  >

            <Typography component="div">
              <Box textAlign="center" fontWeight="fontWeightBold">Who's this guy?</Box>
              <Box className="texto" textAlign="center" fontWeight={12}>I’m a Game Designer, Animator, Modeller and programmer.
                    My most usual works are in the programming sector, but i have some experience in all stages of the production.</Box>
            </Typography>

          </Grid>
        </Grid>
      </Grid>

      <Grid container item className={classes.profile2} xs={12} sm={6} justify="center" alignContent="center"> 

        <div className="skill">
          <div className="skill_per" >
            <div className="skill_name">              
              <Typography align="center">C#</Typography>              
            </div>
          </div>
        <Typography component="div" >
          <Box className="percent">70%</Box>
        </Typography>
        </div>

        
      <div className="skill">
        <div className="skill_per4" >
          <div className="skill_name">
            <Typography align="center">Unity</Typography>
          </div>
        </div>
      <Typography component="div" >
        <Box  className="percent">90%</Box>
      </Typography>
      </div>

      <div className="skill">
        <div className="skill_per5" >
          <div className="skill_name">
            <Typography align="center">Unreal</Typography>
          </div>
        </div>
      <Typography component="div" >
        <Box className="percent">65%</Box>
      </Typography>
      </div>

      <div className="skill">
        <div className="skill_per6" >
          <div className="skill_name">
            <Typography align="center">Godot</Typography>
          </div>
        </div>
      <Typography component="div" >
        <Box className="percent">35%</Box>
      </Typography>
      </div>

      <div className="skill">
        <div className="skill_per7" >
          <div className="skill_name">
            <Typography align="center">Phazer</Typography>
          </div>
        </div>
      <Typography component="div" >
        <Box className="percent">45%</Box>
      </Typography>
      </div>

      <div className="skill">
        <div className="skill_per8" >
          <div className="skill_name">
            <Typography align="center">V.Studio</Typography>
          </div>
        </div>
      <Typography component="div" >
        <Box className="percent">75%</Box>
      </Typography>
      </div>

      <div className="skill">
        <div className="skill_per9" >
          <div className="skill_name">
            <Typography align="center">Krita</Typography>
          </div>
        </div>
      <Typography component="div" >
        <Box className="percent">85%</Box>
      </Typography>
      </div>

      <div className="skill">
        <div className="skill_per11" >
          <div className="skill_name">
            <Typography align="center">Animation</Typography>
          </div>
        </div>
      <Typography component="div" >
        <Box className="percent">40%</Box>
      </Typography>
      </div>

      
      </Grid>

    </Grid>

    

        
    </Container>
  )}

export default About;
import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  root:{
    height:"80px",
    backgroundColor:"#1b242f",
    color:"#8f9aa7",
  }

}))

function Footer() { 
  const classes = useStyles();
  return (
    <Grid className={classes.root} container item xs={12} justify="center" alignContent="center">
      <Typography component="div" align="center"> 
        <Box>
          Lucas Ranieri ©2020
        </Box>
      </Typography>
    </Grid>
)}

export default Footer;
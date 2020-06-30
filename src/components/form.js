import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import FormikForm from './FormikForm'
import { makeStyles } from '@material-ui/core/styles';
// import { Container } from './styles';
const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow:1,   
    paddingTop:"40px",
    justifyContent:"center",
    background:"#252934",
    alignItems: "center", 
    margin:"0px",
  },
  contact:{
    color:"#FFF"
  }
}))
function Form() {
  const classes = useStyles();
  return(

    <Grid className={classes.root} container item  xs={12} spacing={2} justify="center" alignContent="center">

      <Grid container item xs={12} justify="center" alignContent="center">

      <Typography className={classes.contact} variant="h4" align="center">
        <Box fontWeight={600} fontSize={30}>
          CONTACT
        </Box>
        <Box fontWeight={600} >____</Box>
      </Typography>

      </Grid>

      <Grid container item xs={9} justify="center" alignContent="center">
      
        <FormikForm />

        

      </Grid>

    </Grid>




  )}

export default Form;
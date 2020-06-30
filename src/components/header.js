import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
  },
  bar:{
    backgroundColor: "#1e1e1e",
  },
  link:{
    textDecoration:"none",
    color:"#fff"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.link} to='/'>
            Arthur Iung
          </Link>
          </Typography>
          <Link className={classes.link} to='/projects'>
            <Button color="inherit" variant="outlined">Projects</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
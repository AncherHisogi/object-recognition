import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Particles from 'react-particles-js';

const particleOptions = {
  particles:{
    line_linked: {
      color: '#ffffff',
      },
    number:{
      value: 30,
      density: {
        enable: true,
        value_area: 200,
      }
    }
  },

  interactivity: {
    detect_on: "window",
    events: {
        onhover: {
            enable: true,
            mode: "repulse",
        }
    }
}

};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appMenu:{
    height: '300px',
    background: 'rgb(110,168,255)',
    background: 'radial-gradient(circle, rgba(110,168,255,1) 0%, rgba(18,128,235,1) 100%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appMenu}>
      <Particles className='particles' 
                params={particleOptions}/>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Object recognition
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UrlInput from '../UlrInput/UlrInput';
import Picture from '../Picture/Picture.js';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50,
    zIndex: 1,
    position: 'relative',
    top: -250,
  },
  grid: {
    justifyContent:'center',
    display:'flex',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    background: 'rgb(110,168,255)',
    background: 'radial-gradient(circle, rgba(110,168,255,1) 0%, rgba(18,128,235,1) 100%)',
  },
}));



export default function InputField({onInputChange, onButtonSubmit, imageUrl}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.grid} item xs={12} sm={12}>
          <Paper className={classes.paper}> <UrlInput onInputChange={onInputChange}onButtonSubmit={onButtonSubmit}/> </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={12}>
          <Paper className={classes.paper}> <Picture imageUrl={imageUrl}/> </Paper> 
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={12}>
        <List className={classes.list}>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
            <ListItem> s </ListItem>
          </List>
          </Grid>
      </Grid>
    </div>
  );
}






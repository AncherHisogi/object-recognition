import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UrlInput from '../UlrInput/UlrInput';
import Picture from '../Picture/Picture.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50,
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}> <UrlInput /> </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}> <Picture /> </Paper>
        </Grid>
      </Grid>
    </div>
  );
}






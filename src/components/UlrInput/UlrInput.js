import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function UrlInput() {
  const classes = useStyles();

  return (
    <Box color="text.primary" clone>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
            id="outlined-basic"
            label="Input URL"
            variant="outlined"
            style = {{width:'50%', minWidth: '200px'}}/>

        <Button variant="contained" color="primary" href="#contained-buttons" style = {{height:'7ch'}}>Search</Button>
            
        </form>

        
    </Box>
  );
}

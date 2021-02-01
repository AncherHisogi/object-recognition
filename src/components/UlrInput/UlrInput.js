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

export default function UrlInput({onInputChange, onSearch}) {
  const classes = useStyles();

  return (
    <div>
      <Box color="text.primary" clone >
          <form className={classes.root} noValidate autoComplete="off">
              <TextField 
              id="outlined-basic"
              label="Input URL"
              variant="outlined"
              style = {{minWidth: '200px'}}
              onChange={onInputChange}
              />
          
          <Button variant="contained"   color="primary"style = {{height:'7ch'}} onClick={onSearch} >Search</Button>
          </form>
          
      </Box>
     
    </div>
  );
}

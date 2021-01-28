import React from 'react';
import Box from '@material-ui/core/Box';
import test from '../Picture/51897234_401.jpg';

export default function Picture() {
    return (
      <Box color="text.primary" clone>
          <img alt='test' src={test} style={{width: '100%', maxWidth: '500px'}}/>
      </Box>
    );
  }

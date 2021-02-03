import React from 'react';
import Box from '@material-ui/core/Box';


export default function Picture({imageUrl}) {
    return (
      <Box color="text.primary" clone>
          <img alt='test' src={imageUrl} style={{width: '100%', maxWidth: '500px'}}/>
      </Box>
    );
  }

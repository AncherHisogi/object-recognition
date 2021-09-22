import React from 'react';
import Box from '@material-ui/core/Box';



export default function Picture({imageUrl}) {
  if(imageUrl===undefined){
    console.log('error')
  }
  else {
      return (
        
           <img alt='' src={imageUrl} style={{maxWidth: '500px', width: '100%'}}/>
       
      );
  }
} 


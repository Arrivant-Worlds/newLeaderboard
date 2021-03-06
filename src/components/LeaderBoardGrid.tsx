import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';


import LeaderCard from './LeaderBoardCard';

export default function LeaderBoardGrid() {

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={14}>
          {[0, 1, 2,3,4,5].map((value) => (
            <Grid key={value} item>
              <LeaderCard
                handle = {'@0xBelkan'}
                isActive = {true}
                
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
  );
}
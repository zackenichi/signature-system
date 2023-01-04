import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const DateSigned = ({ signedDate }) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography fontWeight="bold">Date signed</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          value={signedDate.toLocaleDateString('en-AU', options)}
          sx={{ pointerEvents: 'none' }}
        />
      </Grid>
    </>
  );
};

export default DateSigned;

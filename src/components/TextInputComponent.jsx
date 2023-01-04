import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const TextInputComponent = ({ Label, textRef }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography fontWeight="bold">{Label}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth inputRef={textRef} />
      </Grid>
    </>
  );
};

export default TextInputComponent;

import { Button, Grid } from '@mui/material';
import React from 'react';

const FormControls = ({ handleSave, handleClear }) => {
  return (
    <>
      <Grid item xs={12} textAlign="right">
        <Button
          variant="outlined"
          sx={{ marginRight: '10px' }}
          onClick={handleClear}
        >
          Clear
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Grid>
    </>
  );
};

export default FormControls;

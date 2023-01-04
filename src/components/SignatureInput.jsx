import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignatureInput = ({ sigRef, clearSignature }) => {
  return (
    <>
      <Grid item xs={6}>
        <Typography fontWeight="bold">Signature</Typography>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Button variant="text" onClick={clearSignature}>
          Clear signature
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ background: 'rgb(238, 235, 235)' }}>
          <SignatureCanvas
            penColor="black"
            ref={sigRef}
            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          />
        </Box>
      </Grid>
    </>
  );
};

export default SignatureInput;

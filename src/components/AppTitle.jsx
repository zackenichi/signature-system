import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';

const AppTitle = ({ handleOpen }) => {
  return (
    <>
      <Grid item xs={10}>
        <Typography
          variant="h1"
          fontSize="24px"
          textAlign="center"
          fontWeight="bold"
        >
          Sample form with signature input
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign="right">
        <Tooltip title="About">
          <IconButton onClick={handleOpen}>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </>
  );
};

export default AppTitle;
